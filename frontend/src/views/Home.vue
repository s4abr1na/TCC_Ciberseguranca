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
          <img src="C:\Users\Sabrina\Desktop\TCC\frontend\src\assets\tipos-de-ataques.png" alt="Tipos de Ataques" class="img-botao">
        </button>

        <button @click="$router.push('/como-me-proteger')"  class="card-botao">
          <img src="C:\Users\Sabrina\Desktop\TCC\frontend\src\assets\como-me-proteger.png" alt="Como me proteger" class="img-botao">
        </button>

        <button @click="$router.push('/boas-praticas')" class="card-botao">
          <img src="C:\Users\Sabrina\Desktop\TCC\frontend\src\assets\boas-praticas.png" alt="Boas Práticas" class="img-botao">
        </button>

        <button @click="$router.push('/canais-de-comunicacao')" class="card-botao">
          <img src="C:\Users\Sabrina\Desktop\TCC\frontend\src\assets\canais-de-comunicacao.png" alt="Canais de Comunicação" class="img-botao">
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Reset e Container Principal */
.home-container {
  background-color: #f9f9f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Header Azul do Print */
.header-azul {
  background-color: #0d2646; /* Azul bem escuro */
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
  font-size: 20px;
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
  transition: transform 0.1s;
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
}

/* Footer com Input e Robô */
.footer-input {
  margin-top: auto;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: center;
}

.search-bar {
  background-color: #e0e0e0;
  padding: 10px 20px;
  border-radius: 25px;
  flex: 1;
  max-width: 250px;
}

.search-bar input {
  background: none;
  border: none;
  width: 100%;
  outline: none;
  color: #666;
}

.bot-icon {
  background-color: #0d2646;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  color: white;
  font-size: 24px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
</style>