<template>
  <div class="boas-praticas-pagina-backup">
    <AppHeader />

   <!--Conteúdo principal-->
    <main class="conteudo">
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Adote Boas Práticas
      </div>

      <section class="info-ataque">
        <p class="subtitulo-tema">Golpes: Não se deixe enganar</p>
        
        <p class="texto-descricao">
          Golpistas são especialistas em criar situações de urgência e medo para fazer as pessoas agirem sem pensar. Mensagens dizendo que sua conta será bloqueada, que um familiar está em perigo ou que você ganhou um prêmio são exemplos clássicos. O objetivo é sempre o mesmo: fazer com que você forneça dados pessoais, senhas ou dinheiro rapidamente, antes que você possa refletir. Sempre que receber uma mensagem assim, respire fundo, não tome nenhuma atitude imediata e confirme a situação diretamente com a empresa ou pessoa envolvida, por meio dos canais oficiais.
        </p>

        <button class="btn-cartilha" @click="abrirModal('cartilha')">
          Cartilha
        </button>

      </section>
    </main>

    <!-- Modal -->
    <div v-if="modalAberto" class="modal-overlay" @click.self="fecharModal">
      <div class="modal-container">

        <div class="modal-header">
          <button class="btn-fechar" @click="fecharModal">✕</button>
        </div>

        <!-- Cartilha: abre PDF no navegador externo -->
        <div v-if="tipoModal === 'cartilha'" class="modal-cartilha">
          <p>A cartilha será aberta no seu navegador.</p>
          <button class="btn-abrir-cartilha" @click="abrirCartilha">
            Abrir Cartilha
          </button>
        </div>

      </div>
    </div>

    <AppFooterBoasPraticas />

  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooterBoasPraticas from '@/components/AppFooterBoasPraticas.vue'
import { Browser } from '@capacitor/browser'

export default {
  name: 'BoasPraticasNaoSeDeixeEnganar',

  components: {
    AppHeader,
    AppFooterBoasPraticas
  },

  data() {
    return {
      modalAberto: false,
      tipoModal: null
    }
  },

  methods: {
    abrirModal(tipo) {
      this.tipoModal = tipo
      this.modalAberto = true
    },

    fecharModal() {
      this.modalAberto = false
      this.tipoModal = null
    },

    async abrirCartilha() {
      await Browser.open({ url: 'https://cartilha.cert.br/fasciculos/golpes/fasciculo-golpes.pdf' })
      this.fecharModal()
    }
  }
}
</script>

<!-- Estilo global -->
<style>
  @import '@/assets/style.css';
</style>
