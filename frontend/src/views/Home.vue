<template>
  <section class="home-container">
    <header class="header-azul">
      <div class="logo-area">
        <img src="@/assets/logo-fundo-branco-lupa.png" class="logo-imagem"/>
      </div>
    </header>

    <div class="content">
      <h2 class="titulo-boas-vindas">Seja bem-vindo(a)!</h2>

      <div class="grade-botoes">

        <button @click="$router.push('/tipos-de-ataques')" class="btn-menu">
          Conheça os Tipos de Ataques
        </button>

        <button @click="$router.push('/pagina-como-me-proteger')" class="btn-menu">
          Saiba Como se Proteger
        </button>

        <button @click="$router.push('/pagina-boas-praticas')" class="btn-menu">
          Adote Boas Práticas
        </button>

        <button @click="$router.push('/canais-de-comunicacao')" class="btn-menu">
          Canais para Relatar Ataque
        </button>
      </div>
    </div>
  </section>
</template>

<style>
@import '@/assets/style.css';
</style>