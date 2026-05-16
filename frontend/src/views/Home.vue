<template>
  <section class="home-container">
    <header class="header-azul">
      <div class="logo-area">
        <img src="@/assets/logo-fundo-branco-lupa.png" class="logo-imagem"/>
      </div>
    </header>

    <div class="content">
      <h2 class="boas-vindas">Seja bem-vindo(a)!</h2>

      <div class="grade-botoes">

        <button @click="$router.push('/tipos-de-ataques')" class="btn-menu">
          CONHEÇA OS TIPOS DE ATAQUES
        </button>

        <button @click="$router.push('/pagina-como-me-proteger')" class="btn-menu">
          COMO ME PROTEGER
        </button>

        <button @click="$router.push('/pagina-boas-praticas')" class="btn-menu">
          BOAS PRÁTICAS
        </button>

        <button @click="$router.push('/canais-de-comunicacao')" class="btn-menu">
          CANAIS DE COMUNICAÇÃO
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '@/assets/style.css';

/* Conteúdo */
.content {
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.boas-vindas {
  font-size: 25px;
  color: #1d1d1d;
  margin-bottom: 25px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300; /*open sans light*/
}

/* Grade de Botões */
.grade-botoes {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 350px; 
}

.btn-menu {
  background-color: #0e3469;
  color: white;
  font-family: 'Segoe UI', Helvetica, Arial, sans-serif;
  font-size: 18px; 
  letter-spacing: 0.5px;
  width: 100%;
  height: 94px;
  padding: 24px 15px;
  border: none;
  border-radius: 7px;
  box-shadow: 0 4px 12px rgba(14, 52, 105, 0.25);
  cursor: pointer;
  transition: transform 0.1s, background-color 0.2s;
}

/* Feedback visual ao clicar */
.btn-menu:active {
  transform: scale(0.96); 
  background-color: #0a254c;
}
</style>