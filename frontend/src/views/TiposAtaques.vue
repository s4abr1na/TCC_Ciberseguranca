<template>
  <div class="pagina-ataques">
    <AppHeader />

    <main class="conteudo">
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Conheça os Tipos de Ataques
      </div>

      <nav class="lista-ataques">

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-aplicativos-financeiros')">
          <span class="texto">Aplicativos financeiros</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-compras-pela-internet')"> 
          <span class="texto">Compras pela internet</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-dados-pessoais')"> 
          <span class="texto">Dados pessoais</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-noticias-falsas')">
          <span class="texto">Notícias falsas</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-redes-sociais')">
          <span class="texto">Redes sociais</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-seguranca-aparelho')">
          <span class="texto">Segurança no seu aparelho</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-senhas-e-acessos')">
          <span class="texto">Senhas e acessos</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-wifi-e-internet')">
          <span class="texto">Uso de Wi-fi e Internet</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-vazamento-de-dados')">
          <span class="texto">Vazamento de Dados</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-virus-e-aplicativos-maliciosos')">
          <span class="texto">Vírus e Aplicativos Maliciosos</span>
        </button>
      </nav>
    </main>

    <!--menu navegação-->
    <AppFooterAtaques/>
  </div>
</template>

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

<style>
@import '@/assets/style.css';
</style>