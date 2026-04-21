<template>
  <div class="pagina-boas-praticas">
    <header class="header-azul">
      <div class="logo-area">
        <h1 class="logo-texto">CIBER</h1>
        <p class="logo-subtexto">GUARDIÃ🌍</p>
      </div>
    </header>

    <main class="conteudo">
      <div class="titulo-pagina">
        <button @click="$router.back()" class="btn-voltar">
          ← 
        </button>
        <h2>Boas Práticas</h2>
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

<style scoped>
/* Container Principal e Reset */
.pagina-ataques {
  background-color: #fff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 80px; /* Espaço para o menu inferior não cobrir o conteúdo */
}

/* Header Azul (copiado da Home para manter o padrão) */
.header-azul {
  background-color: #0d2646;
  padding: 30px 10px;
  text-align: center;
  color: white;
}
.logo-texto { font-size: 32px; letter-spacing: 4px; margin: 0; font-weight: 900; }
.logo-subtexto { font-size: 18px; letter-spacing: 6px; margin: 0; font-weight: 300; }

/* Conteúdo Principal */
.conteudo {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Título e Voltar */
.titulo-pagina {
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
  justify-content: center; /* Centraliza o conjunto */
}
.btn-voltar {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
  padding: 0;
}
.titulo-pagina h2 {
  font-size: 24px;
  color: #333;
  margin: 0;
  font-weight: 400;
}

/* Barra de Pesquisa (igual ao print) */
.barra-pesquisa {
  background-color: #e0e0e0;
  padding: 12px 15px;
  border-radius: 8px; /* Cantos menos arredondados, conforme print */
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 350px;
  margin-bottom: 30px;
}
.icone-busca { font-size: 20px; color: #777; }
.barra-pesquisa input {
  background: none;
  border: none;
  width: 100%;
  outline: none;
  color: #666;
  font-size: 18px;
}

/* Lista de Itens (Menu) */
.lista-boas-praticas {
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 40px;
}
.item-boas-praticas {
  background: none;
  border: none;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  border-radius: 8px;
  transition: background-color 0.2s;
  text-align: left;
  width: 100%;
}
.item-boas-praticas:hover, .item-boas-praticas:active {
  background-color: #eaeaea; /* Efeito visual de clique */
}

.item-boas-praticas .texto {
  font-size: 20px; /* Letras grandes para leitura */
  color: #333;
  font-weight: 400;
  flex: 1; /* Ocupa o restante do espaço */
}

/* Menu Inferior (Bottom Navigation) */
.menu-inferior {
  position: fixed; /* Fica travado no fundo da tela */
  bottom: 0;
  left: 0;
  max-width: 412px;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);  
  background-color: #fff;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
  z-index: 100; /* Garante que fique por cima */
}
.nav-item {
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  color: #777;
  cursor: pointer;
  padding: 5px;
}
.nav-icone { font-size: 20px; }
.nav-texto { font-size: 12px; font-weight: 400; }

/* Destaque para a página atual (Ataques) */
.nav-item.ativo { color: #0d2646; font-weight: bold; }
</style>