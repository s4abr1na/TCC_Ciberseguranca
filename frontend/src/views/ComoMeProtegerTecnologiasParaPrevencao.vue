<template>
  <div class="como-me-proteger-pagina-tecnologias-para-prevencao">
    <header class="header-azul">
      <div class="logo-area">
        <img src="@/assets/logo-fundo-branco-lupa.png" class="logo-imagem"/>
      </div>
    </header>

    <!-- Conteúdo-->
    <main class="conteudo">
      
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        <h2>Saiba Como se Proteger</h2>
      </div>

        <div class="grade-botoes">
            <button @click="$router.push('/como-me-proteger-pagina-firewall-pessoal')" class="btn-video1">
                Firewall Pessoal
            </button>

            <button @click="$router.push('/como-me-proteger-pagina-antivirus')" class="btn-video2">
                Antivírus
            </button>

            <button @click="$router.push('/como-me-proteger-pagina-vpn')" class="btn-video2">
                VPN
            </button>
        </div>
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
        <img src="@/assets/icone-protecao-preenchido.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Proteção</span>
      </button>

      <button @click="$router.push('/pagina-boas-praticas')" class="nav-item">
        <img src="@/assets/icone-boas-praticas-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Boas práticas</span>
      </button>

      <button @click="$router.push('/pagina-canais-de-comunicacao')" class="nav-item">
        <img src="@/assets/icone-canais-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Canais</span>
      </button>
    </footer>
   </div>
</template>

<style>

.btn-video1, .btn-video2 {
  margin-bottom: 30px;
  background-color: #163B70;
  color: white;
  height: 150px;
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

    @import '@/assets/style.css'
</style>