<template>
  <div class="pagina-ataques">
    <header class="header-azul">
      <div class="logo-area">
        <img src="@/assets/logo-fundo-branco-lupa.png" class="logo-imagem"/>
      </div>
    </header>

    <main class="conteudo">
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Conheça os Tipos de Ataques
      </div>

      <nav class="lista-ataques">
        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-senhas-e-acessos')">
          <span class="texto">Senhas e acessos</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-copia-de-seguranca')">
          <span class="texto">Cópia de segurança</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-aplicativos-financeiros')">
          <span class="texto">Aplicativos financeiros</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-noticias-falsas')">
          <span class="texto">Notícias falsas</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-seguranca-aparelho')">
          <span class="texto">Segurança no seu aparelho</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-virus-e-aplicativos-maliciosos')">
          <span class="texto">Vírus e Aplicativos Maliciosos</span>
        </button>
        
        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-compras-pela-internet')"> 
          <span class="texto">Compras pela internet</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-mensagens-e-links-falsos')"> 
          <span class="texto">Mensagens e links falsos</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-dados-pessoais')"> 
          <span class="texto">Dados pessoais</span>
        </button>
        
        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-wifi-e-internet')">
          <span class="texto">Uso de Wi-fi e Internet</span>
        </button>
        
        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-redes-sociais')">
          <span class="texto">Redes sociais</span>
        </button>
        
        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-trabalho-remoto')">
          <span class="texto">Trabalho remoto</span>
        </button>

        <button class="item-ataque" @click="$router.push('/tipos-ataques-pagina-vazamento-de-dados')">
          <span class="texto">Vazamento de Dados</span>
        </button>
      </nav>
    </main>

    <!--menu navegação-->
    <footer class="menu-inferior">
      <button @click="$router.push('/home')" class="nav-item">
        <img src="@/assets/icone-home-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Início</span>
      </button>

      <button @click="$router.push('/tipos-de-ataques')" class="nav-item">
        <img src="@/assets/icone-ataques-preenchido.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Ataques</span>
      </button>

      <button @click="$router.push('/pagina-como-me-proteger')" class="nav-item">
        <img src="@/assets/icone-protecao-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Proteção</span>
      </button>

      <button @click="$router.push('/pagina-boas-praticas')" class="nav-item">
        <img src="@/assets/icone-boas-praticas-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Boas práticas</span>
      </button>

      <button @click="$router.push('/pagina-canais-de-comunicacao')" class="nav-item">
        <img src="@/assets/icone-canais-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Canais</span>
      </button>
    </footer>
  </div>
</template>

<style>
@import '@/assets/style.css';
</style>