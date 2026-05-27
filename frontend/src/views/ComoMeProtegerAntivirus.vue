<template>
  <div class="como-me-proteger-pagina-antivirus">
    <AppHeader />

    <!-- Conteúdo-->
    <main class="conteudo">
      
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Saiba Como se Proteger
      </div>

      <p class="subtitulo-tema">Antivírus</p>

        <p class="texto-descricao">
            <strong>O que é?</strong><br>
            Um antivírus é um programa instalado no seu computador ou celular cuja função é identificar, bloquear e eliminar softwares maliciosos, conhecidos como vírus.
            <br><br>Esses vírus são programas criados por pessoas mal-intencionadas com o objetivo de causar algum dano, como roubar senhas, apagar arquivos, espionar o que você digita ou até usar o seu computador para atacar outras pessoas sem que você saiba.
            <br><br>O antivírus age como o sistema imunológico do seu dispositivo, reconhecendo essas ameaças e combatendo antes que causem prejuízo. Hoje em dia, os antivírus modernos vão muito além dos vírus tradicionais e protegem contra uma variedade ampla de ameaças, como spywares, que espionam suas atividades, ransomwares, que sequestram seus arquivos e cobram um resgate para devolvê-los, e trojans, que são programas disfarçados de algo útil mas que escondem intenções maliciosas.
            <br><br>
            
            <strong>Como funciona?</strong><br>
            O antivírus atua de duas formas principais: monitorando o computador em tempo real e realizando varreduras periódicas.
            <br><br>No monitoramento em tempo real, ele observa constantemente tudo que acontece no dispositivo. Cada arquivo aberto, cada programa executado e cada site visitado é analisado na hora. Se algo suspeito for detectado, o antivírus age imediatamente, bloqueando a ameaça antes que ela cause dano.
            <br><br>Nas varreduras periódicas, o antivírus percorre todos os arquivos armazenados no computador em busca de algo malicioso que possa ter passado despercebido. É como fazer uma faxina geral no dispositivo de tempos em tempos.
            <br><br>Para identificar as ameaças, ele utiliza duas técnicas principais:
            <br>
            <strong>Reconhecimento por assinatura:</strong> o antivírus possui um banco de dados com as "digitais" de milhares de vírus já conhecidos. Quando encontra um arquivo com uma dessas digitais, ele sabe que é perigoso e age. Por isso é fundamental manter o antivírus sempre atualizado, pois novos vírus surgem todos os dias e o banco de dados precisa acompanhar.
            <br>
            <strong>Análise de comportamento:</strong> nem todo vírus é conhecido. Para lidar com ameaças novas, o antivírus observa o comportamento dos programas. Se um programa começa a agir de forma estranha, como tentar acessar seus arquivos sem motivo ou enviar informações para fora do computador, o antivírus levanta suspeita e bloqueia a ação, mesmo sem ter visto aquela ameaça antes.
            
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