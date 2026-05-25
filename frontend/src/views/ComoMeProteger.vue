<template>
  <div class="pagina-como-me-proteger">
    <AppHeader />

    <main class="conteudo">
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Saiba Como se Proteger
      </div>

        <button @click="$router.push('/como-me-proteger-pagina-dicas-rapidas')" class="btn-dicas-rapidas">
          Dicas rápidas
        </button>

        <button @click="$router.push('/como-me-proteger-pagina-tecnologias-para-prevencao')" class="btn-tecnologias">
          Tecnologias para prevenção
        </button>
    </main>

    <!--menu navegação-->
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
  @import "@/assets/style.css";
</style>