<template>
  <div class="tipos-ataques-pagina-aplicativos-financeiros">
    <AppHeader />

   <!--Conteúdo principal-->
    <main class="conteudo">
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Conheça os Tipos de Ataques
      </div>

      <section class="info-ataque">
        <p class="subtitulo-tema">Aplicativos Financeiros</p>
        
        <p class="texto-descricao">
            Os aplicativos financeiros, como os de banco, carteira digital e investimentos, são alvos frequentes de ataques digitais por envolverem diretamente o dinheiro das pessoas. 
            <br><br>
            Os criminosos atuam de diferentes formas: criam aplicativos falsos que imitam os originais para roubar senhas e dados, enviam mensagens pedindo que a vítima atualize o app por meio de um link falso, ou instalam programas espiões no celular que capturam tudo o que é digitado. 
            <br><br>
            Esse tipo de ataque é muito comum e cresce a cada ano, especialmente com o aumento do uso do Pix e dos bancos digitais. 
            <br><br>
            Os prejuízos podem ser graves: transferências não autorizadas, esvaziamento de contas, empréstimos feitos em nome da vítima e até o comprometimento do score de crédito.
        </p>

        <!-- Botão que abre o modal -->
         <!--MODAL: é uma janela que aparece por cima do conteúdo da página, bloqueando a interação com o resto até ser fechada-->
        <button class="btn-video-destaque" @click="modalAberto = true">
          ▶ Vídeo
        </button>
      </section>
    </main>

    <!-- Modal do vídeo -->
     <!-- O v-if é uma instrução que mostrará ou esconderá o vídeo se modalAberto for true ou false-->
    <div v-if="modalAberto" class="modal-overlay" @click.self="fecharVideo">
      <div class="modal-container">
        <div class="modal-header">
          <span class="modal-titulo">Vídeo</span>
          <button class="btn-fechar" @click="fecharVideo">✕</button>
        </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/4EV7-DkClOk?si=VVHwUzIEDxI0ppsZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
    </div>

    <!--menu navegação-->
    <AppFooterAtaques/>
  </div>
</template>

<script setup>
  import { ref } from 'vue'

  const modalAberto = ref(false)

  function fecharVideo() {
    modalAberto.value = false
  }
</script>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooterAtaques from "@/components/AppFooterAtaques.vue";

export default {
  name: "ComoMeProteger",
  components: {
    AppHeader,
    AppFooterAtaques
  }
};
</script>

<!--ESTILIZAÇÃO-->
<style>
  @import "@/assets/style.css";
</style>