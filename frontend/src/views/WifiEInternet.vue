<template>
  <div class="pagina-wifi-e-internet">
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
        <h3 class="subtitulo-tema">Wi-Fi e Internet</h3>
        
        <p class="texto-descricao">
            O uso de Wi-Fi e internet é uma parte essencial da vida moderna, mas também pode expor seus dados a riscos. Redes Wi-Fi públicas, por exemplo, podem ser usadas por criminosos para interceptar informações sensíveis.
            <br><br>
            Para se proteger, evite acessar contas bancárias ou outras informações confidenciais em redes Wi-Fi públicas. Use sempre uma conexão segura e confiável.
            <br><br>
            Além disso, mantenha seu dispositivo atualizado com as últimas correções de segurança e utilize um firewall e antivírus confiáveis. Com alguns cuidados simples, você pode aproveitar toda a praticidade da internet com muito mais segurança e tranquilidade.
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