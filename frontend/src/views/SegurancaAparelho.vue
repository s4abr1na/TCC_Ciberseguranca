<template>
  <div class="pagina-seguranca-aparelho">
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
        <h3 class="subtitulo-tema">Segurança no Seu Aparelho</h3>
        
        <p class="texto-descricao">
            A segurança do seu aparelho é fundamental para proteger suas informações e dados pessoais. Um celular ou tablet bem protegido pode evitar perdas significativas e manter sua privacidade.
            <br><br>
            Existem várias medidas que você pode tomar para garantir a segurança do seu dispositivo, como manter o sistema operacional atualizado, usar senhas fortes e biometria, e ter cautela ao clicar em links ou baixar aplicativos.
            <br><br>
            Com alguns cuidados simples, você pode aproveitar toda a praticidade desses aplicativos com muito mais segurança e tranquilidade.
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