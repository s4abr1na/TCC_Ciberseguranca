<template>
  <div class="pagina-como-me-proteger">
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
        <h2>Como me proteger?</h2>
      </div>

      <div class="grade-botoes">
        <button @click="$router.push('/como-me-proteger-pagina-dicas-rapidas')" class="btn-video1">
          Dicas rápidas
        </button>

        <button @click="$router.push('/como-me-proteger-pagina-tecnologias-para-prevencao')" class="btn-video2">
          Tecnologias para prevenção
        </button>
      </div>
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
.pagina-como-me-proteger {
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

/* Grade de Botões */
.btn-video1, .btn-video2 {
  margin-bottom: 30px;
  height: 200px;
  width: 100%;
  max-width: 320px;
  padding: 45px;
  border: none;
  border-radius: 7px;
  font-size: 23px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  display: block;
  margin: 20px auto;
}

.btn-video1{
  background-color: #60A1B3;
  color: white;
}

.btn-video2{
  background-color: #648D32;
  color: white;
}

.card-botao:active {
  transform: scale(0.96); /* Efeito de clique */
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

/* Destaque para a página atual (Ataques) */
.nav-item.ativo { color: #0d2646; font-weight: bold; }
</style>