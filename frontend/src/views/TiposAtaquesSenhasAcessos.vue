<template>
  <div class="tipos-ataques-pagina-senhas-e-acessos">
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
        <p class="subtitulo-tema">Senhas e Acessos</p>
        
        <p class="texto-descricao">
          Um dos ataques mais comuns no mundo digital é justamente o roubo ou a descoberta de senhas. 
          <br><br>
          Criminosos utilizam diversas técnicas para isso: podem tentar combinações óbvias como datas de nascimento e nomes de pessoas próximas, usar programas que testam milhares de senhas automaticamente, ou ainda enganar a vítima para que ela mesma entregue sua senha sem perceber. 
          <br><br>
          Esse tipo de ataque é extremamente comum e pode acontecer com qualquer pessoa que use a internet. 
          <br><br>
          Uma vez que o criminoso tem acesso à sua senha, ele pode entrar nas suas contas de banco, e-mail ou redes sociais, realizar transações financeiras em seu nome, roubar informações pessoais e até bloquear o acesso para que você não consiga mais recuperar sua própria conta. 
          <br><br>
          Os prejuízos vão desde a perda de dinheiro até o comprometimento da sua identidade digital.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/nKPAlY3Taxs?si=bkdVLatjo7t5iERz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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