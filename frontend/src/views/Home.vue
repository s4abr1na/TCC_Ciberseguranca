<template>
  <section class="home-container">
    <header class="header-azul">
      <div class="logo-area">
        <h1 class="logo-texto">CIBER</h1>
        <p class="logo-subtexto">GUARDIÃ🌍</p>
      </div>
    </header>

    <div class="content">
      <h2 class="boas-vindas">Seja bem-vindo(a)!</h2>

      <div class="grade-botoes">
        <button @click="$router.push('/tipos-de-ataques')" class="card-botao">
          <img src="@/assets/tipos-de-ataques.png" alt="Tipos de Ataques" class="img-botao">
        </button>

        <button @click="$router.push('/pagina-como-me-proteger')"  class="card-botao">
          <img src="@/assets/como-me-proteger.png" alt="Como me proteger" class="img-botao">
        </button>

        <button @click="$router.push('/pagina-boas-praticas')" class="card-botao">
          <img src="@/assets/boas-praticas.png" alt="Boas Práticas" class="img-botao">
        </button>

        <button @click="$router.push('/canais-de-comunicacao')" class="card-botao">
          <img src="@/assets/canais-de-comunicacao.png" alt="Canais de Comunicação" class="img-botao">
        </button>
      </div>
      
    </div>
  </section>
</template>

<style scoped>
/* Corpo da página */
.home-container {
  background-color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Cabeçalho azul */
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

/* Conteúdo */
.content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.boas-vindas {
  font-size: 25px;
  color: #333;
  margin-bottom: 25px;
  font-weight: 400;
}


/* Grade de Botões */
.grade-botoes {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 330px;
}

.card-botao {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.card-botao:active {
  transform: scale(0.96); /* Efeito de clique */
}


.img-botao {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 0.4s;
}
</style>