<template>
  <div class="tipos-ataques-pagina-redes-sociais">
    <AppHeader />

   <!--Conteúdo principal-->
    <main class="conteudo">
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Conheça os Tipos de Ataques
      </div>

      <section class="info-ataque">
        <p class="subtitulo-tema">Redes Sociais</p>
        
        <p class="texto-descricao">
            As redes sociais são ferramentas poderosas que conectam pessoas ao redor do mundo. No entanto, elas também podem ser exploradas por criminosos para cometer fraudes e ataques. Golpistas frequentemente criam perfis falsos, enviam mensagens enganosas e compartilham links maliciosos para roubar informações pessoais e financeiras.
            <br><br>
            Para se proteger, é essencial manter as configurações de privacidade atualizadas, não aceitar convites de pessoas desconhecidas e evitar clicar em links suspeitos. Além disso, é importante não compartilhar informações sensíveis em público e reportar qualquer conteúdo suspeito imediatamente.
            <br><br>
            Com algumas precauções simples, você pode desfrutar das vantagens das redes sociais sem colocar sua segurança em risco.
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
        <div class="modal-header">
          <span class="modal-titulo">Vídeo</span>
          <button class="btn-fechar" @click="fecharVideo">✕</button>
        </div>
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
    <AppFooterAtaques/>
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
