<template>
  <div class="pagina-ataques">
    <header class="header-azul">
      <div class="logo-area">
        <h1 class="logo-texto">CIBER</h1>
        <p class="logo-subtexto">GUARDIÃ🌍</p>
      </div>
    </header>

    <main class="conteudo">
      <div class="titulo-pagina">
        <button @click="$router.back()" class="btn-voltar">
          &lt; </button>
        <h2>Tipos de Ataques</h2>
      </div>

      <div class="barra-pesquisa">
        <span class="icone-busca">🔍</span> <input type="text" placeholder="Pesquisar">
      </div>

      <nav class="lista-ataques">
        <button class="item-ataque" @click="$router.push('/senhas-e-acessos')">
          <span class="texto">Senhas e acessos</span>
        </button>

        <button class="item-ataque">
          <span class="texto">Cópia de segurança</span>
        </button>

        <button class="item-ataque">
          <span class="texto">Aplicativos financeiros</span>
        </button>

        <button class="item-ataque">
          <span class="texto">Notícias falsas e correntes</span>
        </button>

        <button class="item-ataque">
          <span class="texto">Segurança no seu aparelho</span>
        </button>

        <button class="item-ataque">
          <span class="texto">Vírus e Aplicativos Maliciosos</span>
        </button>
        
        <button class="item-ataque">
          <span class="texto">Compras pela internet</span>
        </button>

        <button class="item-ataque">
          <span class="texto">Segurança no Computador</span>
        </button>

        <button class="item-ataque">
          <span class="texto">Roubo ou perda de celular</span>
        </button>

        <button class="item-ataque">
          <span class="texto">Mensagens e links falsos</span>
        </button>

        <button class="item-ataque">
          <span class="texto">Meus dados pessoais</span>
        </button>
        
        <button class="item-ataque">
          <span class="texto">Como se proteger</span>
        </button>
        
        <button class="item-ataque">
          <span class="texto">Uso de Wi-fi e Internet</span>
        </button>
        
        <button class="item-ataque">
          <span class="texto">Redes sociais</span>
        </button>
        
        <button class="item-ataque">
          <span class="texto">Trabalho remoto</span>
        </button>

        <button class="item-ataque">
          <span class="texto">Vazamento de Dados</span>
        </button>
      </nav>
    </main>

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
  background-color: #f9f9f9; /* Fundo cinza clarinho */
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
.lista-ataques {
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.item-ataque {
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
.item-ataque:hover, .item-ataque:active {
  background-color: #eaeaea; /* Efeito visual de clique */
}
.item-ataque .icone {
  font-size: 30px; /* Ícones grandes para visualização */
  width: 50px; /* Garante que os ícones fiquem alinhados */
  text-align: center;
}
.item-ataque .texto {
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