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
        <p class="subtitulo-tema">Trabalho remoto</p>
        
        <p class="texto-descricao">
          Trabalhar de casa, o chamado home office, exige cuidados extras com a segurança digital. Use apenas equipamentos de confiança e conecte-se a redes seguras para acessar sistemas da empresa. Evite compartilhar informações profissionais em aplicativos ou canais pessoais, como grupos de WhatsApp, e fique atento a e-mails e mensagens suspeitas que possam tentar acessar os sistemas da organização por meio de você. Manter o computador atualizado e usar senhas seguras são medidas essenciais nesse contexto.
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
  name: 'BoasPraticasTrabalhoRemoto',

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
      await Browser.open({ url: 'https://cartilha.cert.br/fasciculos/trabalho-remoto/fasciculo-trabalho-remoto.pdf' })
      this.fecharModal()
    }
  }
}
</script>

<!-- Estilo global -->
<style>
  @import '@/assets/style.css';
</style>
