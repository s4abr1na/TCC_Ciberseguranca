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
            O uso de Wi-Fi e internet é uma parte essencial da vida moderna, mas também pode expor seus dados a riscos. Redes Wi-Fi públicas, por exemplo, podem ser usadas por criminosos para interceptar informações sensíveis.
            <br><br>
            Para se proteger, evite acessar contas bancárias ou outras informações confidenciais em redes Wi-Fi públicas. Use sempre uma conexão segura e confiável.
            <br><br>
            Além disso, mantenha seu dispositivo atualizado com as últimas correções de segurança e utilize um firewall e antivírus confiáveis. Com alguns cuidados simples, você pode aproveitar toda a praticidade da internet com muito mais segurança e tranquilidade.
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