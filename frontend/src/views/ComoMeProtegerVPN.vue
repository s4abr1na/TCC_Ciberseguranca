<template>
  <div class="como-me-proteger-pagina-vpn">
    <AppHeader />

    <!-- Conteúdo-->
    <main class="conteudo">
      
      <button @click="$router.back()" class= "btn-voltar">
          <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
        </button>
        
      <div class="titulo-pagina">
        Saiba Como se Proteger
      </div>

      <p class="subtitulo-tema">VPN</p>

      <p class="texto-descricao">
        <strong>O que é?</strong><br>
        VPN é a sigla para Virtual Private Network, que em português significa Rede Privada Virtual. 
        <br><br>De forma simples, é uma tecnologia que cria um túnel seguro e privado entre o seu dispositivo e a internet, protegendo as informações que você envia e recebe enquanto navega.
        <br><br>Para entender melhor, pense na internet como uma rodovia pública por onde trafegam milhares de carros ao mesmo tempo. 
        <br><br>Qualquer pessoa com o equipamento certo consegue observar o que passa por ela. A VPN seria como colocar o seu carro dentro de um caminhão fechado e blindado antes de entrar nessa rodovia. 
        <br><br>Por fora, ninguém consegue ver o que está dentro nem para onde exatamente você está indo. Ela é muito utilizada por empresas para permitir que funcionários acessem sistemas internos de forma segura de qualquer lugar do mundo, mas também é bastante usada por pessoas comuns que querem mais privacidade e segurança na internet, especialmente ao usar redes Wi-Fi públicas, como as de shoppings, aeroportos e cafés.
        <br><br>
        
        <strong>Como funciona?</strong><br>
        Quando você acessa a internet normalmente, o seu provedor de internet, as empresas de tecnologia e até pessoas mal-intencionadas podem monitorar sua navegação, sabendo quais sites você visita, o que você pesquisa e até interceptando informações sensíveis como senhas e dados bancários.
        <br><br>Ao ativar uma VPN, duas coisas importantes acontecem simultaneamente:
        <br><br>A primeira é a criptografia dos dados. Toda informação que sai do seu dispositivo é embaralhada de forma que só o destino correto consegue decifrar. Mesmo que alguém intercepte esses dados no caminho, verá apenas uma sequência sem sentido de caracteres. É como escrever uma carta em um código secreto que só o destinatário conhece.
        <br><br>A segunda é a substituição do seu endereço de IP. Todo dispositivo conectado à internet possui um endereço único chamado IP, que funciona como o endereço da sua casa, revelando sua localização aproximada. Com a VPN ativada, seu endereço real é escondido e substituído pelo endereço do servidor da VPN, que pode estar em outro estado ou até em outro país. Para qualquer site ou serviço que você acessar, parecerá que você está navegando de outro lugar.
        <br><br>Esse processo acontece da seguinte forma na prática:
        <br><br>Você ativa a VPN no seu dispositivo e ela se conecta a um servidor seguro, que pode estar em qualquer lugar do mundo.
        <br><br>Seus dados são criptografados antes mesmo de saírem do seu dispositivo e viajam até esse servidor dentro do túnel protegido.
        <br><br>O servidor da VPN recebe seus dados, decifra e os envia ao destino final, como o site que você quer acessar, usando o endereço IP dele e não o seu.
        <br><br>A resposta do site percorre o caminho inverso, voltando pelo mesmo túnel seguro até chegar ao seu dispositivo já decifrada.
        <br><br>É importante saber que a VPN protege a sua privacidade e dificulta a espionagem dos seus dados, mas ela não substitui o antivírus nem o firewall. Se você clicar em um link malicioso ou baixar um arquivo infectado, a VPN não vai te proteger disso. Cada ferramenta tem o seu papel, e juntas elas formam uma proteção muito mais completa.
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