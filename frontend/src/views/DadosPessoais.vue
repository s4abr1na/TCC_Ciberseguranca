<template>
  <div class="pagina-dados-pessoais">
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
        <h3 class="subtitulo-tema">Dados Pessoais</h3>
        
        <p class="texto-descricao">
            Os dados pessoais são informações que identificam você e podem ser usadas por criminosos para cometer fraudes. É importante proteger esses dados, pois podem ser usados para roubar sua identidade, acessar suas contas ou cometer outros tipos de crimes.
            <br><br>
            Para proteger seus dados pessoais, evite compartilhar informações sensíveis em redes sociais, use senhas fortes e únicas para cada conta e mantenha seu software atualizado. Além disso, tenha cuidado ao clicar em links suspeitos ou baixar aplicativos de fontes não confiáveis.
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