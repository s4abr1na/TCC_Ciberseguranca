<template>
  <div class="tipos-ataques-pagina-senhas-e-acessos">
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
        <h3 class="subtitulo-tema">Senhas e Acessos</h3>
        
        <p class="texto-descricao">
          Suas senhas são a identidade digital. Se alguém as possui, essa pessoa se torna "você" perante o sistema. Para se proteger sem complicações, foque em três pilares:
          <br><br>
          Unicidade: Nunca repita senhas. Se o site "A" vazar, suas contas no "B" e "C" continuam seguras. Use frases-senha (ex: MeuCachorroLêLivros2026!), que são longas e fáceis de lembrar, mas difíceis para máquinas quebrarem.
          <br><br>
          O Segundo Escudo (MFA): Ative a autenticação de dois fatores. É a ferramenta mais eficaz hoje: mesmo que o hacker descubra sua senha, ele não entra sem o código extra no seu celular.
          <br><br>
          Gerenciadores: Use um gerenciador de senhas (como Bitwarden ou iCloud). Eles geram senhas aleatórias e você só precisa decorar uma única senha mestra.
          <br><br>
          Regra de Ouro: Se a senha é fácil de lembrar para você, ela provavelmente é fácil de prever para um software de ataque. Tamanho importa mais que símbolos complexos.
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