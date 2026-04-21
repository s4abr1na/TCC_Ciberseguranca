<template>
  <div class="pagina-noticias-falsas">
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
        <h2 class="titulo-sessao">Tipos de Ataques</h2>
      </div>

      <section class="info-ataque">
        <h3 class="subtitulo-tema">Notícias Falsas</h3>
        
        <p class="texto-descricao">
            As notícias falsas são uma das formas mais comuns de manipulação da informação em ambientes digitais. Elas podem ser disseminadas por meio de redes sociais, e-mails ou sites maliciosos, com o objetivo de enganar e influenciar a opinião pública.
            <br><br>
            Para se proteger contra as notícias falsas, é importante verificar a fonte da informação, buscar confirmação em outros meios confiáveis e não compartilhar conteúdo sem antes verificar sua veracidade. Além disso, manter-se informado sobre os principais temas e tendências da atualidade pode ajudar a identificar informações suspeitas.
            <br><br>
            A conscientização sobre o tema é fundamental para combater a desinformação e promover um ambiente digital mais seguro e responsável.
        </p>

        <button class="btn-video-destaque">
          Vídeo
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
  @import "@/assets/style.css";
</style>