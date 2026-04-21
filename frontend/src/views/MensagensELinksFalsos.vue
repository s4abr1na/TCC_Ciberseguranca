<template>
  <div class="pagina-mensagens-e-links-falsos">
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
        <h3 class="subtitulo-tema">Mensagens e Links Falsos</h3>
        
        <p class="texto-descricao">
            Mensagens e links falsos são uma das formas mais comuns de golpes virtuais. Criminosos enviam mensagens que parecem ser de empresas, bancos ou até amigos, mas na verdade são falsas. Essas mensagens podem conter links que levam a sites fraudulentos, onde tentam roubar suas informações pessoais ou instalar vírus no seu aparelho.
            <br><br>
            Para se proteger, é importante nunca clicar em links suspeitos ou baixar arquivos de remetentes desconhecidos. Sempre verifique o remetente da mensagem e desconfie de ofertas muito boas para serem verdade. Se receber uma mensagem de um banco ou empresa, é melhor acessar o site oficial diretamente pelo navegador do que clicar no link enviado.
            <br><br>
            Lembre-se: quando algo parece estranho, é melhor não arriscar. Com atenção e cuidado, você pode evitar cair nesses golpes e manter suas informações seguras.
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