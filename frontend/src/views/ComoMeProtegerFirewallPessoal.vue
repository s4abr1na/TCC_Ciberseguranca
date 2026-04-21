<template>
  <div class="como-me-proteger-pagina-firewall-pessoal">
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
            <h3 class="subtitulo-tema">Firewall Pessoal</h3>
        </div>

        <p class="texto-descricao">
            <strong>O que é?</strong><br>
            Um firewall pessoal é um software de segurança instalado em um computador individual (desktop, notebook, celular) que monitora, filtra e controla o tráfego de rede de entrada e saída. 
            <br><br>
            <strong>Como funciona?</strong><br>
            É como uma barreira de proteção, bloqueando acessos não autorizados e ameaças externas, como hackers e malwares, com base em regras pré-definidas.
            <br><br>

            <strong>Sugestão para download:</strong>
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

<style>
    @import '@/assets/style.css'
</style>