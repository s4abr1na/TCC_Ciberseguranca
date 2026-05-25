<template>
  <div class="como-me-proteger-pagina-tecnologias-para-prevencao">
    <AppHeader />

    <!-- Conteúdo-->
    <main class="conteudo">
      
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Saiba Como se Proteger
      </div>

        <div class="grade-botoes">
            <button @click="$router.push('/como-me-proteger-pagina-firewall-pessoal')" class="btn-video1">
                Firewall Pessoal
            </button>

            <button @click="$router.push('/como-me-proteger-pagina-antivirus')" class="btn-video2">
                Antivírus
            </button>

            <button @click="$router.push('/como-me-proteger-pagina-vpn')" class="btn-video2">
                VPN
            </button>
        </div>
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