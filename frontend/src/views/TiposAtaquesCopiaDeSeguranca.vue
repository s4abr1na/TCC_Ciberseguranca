<template>
  <div class="tipos-ataques-pagina-copia-de-seguranca">
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
        <p class="subtitulo-tema">Cópia de Segurança</p>
        
        <p class="texto-descricao">
            Fazer cópias de segurança, também chamadas de “backup”, é uma das formas mais simples e importantes de se proteger no mundo digital. Imagine perder fotos de família, contatos ou documentos importantes por causa de um vírus ou golpe — isso acontece com mais frequência do que parece. Muitos ataques virtuais, como o sequestro de dados (quando criminosos bloqueiam seus arquivos e pedem dinheiro), podem causar grandes prejuízos, principalmente para quem não tem uma cópia guardada.<br>
            <br>
            Por isso, é essencial manter uma cópia dos seus arquivos em um local seguro. Você pode usar um pendrive, um HD externo ou até serviços na internet (nuvem), que salvam seus dados automaticamente. O ideal é fazer isso com frequência, por exemplo, uma vez por semana ou sempre que adicionar algo importante.<br>
            <br>
            Pense no backup como um “plano B”: se algo der errado, você não perde tudo. É uma atitude simples, mas que faz toda a diferença para sua segurança digital e tranquilidade no dia a dia.
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