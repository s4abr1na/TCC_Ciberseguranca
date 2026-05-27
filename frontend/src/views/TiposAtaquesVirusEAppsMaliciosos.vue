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
          Vírus e aplicativos maliciosos são programas criados especificamente para causar danos ou roubar informações. 
          <br><br>
          Eles podem se disfarçar de jogos, aplicativos utilitários, atualizações de sistema ou até de antivírus falsos. 
          <br><br>
          Uma vez instalados no aparelho, agem silenciosamente: alguns registram tudo o que você digita, outros capturam fotos e vídeos pela câmera, e há ainda os que usam seu aparelho para atacar outros dispositivos. 
          <br><br>
          Esse tipo de ameaça é uma das mais comuns no mundo digital e evolui constantemente para driblar as proteções existentes. 
          <br><br>
          Os prejuízos incluem roubo de senhas e dados bancários, invasão de privacidade, lentidão e danos ao aparelho, e prejuízos financeiros significativos.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/LrG82ajTBcA?si=mr5jP7J7F0-NPDPp" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
