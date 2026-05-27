<template>
  <div class="tipos-ataques-pagina-seguranca-aparelho">
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
        <p class="subtitulo-tema">Segurança no Seu Aparelho</p>
        
        <p class="texto-descricao">
          Ataques direcionados ao próprio aparelho — seja celular, tablet ou computador — são muito frequentes e podem acontecer de formas variadas. 
          <br><br>
          O criminoso pode explorar falhas no sistema operacional desatualizado, instalar programas maliciosos sem que o usuário perceba, ou acessar o aparelho fisicamente caso ele seja furtado ou emprestado. 
          <br><br>
          Esses ataques comprometem toda a segurança do dispositivo de uma vez só, dando ao invasor acesso a mensagens, fotos, aplicativos, senhas salvas e dados bancários. 
          <br><br>
          Os prejuízos são amplos: perda de privacidade, roubo de identidade, golpes financeiros e até o uso do seu aparelho para atacar outras pessoas, sem que você saiba.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ShVBcxzrK0A?si=RXll9zChQxmFSSvG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
