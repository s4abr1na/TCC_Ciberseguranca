<template>
  <div class="tipos-ataques-pagina-aplicativos-financeiros">
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
        <h3 class="subtitulo-tema">Trabalho Remoto</h3>
        
        <p class="texto-descricao">
            O trabalho remoto tem se tornado cada vez mais comum, mas também apresenta riscos de segurança. É importante manter uma rede segura e usar ferramentas confiáveis para proteger suas informações.
            <br><br>
            Criminosos podem explorar vulnerabilidades em redes Wi-Fi públicas ou tentar se infiltrar em sistemas através de e-mails phishing. Por isso, é essencial manter o software atualizado e utilizar senhas fortes.
            <br><br>
            Outra dica importante é manter o celular protegido com senha ou biometria e evitar usar aplicativos financeiros em redes Wi-Fi públicas. Com alguns cuidados simples, você pode aproveitar toda a praticidade desses aplicativos com muito mais segurança e tranquilidade.
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