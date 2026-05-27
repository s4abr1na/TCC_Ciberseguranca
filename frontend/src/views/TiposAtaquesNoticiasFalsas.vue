<template>
  <div class="tipos-ataques-pagina-noticias-falsas">
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
        <p class="subtitulo-tema">Notícias Falsas</p>
        
        <p class="texto-descricao">
          As notícias falsas, conhecidas como fake news, são um tipo de ataque à informação e à confiança das pessoas. 
          <br><br>
          Elas são criadas e espalhadas intencionalmente para enganar, manipular opiniões, gerar pânico ou desviar a atenção de assuntos importantes. 
          <br><br>
          No contexto da segurança digital, notícias falsas também são usadas como isca: uma mensagem alarmante pode induzir a vítima a clicar em um link malicioso, baixar um arquivo infectado ou fornecer dados pessoais. 
          <br><br>
          Esse tipo de ataque é amplamente difundido e se espalha principalmente pelo WhatsApp e pelas redes sociais. 
          <br><br>
          Os prejuízos vão além do individual: fake news podem prejudicar a saúde pública, influenciar eleições, destruir reputações e causar conflitos entre pessoas e comunidades.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/69FjRnhxFfM?si=SB_S0pf7HJLstWPR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
