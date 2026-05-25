<template>
  <div class="tipos-ataques-pagina-mensagens-e-links-falsos">
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
        <p class="subtitulo-tema">Mensagens e Links Falsos</p>
        
        <p class="texto-descricao">
            Mensagens e links falsos são uma das formas mais comuns de golpes virtuais. Criminosos enviam mensagens que parecem ser de empresas, bancos ou até amigos, mas na verdade são falsas. Essas mensagens podem conter links que levam a sites fraudulentos, onde tentam roubar suas informações pessoais ou instalar vírus no seu aparelho.
            <br><br>
            Para se proteger, é importante nunca clicar em links suspeitos ou baixar arquivos de remetentes desconhecidos. Sempre verifique o remetente da mensagem e desconfie de ofertas muito boas para serem verdade. Se receber uma mensagem de um banco ou empresa, é melhor acessar o site oficial diretamente pelo navegador do que clicar no link enviado.
            <br><br>
            Lembre-se: quando algo parece estranho, é melhor não arriscar. Com atenção e cuidado, você pode evitar cair nesses golpes e manter suas informações seguras.
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
