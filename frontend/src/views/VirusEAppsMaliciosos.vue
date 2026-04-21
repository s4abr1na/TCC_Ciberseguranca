<template>
  <div class="pagina-virus-e-aplicativos-maliciosos">
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
        <h3 class="subtitulo-tema">Vírus e Aplicativos Maliciosos</h3>
        
        <p class="texto-descricao">
            Os vírus e aplicativos maliciosos são programas que se infiltram em seu dispositivo sem seu conhecimento, podendo causar danos significativos aos seus dados e à segurança do sistema. Eles podem ser transmitidos por e-mails, links suspeitos, downloads não confiáveis ou até mesmo por meio de dispositivos conectados.
            <br><br>
            Para se proteger, é essencial manter seu sistema operacional e softwares atualizados, utilizar um antivírus confiável e evitar clicar em links ou baixar arquivos de fontes desconhecidas. Além disso, sempre que possível, evite usar Wi-Fi públicas para acessar informações sensíveis.
            <br><br>
            Com algumas práticas simples de segurança, você pode reduzir significativamente o risco de se infectar com vírus ou aplicativos maliciosos.
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
  @import '@/assets/style.css'
</style>