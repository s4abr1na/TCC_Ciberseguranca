<template>
  <div class="boas-praticas-pagina-phishing">
    <header class="header-azul">
      <div class="logo-area">
        <h1 class="logo-texto">CIBER</h1>
        <p class="logo-subtexto">GUARDIÃ🌍</p>
      </div>
    </header>

   <!--Conteúdo principal-->
    <main class="conteudo">
      <div class="navegacao-topo">
        <button @click="$router.back()" class="btn-voltar" aria-label="Voltar">
          ←
        </button>
        <h2 class="titulo-sessao">Boas Práticas</h2>
      </div>

      <section class="info-ataque">
        <h3 class="subtitulo-tema">Phishing e Outros Golpes</h3>
        
        <p class="texto-descricao">
          Backup é o Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidente ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>

        <button class="btn-cartilha">
            Cartilha
        </button>
        
        <button class="btn-podcast">
            Podcast
        </button>
      </section>
    </main>

          <!--menu navegação-->
    <footer class="menu-inferior">
      <button class="nav-item">
        <span class="nav-texto">Início</span>
      </button>
      <button class="nav-item">
        <span class="nav-texto">Ataques</span>
      </button>
      <button class="nav-item">
        <span class="nav-texto">Proteção</span>
      </button>
      <button class="nav-item">
        <span class="nav-texto">Boas práticas</span>
      </button>
      <button class="nav-item">
        <span class="nav-texto">Canais</span>
      </button>
    </footer>
  </div>
</template>


<!--ESTILIZAÇÃO-->
<style>
  @import '@/assets/style.css'
</style>