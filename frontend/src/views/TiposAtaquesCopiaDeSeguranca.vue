<template>
  <div class="tipos-ataques-pagina-copia-de-seguranca">
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
        <h3 class="subtitulo-tema">Cópia de Segurança</h3>
        
        <p class="texto-descricao">
            Fazer cópias de segurança, também chamadas de “backup”, é uma das formas mais simples e importantes de se proteger no mundo digital. Imagine perder fotos de família, contatos ou documentos importantes por causa de um vírus ou golpe — isso acontece com mais frequência do que parece. Muitos ataques virtuais, como o sequestro de dados (quando criminosos bloqueiam seus arquivos e pedem dinheiro), podem causar grandes prejuízos, principalmente para quem não tem uma cópia guardada.<br>
            <br>
            Por isso, é essencial manter uma cópia dos seus arquivos em um local seguro. Você pode usar um pendrive, um HD externo ou até serviços na internet (nuvem), que salvam seus dados automaticamente. O ideal é fazer isso com frequência, por exemplo, uma vez por semana ou sempre que adicionar algo importante.<br>
            <br>
            Pense no backup como um “plano B”: se algo der errado, você não perde tudo. É uma atitude simples, mas que faz toda a diferença para sua segurança digital e tranquilidade no dia a dia.
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