<template>
  <div class="como-me-proteger-pagina-firewall-pessoal">
    <AppHeader />

    <!-- Conteúdo-->
    <main class="conteudo">
      
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Saiba Como se Proteger
      </div>

        <p class="subtitulo-tema">Firewall</p>

        <p class="texto-descricao">
            <strong>O que é?</strong><br>
            Um firewall é um sistema de proteção que fica entre o seu computador e a internet. Ele funciona como um segurança que observa tudo que tenta entrar ou sair do seu computador e decide o que é seguro ou não.
            <br><br>Todo dispositivo conectado à internet, seja um computador, celular ou tablet, está sujeito a ameaças vindas de fora, como vírus, hackers e programas maliciosos. O firewall é a primeira linha de defesa contra essas ameaças. Sem ele, seu computador ficaria completamente exposto, como uma casa sem porta.
            <br><br>Ele pode vir instalado diretamente no computador, dentro de um programa de segurança (como um antivírus), ou ainda no roteador, que é o aparelho que distribui o Wi-Fi na sua casa.
            <br><br>
            
            <strong>Como funciona?</strong><br>
            Tudo que trafega pela internet é dividido em pequenos pedaços de informação chamados de pacotes. Cada vez que você abre um site, assiste a um vídeo ou recebe um e-mail, pacotes de dados são enviados e recebidos. O firewall inspeciona cada um desses pacotes antes de deixá-los passar.
            <br><br>Para decidir o que liberar ou bloquear, ele segue um conjunto de regras, verificando informações como: de onde veio aquele dado, para onde ele vai e qual tipo de comunicação está sendo feita. Se tudo estiver dentro do esperado, o pacote passa. Se algo parecer suspeito, ele é bloqueado imediatamente.
            <br><br>Existem diferentes formas de um firewall fazer essa verificação:
            <br>
            <strong>Verificação simples:</strong> analisa apenas as informações básicas do pacote, como endereço de origem e destino. É rápido, mas menos detalhado.
            <br>
            <strong>Verificação com contexto:</strong> além das informações básicas, o firewall acompanha o histórico daquela comunicação, entendendo se ela faz parte de uma conversa já iniciada e confiável ou se é algo novo e suspeito.
            <br>
            <strong>Verificação profunda:</strong> analisa o conteúdo do pacote por completo, como se o segurança não só visse o remetente da carta, mas também lesse o que está escrito dentro dela. É o método mais seguro.
            <br>
            <strong>Firewall de nova geração:</strong> combina todos os métodos anteriores e ainda consegue identificar qual programa está gerando aquele tráfego, bloqueando aplicativos suspeitos mesmo que tentem se disfarçar.
        </p>    
    </main>

    <AppFooterProtecao />
   </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppFooterProtecao from "@/components/AppFooterProtecao.vue";

export default {
  name: "ComoMeProteger",
  components: {
    AppHeader,
    AppFooterProtecao
  }
};
</script>

<style>
    @import '@/assets/style.css'
</style>