<template>
  <div class="como-me-proteger-pagina-tecnologias-para-prevencao">
    <header class="header-azul">
      <div class="logo-area">
        <h1 class="logo-texto">CIBER</h1>
        <p class="logo-subtexto">GUARDIÃ🌍</p>
      </div>
    </header>

    <!-- Conteúdo-->
    <main class="conteudo">
      
      <div class="navegacao-topo">
        <button @click="$router.back()" class="btn-voltar" aria-label="Voltar">
          ←
        </button>
        <h3 class="subtitulo-tema">Tecnologias para Prevenção</h3>
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