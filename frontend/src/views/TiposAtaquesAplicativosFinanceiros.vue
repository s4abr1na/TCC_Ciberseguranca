<template>
  <div class="tipos-ataques-pagina-aplicativos-financeiros">
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

        <!-- Botão que abre o modal -->
         <!--MODAL: é uma janela que aparece por cima do conteúdo da página, bloqueando a interação com o resto até ser fechada-->
        <button class="btn-video-destaque" @click="modalAberto = true">
          ▶ Vídeo
        </button>
      </section>
    </main>

    <!-- Modal do vídeo -->
     <!-- O v-if é uma instrução que mostrará ou esconderá o vídeo se modalAberto for true ou false-->
    <div v-if="modalAberto" class="modal-overlay" @click.self="fecharVideo">
      <div class="modal-container">
        <button class="btn-fechar" @click="fecharVideo">✕</button>
        <iframe
          src="https://www.youtube.com/embed/2LYPyUk-L0k?si=fQzpbqQaQ5WgrsfO&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      </div>
    </div>

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

<script setup>
  import { ref } from 'vue'

  const modalAberto = ref(false)

  function fecharVideo() {
    modalAberto.value = false
  }
</script>

<!--ESTILIZAÇÃO-->
<style>
  @import "@/assets/style.css";
</style>

<style scoped>

.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-container {
  position: relative;
  width: 90%;
  max-width: 800px;
  aspect-ratio: 16 / 9;
}

.modal-container iframe {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}

.btn-fechar {
  position: absolute;
  top: -36px;
  right: 0;
  background: transparent;
  color: white;
  border: none;
  font-size: 1.4rem;
  cursor: pointer;
}

</style>