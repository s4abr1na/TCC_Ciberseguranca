<template>
  <div class="tipos-ataques-pagina-vazamento-de-dados">
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
        <p class="subtitulo-tema">Vazamento de Dados</p>
        
        <p class="texto-descricao">
          O vazamento de dados é um tipo de incidente em que informações pessoais de muitas pessoas são expostas sem autorização, geralmente devido a falhas de segurança em empresas, instituições ou serviços digitais que armazenam esses dados. 
          <br><br>
          Ele pode acontecer por ataques de hackers, por descuido de funcionários ou por falhas nos sistemas de proteção das organizações. 
          <br><br>
          No Brasil, vazamentos de grande escala já expuseram dados de centenas de milhões de pessoas, incluindo CPFs, endereços, dados bancários e muito mais. 
          <br><br>
          Os prejuízos para as vítimas são sérios: as informações expostas podem ser usadas para aplicar golpes, abrir contas fraudulentas ou praticar o roubo de identidade. 
          <br><br>
          O problema é que, na maioria das vezes, a pessoa não sabe que seus dados foram vazados até ser contactada por um golpista ou notar movimentações suspeitas. 
          <br><br>
          Monitorar regularmente suas contas, trocar senhas periodicamente e usar ferramentas que alertam sobre vazamentos são formas de se manter protegido.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ruOUbAPqObo?si=X4dAqc3-fY3UoJQf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
