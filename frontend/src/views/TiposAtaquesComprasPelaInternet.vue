<template>
  <div class="tipos-ataques-pagina-compras-pela-internet">
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
        <p class="subtitulo-tema">Compras pela Internet</p>
        
        <p class="texto-descricao">
          As compras pela internet cresceram muito nos últimos anos, e com elas também aumentaram os ataques voltados a consumidores online. 
          <br><br>
          Os golpes mais comuns incluem lojas virtuais falsas criadas para receber o pagamento e nunca entregar o produto, anúncios fraudulentos em redes sociais com preços muito abaixo do mercado, e sites que imitam lojas conhecidas para roubar os dados do cartão de crédito. 
          <br><br>
          Há ainda o chamado "boleto falso", em que o comprador realiza o pagamento mas o dinheiro vai para a conta do criminoso. 
          <br><br>
          Os prejuízos incluem a perda do dinheiro pago, o roubo dos dados do cartão e, em casos mais graves, o uso dessas informações para fazer compras adicionais sem autorização. 
          <br><br>
          Comprar apenas em sites conhecidos, verificar o endereço do site com atenção e preferir meios de pagamento com proteção ao consumidor são atitudes que reduzem muito o risco.
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gzuPQvgTot8?si=Wr47yR5UQ5Jbnldn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooterAtaques from "@/components/AppFooterAtaques.vue";

export default {
  name: "ComoMeProteger",
  components: {
    AppHeader,
    AppFooterAtaques
  }
};
</script>

<!--ESTILIZAÇÃO-->
<style>
  @import "@/assets/style.css";
</style>