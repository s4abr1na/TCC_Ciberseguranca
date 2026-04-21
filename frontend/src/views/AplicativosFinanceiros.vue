<template>
  <div class="pagina-aplicativos-financeiros">
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
        <h3 class="subtitulo-tema">Aplicativos Financeiros</h3>
        
        <p class="texto-descricao">
            Os aplicativos financeiros, como os de bancos e pagamentos, facilitam muito a vida no dia a dia. Com eles, é possível pagar contas, fazer transferências e acompanhar seu dinheiro sem sair de casa. Porém, justamente por lidarem com informações importantes, eles também podem ser alvo de golpes e ataques virtuais.
            <br><br>
            Criminosos podem tentar enganar você com mensagens falsas, aplicativos falsificados ou links suspeitos para roubar seus dados e acessar sua conta. Por isso, é importante sempre baixar aplicativos apenas das lojas oficiais do seu celular e nunca compartilhar senhas ou códigos recebidos por mensagem.
            <br><br>            
            Outra dica importante é manter o celular protegido com senha ou biometria e evitar usar aplicativos financeiros em redes Wi-Fi públicas. Com alguns cuidados simples, você pode aproveitar toda a praticidade desses aplicativos com muito mais segurança e tranquilidade.
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
<style>
  @import "@/assets/style.css";
</style>