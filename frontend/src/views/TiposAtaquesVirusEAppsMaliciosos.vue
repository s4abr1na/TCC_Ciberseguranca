<template>
  <div class="tipos-ataques-pagina-virus-e-aplicativos-maliciosos">
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
        <p class="subtitulo-tema">Vírus e Aplicativos Maliciosos</p>
        
        <p class="texto-descricao">
            Os vírus e aplicativos maliciosos são programas que se infiltram em seu dispositivo sem seu conhecimento, podendo causar danos significativos aos seus dados e à segurança do sistema. Eles podem ser transmitidos por e-mails, links suspeitos, downloads não confiáveis ou até mesmo por meio de dispositivos conectados.
            <br><br>
            Para se proteger, é essencial manter seu sistema operacional e softwares atualizados, utilizar um antivírus confiável e evitar clicar em links ou baixar arquivos de fontes desconhecidas. Além disso, sempre que possível, evite usar Wi-Fi públicas para acessar informações sensíveis.
            <br><br>
            Com algumas práticas simples de segurança, você pode reduzir significativamente o risco de se infectar com vírus ou aplicativos maliciosos.
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
          <iframe
            src="https://www.youtube.com/embed/2LYPyUk-L0k?si=fQzpbqQaQ5WgrsfO&autoplay=1"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          />
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
