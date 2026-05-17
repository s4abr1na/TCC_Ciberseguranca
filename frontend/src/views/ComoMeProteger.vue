<template>
  <div class="pagina-como-me-proteger">
    <header class="header-azul">
      <div class="logo-area">
        <img src="@/assets/logo-fundo-branco-lupa.png" class="logo-imagem"/>
      </div>
    </header>

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
        <img src="@/assets/icone-protecao-preenchido.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Proteção</span>
      </button>

      <button @click="$router.push('/pagina-boas-praticas')" class="nav-item">
        <img src="@/assets/icone-boas-praticas-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Boas práticas</span>
      </button>

      <button @click="$router.push('/pagina-canais-de-comunicacao')" class="nav-item">
        <img src="@/assets/icone-canais-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Canais</span>
      </button>    
    </footer>
  </div>
</template>

<style>
  @import "@/assets/style.css";
</style>