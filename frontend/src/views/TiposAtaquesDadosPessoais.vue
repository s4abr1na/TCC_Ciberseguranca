<template>
  <div class="tipos-ataques-pagina-dados-pessoais">
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
        <p class="subtitulo-tema">Dados Pessoais</p>
        
        <p class="texto-descricao">
          O roubo de dados pessoais é um ataque que tem como objetivo coletar informações como nome completo, CPF, data de nascimento, endereço e dados bancários para usá-las de forma criminosa. 
          <br><br>
          Esse tipo de ataque pode acontecer por meio de formulários falsos, sites fraudulentos, vazamentos em empresas que armazenam seus dados ou mesmo por engenharia social — quando o criminoso conversa com a vítima e a convence a fornecer as informações. 
          <br><br>
          Com esses dados em mãos, o criminoso pode abrir contas bancárias, solicitar empréstimos, fazer compras e cometer crimes em nome da vítima — o chamado "roubo de identidade". 
          <br><br>
          Os prejuízos podem ser enormes e demorar muito tempo para ser resolvidos, envolvendo processos junto a bancos, órgãos de proteção ao crédito e até a Justiça. 
          <br><br>
          Compartilhar dados pessoais apenas em situações realmente necessárias e em plataformas confiáveis é fundamental para evitar esse tipo de problema.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/s4It-31WWh4?si=vRKRWu1Wvg3U_1lw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
