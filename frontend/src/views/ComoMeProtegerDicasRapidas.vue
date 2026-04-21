<template>
  <div class="como-me-proteger-pagina-dicas-rapidas">
    <header class="header-azul">
      <div class="logo-area">
        <h1 class="logo-texto">CIBER</h1>
        <p class="logo-subtexto">GUARDIÃ🌍</p>
      </div>
    </header>

    <!-- Conteúdo-->
    <main class="conteudo">
      
      <div class="navegacao-topo">
        <button @click="$router.back()" class="btn-voltar" aria-label="Voltar">
          ←
        </button>
        <h3 class="subtitulo-tema">Como me proteger?</h3>
      </div>

        <ul class="texto-descricao-dicas">
            <li>Não abra  e-mails e anexos de fontes suspeitas;</li>
            <li>Utilize autenticação multifator;</li>
            <li>Desconfie de ofertas tentadoras;</li>
            <li>Mantenha seu software antivírus e antimalware atualizados;</li>
            <li>Fique por dentro de como se previnir contra ataques cibernéticos</li>
            <li>Use senhas fortes;</li>
            <li>Prefira navegar em sites com HTTPS;</li>
            <li>Cuidado com downloas e aplicativos;</li>
            <li>Não forneça seus dados pessoais, dados de cartão e senhas a pessoas desconhecidas.</li>
        </ul>
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

<style>
  @import '@/assets/style.css'
</style>