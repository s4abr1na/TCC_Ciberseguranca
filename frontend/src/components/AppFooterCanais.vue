<template>
  <footer class="menu-inferior">

    <button @click="$router.push('/home')" class="nav-item">
      <img src="@/assets/icone-home-vazio.png" class="icone-menu-navegacao"/>
      <span class="nav-texto">Início</span>
    </button>

    <button @click="$router.push('/tipos-de-ataques')" class="nav-item">
      <img src="@/assets/icone-ataques-vazio.png" class="icone-menu-navegacao"/>
      <span class="nav-texto">Ataques</span>
    </button>

    <button @click="$router.push('/pagina-como-me-proteger')" class="nav-item">
      <img src="@/assets/icone-protecao-vazio.png" class="icone-menu-navegacao"/>
      <span class="nav-texto">Proteção</span>
    </button>

    <button @click="$router.push('/pagina-boas-praticas')" class="nav-item">
      <img src="@/assets/icone-boas-praticas-vazio.png" class="icone-menu-navegacao"/>
      <span class="nav-texto">Boas práticas</span>
    </button>

    <button @click="$router.push('/pagina-canais-de-comunicacao')" class="nav-item">
      <img src="@/assets/icone-canais-preenchido.png" class="icone-menu-navegacao"/>
      <span class="nav-texto">Canais</span>
    </button>

  </footer>
</template>

<script>
export default {
  name: 'AppFooterCanais'
}
</script>
