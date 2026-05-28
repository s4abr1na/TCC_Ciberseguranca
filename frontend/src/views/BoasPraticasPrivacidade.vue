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
        <p class="subtitulo-tema">Privacidade</p>
        
        <p class="texto-descricao">
          Privacidade digital é o direito de controlar quais informações suas estão disponíveis na internet e para quem. Muitas vezes, sem perceber, compartilhamos mais do que deveríamos nas redes sociais ou em aplicativos. Revise periodicamente as configurações de privacidade das plataformas que você usa, evite publicar informações como endereço, telefone, número de documentos ou rotinas diárias. Lembre-se de que o que é postado na internet pode se espalhar rapidamente e ser difícil de apagar.
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
  name: 'BoasPraticasPrivacidade',

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
      await Browser.open({ url: 'https://drive.google.com/file/d/1kIUFPg_zekM9UGKJ2Q3Nj3_1d6yV7ya3/view?usp=sharing' })
      this.fecharModal()
    }
  }
}
</script>

<!-- Estilo global -->
<style>
  @import '@/assets/style.css';
</style>
