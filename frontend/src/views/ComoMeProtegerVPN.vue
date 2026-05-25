<template>
  <div class="como-me-proteger-pagina-vpn">
    <AppHeader />

    <!-- Conteúdo-->
    <main class="conteudo">
      
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Saiba Como se Proteger
      </div>

      <p class="texto-descricao">
        <strong>O que é?</strong><br>
        texto aqui
        <br><br>
        <strong>Como funciona?</strong><br>
        texto aqui
        <br><br>
        <strong>Sugestão para download:</strong>
        </p>
    
    </main>

    <AppFooterProtecao />
   </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooterProtecao from "@/components/AppFooterProtecao.vue";

export default {
  name: "ComoMeProteger",
  components: {
    AppHeader,
    AppFooterProtecao
  }
};
</script>

<style>
    @import '@/assets/style.css'
</style>