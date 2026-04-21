<template>
  <div class="pagina-compras-pela-internet">
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
        <h3 class="subtitulo-tema">Compras pela Internet</h3>
        
        <p class="texto-descricao">
            As compras online têm se tornado cada vez mais comuns, oferecendo conveniência e variedade. No entanto, é importante estar atento aos riscos associados a essas transações. Golpes e fraudes podem ocorrer quando você não toma as devidas precauções.
            <br><br>
            Criminosos podem tentar enganar você com sites falsos, ofertas ilusórias ou práticas comerciais desonestas para roubar seus dados e informações financeiras. Por isso, é importante sempre verificar a legitimidade do site antes de realizar qualquer compra e utilizar métodos de pagamento seguros.
            <br><br>
            Outra dica importante é manter o navegador atualizado e utilizar softwares de proteção contra malware. Com alguns cuidados simples, você pode aproveitar toda a praticidade das compras online com muito mais segurança e tranquilidade.
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
  @import '@/assets/style.css'
</style>