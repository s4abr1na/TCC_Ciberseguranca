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
          As redes sociais são ambientes férteis para diversos tipos de ataques digitais. 
          <br><br>
          Entre os mais comuns estão a criação de perfis falsos para se aproximar de vítimas e obter informações ou dinheiro, o sequestro de contas por meio de senhas roubadas e o uso de informações publicadas pelos próprios usuários para aplicar golpes personalizados. 
          <br><br>
          Há também ataques em que criminosos usam dados coletados nas redes sociais — como nome de familiares, cidades, datas comemorativas — para adivinhar senhas ou responder perguntas de segurança. 
          <br><br>
          Perfis falsos de pessoas conhecidas podem ser usados para pedir dinheiro emprestado ou compartilhar links maliciosos. 
          <br><br>
          Os danos vão desde a perda do acesso à própria conta até prejuízos financeiros e danos à reputação. Usar senhas fortes, ativar a verificação em duas etapas e ser criterioso com o que se publica e com quem se aceita como amigo são as principais formas de se proteger.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/1wUdAFEIV_E?si=2ndAdCp6ei5SNCAX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
