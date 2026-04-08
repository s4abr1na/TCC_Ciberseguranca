<template>
  <div class="dicas-rapidas">
    <header class="header-azul">
      <div class="logo-area">
        <h1 class="logo-texto">CIBER</h1>
        <p class="logo-subtexto">GUARDIÃ🌍</p>
      </div>
    </header>

    <!-- Conteúdo-->
    <main class="conteudo">
        <h3 class="subtitulo-tema">Como me proteger?</h3>
        
        <p class="texto-descricao">
            Não abra  e-mails e anexos de fontes suspeitas;<br><br>
            Utilize autenticação multifator;<br><br>
            Desconfie de ofertas tentadoras;<br><br>
            Mantenha seu software antivírus e antimalware atualizados;<br><br>
            Fique por dentro de como se previnir contra ataques cibernéticos;<br><br>
            Use senhas fortes;<br><br>
            Prefira navegar em sites com HTTPS;<br><br>
            Cuidado com downloas e aplicativos;<br><br>
            Não forneça seus dados pessoais, dados de cartão e senhas a pessoas desconhecidas.
        </p>
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
.dicas-rapidas {
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

.subtitulo-tema{
    font-size: 30px;
    color: #333;
    font-weight: 600;
}

.texto-descricao{
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
    font-weight: 400;
    text-align: justify;
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

</style>