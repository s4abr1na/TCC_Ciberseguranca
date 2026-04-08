<template>
  <div class="pagina-copia-de-seguranca">
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
        <h3 class="subtitulo-tema">Cópia de Segurança</h3>
        
        <p class="texto-descricao">
            Fazer cópias de segurança, também chamadas de “backup”, é uma das formas mais simples e importantes de se proteger no mundo digital. Imagine perder fotos de família, contatos ou documentos importantes por causa de um vírus ou golpe — isso acontece com mais frequência do que parece. Muitos ataques virtuais, como o sequestro de dados (quando criminosos bloqueiam seus arquivos e pedem dinheiro), podem causar grandes prejuízos, principalmente para quem não tem uma cópia guardada.<br>
            Por isso, é essencial manter uma cópia dos seus arquivos em um local seguro. Você pode usar um pendrive, um HD externo ou até serviços na internet (nuvem), que salvam seus dados automaticamente. O ideal é fazer isso com frequência, por exemplo, uma vez por semana ou sempre que adicionar algo importante.<br>
            Pense no backup como um “plano B”: se algo der errado, você não perde tudo. É uma atitude simples, mas que faz toda a diferença para sua segurança digital e tranquilidade no dia a dia.
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
<style scoped>
/* Container Principal e Reset */
.pagina-ataques {
  background-color: #f9f9f9; /* Fundo cinza clarinho */
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px; /* Espaço para o menu inferior não cobrir o conteúdo */
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.header-azul {
  background-color: #0d2646;
  padding: 30px 10px;
  text-align: center;
  color: white;
}
.logo-texto { 
  font-size: 32px; 
  letter-spacing: 4px; 
  margin: 0; 
  font-weight: 900; 
}

.logo-subtexto { 
  font-size: 18px; 
  letter-spacing: 6px; 
  margin: 0; 
  font-weight: 300; 
}

/* Conteúdo Principal */
.conteudo {
  padding: 40px;
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

.navegacao-topo {
  display: flex;
  align-items: center;
  margin-bottom: 35px;
  width: 100%;
  justify-content: center;
}

.btn-voltar {
  background: none;
  border: none;
  font-size: 35px;
  cursor: pointer;
  color: #333;
  padding: 0;
  margin-right: 15px;
}

.titulo-sessao {
  font-size: 24px;
  color: #333;
  margin: 0;
  font-weight: 400;
}

.subtitulo-tema {
  font-size: 24px;
  font-weight: 800;
  color: #000;
  margin-bottom: 20px;
  text-align: center; /* Centraliza o subtítulo */
}

.texto-descricao {
  font-size: 18px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 40px;
  text-align: justify; /* Texto justificado */
}

/* Botão de Vídeo */
.btn-video-destaque {
  background-color: #2e5a97;
  color: white;
  width: 100%;
  max-width: 320px;
  padding: 45px;
  border: none;
  border-radius: 12px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  display: block;
  margin: 20px auto;
}

/* Menu Inferior */
.menu-inferior {
  position: fixed;
  bottom: 0;
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
  z-index: 100;
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

.nav-texto { font-size: 12px; font-weight: 400; }
</style>