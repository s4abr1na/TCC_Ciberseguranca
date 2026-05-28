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
        <p class="subtitulo-tema">Comércio via Internet</p>
        
        <p class="texto-descricao">
          Comprar pela internet pode ser muito vantajoso: há mais variedade, preços competitivos e a comodidade de receber em casa. Porém, é preciso ter atenção para não cair em armadilhas. Prefira lojas conhecidas e com boa reputação, verifique se o site possui o símbolo de cadeado na barra de endereço (indicando que é seguro) e pesquise avaliações de outros compradores antes de finalizar a compra. Desconfie de ofertas com preços muito abaixo do mercado e evite fazer pagamentos via depósito ou Pix para vendedores desconhecidos.
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
  name: 'BoasPraticasComercioViaInternet',

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
      await Browser.open({ url: 'https://drive.google.com/file/d/1kL-x_rSCzWLfPJ-xzq3zaCg7YIEI0GHm/view?usp=sharing' })
      this.fecharModal()
    }
  }
}
</script>

<!-- Estilo global -->
<style>
  @import '@/assets/style.css';
</style>
