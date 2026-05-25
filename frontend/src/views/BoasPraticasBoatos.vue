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
        <p class="subtitulo-tema">Boatos</p>
        
        <p class="texto-descricao">
          Backup é o Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidente ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <button class="btn-cartilha" @click="abrirModal('cartilha')">
          Cartilha
        </button>

        <button class="btn-podcast" @click="abrirModal('podcast')">
          Podcast
        </button>
      </section>
    </main>
<!-- Modal -->
    <div v-if="modalAberto" class="modal-overlay" @click.self="fecharModal">
      <div class="modal-container">

        <div class="modal-header">
          <span class="modal-titulo">{{ tipoModal === 'podcast' ? 'Podcast' : 'Cartilha' }}</span>
          <button class="btn-fechar" @click="fecharModal">✕</button>
        </div>

        <!-- Podcast: abre dentro do app com iframe -->
        <iframe
          v-if="tipoModal === 'podcast'"
          src="https://www.youtube.com/embed/o4enW8NP-JY?autoplay=1"
          title="Podcast - Autenticação"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          class="modal-iframe"
        />

        <!-- Cartilha: abre PDF no navegador externo -->
        <div v-else-if="tipoModal === 'cartilha'" class="modal-cartilha">
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
  name: 'BoasPraticasAutenticacao',

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
      await Browser.open({ url: 'https://cartilha.cert.br/fasciculos/autenticacao/fasciculo-autenticacao.pdf' })
      this.fecharModal()
    }
  }
}
</script>

<!-- Estilo global -->
<style>
  @import '@/assets/style.css';
</style>
