<template>
  <div class="como-me-proteger-pagina-firewall-pessoal">
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
            Um firewall pessoal é um software de segurança instalado em um computador individual (desktop, notebook, celular) que monitora, filtra e controla o tráfego de rede de entrada e saída. 
            <br><br>
            <strong>Como funciona?</strong><br>
            É como uma barreira de proteção, bloqueando acessos não autorizados e ameaças externas, como hackers e malwares, com base em regras pré-definidas.
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