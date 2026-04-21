<template>
  <div class="tipos-ataques-pagina-redes-sociais">
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
        <h3 class="subtitulo-tema">Redes Sociais</h3>
        
        <p class="texto-descricao">
            As redes sociais são ferramentas poderosas que conectam pessoas ao redor do mundo. No entanto, elas também podem ser exploradas por criminosos para cometer fraudes e ataques. Golpistas frequentemente criam perfis falsos, enviam mensagens enganosas e compartilham links maliciosos para roubar informações pessoais e financeiras.
            <br><br>
            Para se proteger, é essencial manter as configurações de privacidade atualizadas, não aceitar convites de pessoas desconhecidas e evitar clicar em links suspeitos. Além disso, é importante não compartilhar informações sensíveis em público e reportar qualquer conteúdo suspeito imediatamente.
            <br><br>
            Com algumas precauções simples, você pode desfrutar das vantagens das redes sociais sem colocar sua segurança em risco.
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