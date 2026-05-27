<template>
  <div class="tipos-ataques-pagina-wifi-e-internet">
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
        <p class="subtitulo-tema">Wi-Fi e Internet</p>
        
        <p class="texto-descricao">
          As redes de internet, especialmente as públicas e gratuitas, podem ser usadas como porta de entrada para ataques digitais. 
          <br><br>
          Um tipo comum é o chamado "ataque do homem do meio", em que o criminoso se posiciona entre o usuário e a rede para interceptar tudo o que é enviado e recebido — incluindo senhas, mensagens e dados bancários. 
          <br><br>
          Outra modalidade é a criação de redes Wi-Fi falsas com nomes parecidos com os de lugares conhecidos (como "Shopping_Free_WiFi"), que enganam as pessoas e capturam seus dados assim que elas se conectam. 
          <br><br>
          Esse tipo de ataque é silencioso e invisível para a vítima, que normalmente não percebe que está sendo monitorada. 
          <br><br>
          Os prejuízos incluem o roubo de senhas e informações pessoais e o acesso indevido a contas e serviços. 
          <br><br>
          Evitar usar redes públicas para acessar bancos ou serviços sensíveis e preferir os dados móveis do celular nesses casos são medidas simples e eficazes.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rpC723CLaVk?si=X0CJjcz_Fz2BNfiu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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