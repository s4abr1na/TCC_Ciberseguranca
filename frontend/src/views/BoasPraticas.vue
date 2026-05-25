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
          <span class="texto">Banco via internet</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-boatos')">
          <span class="texto">Boatos</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-celulares-tablets')">
          <span class="texto">Celulares e tablets</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-codigos-maliciosos')">
          <span class="texto">Códigos maliciosos</span>
        </button>
        
        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-comercio-via-internet')"> 
          <span class="texto">Comércio via internet</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-computadores')"> 
          <span class="texto">Computadores</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-furto-de-celulares')"> 
          <span class="texto">Furto de celulares</span>
        </button>
        
        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-golpes-caiu-veja-o-que-fazer')">
          <span class="texto">Golpes: Caiu? Veja o que fazer</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-golpes-evite-fraudes')">
          <span class="texto">Golpes: Evite fraudes</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-golpes-nao-se-deixe-enganar')">
          <span class="texto">Golpes: Não se deixe enganar</span>
        </button>
        
        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-privacidade')">
          <span class="texto">Privacidade</span>
        </button>
        
        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-protecao-de-dados')">
          <span class="texto">Proteção de dados</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-redes')">
          <span class="texto">Redes</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-redes-sociais-boas-praticas')">
          <span class="texto">Redes sociais</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-trabalho-remoto')">
          <span class="texto">Trabalho remoto</span>
        </button>

        <button class="item-boas-praticas" @click="$router.push('/boas-praticas-pagina-vazamento-de-dados')">
          <span class="texto">Vazamento de dados</span>
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