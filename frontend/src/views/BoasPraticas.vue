<template>
  <div class="pagina-boas-praticas">
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
        Adote Boas Práticas
      </div>

      <nav class="lista-boas-praticas">
        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-autenticacao')">
          <span class="texto">Autenticação</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-backup')">
          <span class="texto">Backup</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-banco-via-internet')">
          <span class="texto">Banco via Internet</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-boatos')">
          <span class="texto">Boatos</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-celulares-tablets')">
          <span class="texto">Celulares e Tablets</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-codigos-maliciosos')">
          <span class="texto">Códigos Maliciosos</span>
        </button>
        
        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-comercio-via-internet')"> 
          <span class="texto">Comércio via Internet</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-computadores')"> 
          <span class="texto">Computadores</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-furto-de-celulares')"> 
          <span class="texto">Furto de Celular</span>
        </button>
        
        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-phishing')">
          <span class="texto">Phishing e Outros Golpes</span>
        </button>
        
        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-privacidade')">
          <span class="texto">Privacidade</span>
        </button>
        
        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-protecao-de-dados')">
          <span class="texto">Proteção de Dados</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-redes')">
          <span class="texto">Redes</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-redes-sociais-boas-praticas')">
          <span class="texto">Redes Sociais</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-trabalho-remoto')">
          <span class="texto">Trabalho Remoto</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-vazamento-de-dados')">
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
        <img src="@/assets/icone-ataques-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Ataques</span>
      </button>

      <button @click="$router.push('/pagina-como-me-proteger')" class="nav-item">
        <img src="@/assets/icone-protecao-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Proteção</span>
      </button>

      <button @click="$router.push('/pagina-boas-praticas')" class="nav-item">
        <img src="@/assets/icone-boas-praticas-preenchido.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Boas práticas</span>
      </button>

      <button @click="$router.push('/pagina-canais-de-comunicacao')" class="nav-item">
        <img src="@/assets/icone-canais-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Canais</span>
      </button>
    </footer>
  </div>
</template>

<style scoped>
@import '@/assets/style.css'
</style>