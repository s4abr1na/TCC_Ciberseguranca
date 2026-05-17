<template>
  <section class="home-container">

    <header class="header-azul">
      <div class="logo-area">
        <img src="@/assets/logo-fundo-branco-lupa.png" class="logo-imagem"/>
      </div>
    </header>
    <button class="btn-sanduiche" @click="menuAberto = true">☰</button>

    <!-- Fundo escurecido -->
    <div class="overlay" v-if="menuAberto" @click="menuAberto = false"></div>

    <!-- Painel deslizante -->
    <nav class="menu-lateral" :class="{ 'aberto': menuAberto }">
      <button class="btn-fechar" @click="menuAberto = false">✕</button>
      <ul>
        <li @click="$router.push('/pagina-onboarding'); menuAberto = false">Página Inicial</li>
        
        <li @click="sobreAberto = !sobreAberto" class="li-sobre">
          Sobre o Projeto
          <span>{{ sobreAberto ? '▲' : '▼' }}</span>
        </li>

        <li v-if="sobreAberto" class="li-texto-sobre">
          Aplicativo mobile voltado à prevenção de ataques cibernéticos contra pessoas idosas, com conteúdos educativos e recomendações práticas de segurança, como uso de VPN, antivírus e firewall.
          <br>
          Objetivo: instruir o idoso em navegação segura no ciberespaço.
        </li>

        <li @click="conteudo = !conteudo" class="li-sobre">
          Conteúdo
          <span>{{ conteudo ? '▲' : '▼' }}</span>
        </li>

        <li v-if="conteudo" class="li-texto-sobre">
          O aplicativo é dividido em quatro seções principais: Tipos de Ataques, Como se Proteger, Boas Práticas e Canais de Comunicação. Cada seção oferece informações detalhadas e recursos para ajudar os usuários a entender melhor as ameaças cibernéticas e como se proteger contra elas.
          <br>
          Os materiais de apoio incluem cartilhas do Cert.br e conteúdos de áudio e vídeo gerados pela IA Notebook LM.
        </li>

        <li><strong>Info. do Projeto</strong><br><br>Ciberguardião: Um Sistema Mobile Para Prevenção de Ataques Cibernéticos contra Pessoas Idosas. <br><br>Aluna: Sabrina de Oliveira Souza<br>Orientadora: Cristiane Jorge Bonfim</li>
      </ul>
    </nav>

    <div class="content">
      <p class="titulo-boas-vindas">Seja bem-vindo(a)!</p>
      <div class="grade-botoes">
        <button @click="$router.push('/tipos-de-ataques')" class="btn-menu1">
          Conheça os Tipos de Ataques
        </button>
        <button @click="$router.push('/pagina-como-me-proteger')" class="btn-menu2">
          Saiba Como se Proteger
        </button>
        <button @click="$router.push('/pagina-boas-praticas')" class="btn-menu3">
          Adote Boas Práticas
        </button>
        <button @click="$router.push('/pagina-canais-de-comunicacao')" class="btn-menu4">
          Canais para Relatar Ataque
        </button>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'PaginaHome',
  data() {
    return {
      menuAberto: false,
      sobreAberto: false,
      conteudo:false
    };
  }
}
</script>

<style scoped>
@import '@/assets/style.css';

.header-azul {
  position: relative;
  display: flex;
  align-items: center;
}

.home-container {
  position: relative;
  overflow: hidden;
}

.btn-sanduiche {
  background: none;
  border: none;
  color: #000000;
  font-size: 1.5rem;
  cursor: pointer;
  display: block;
  margin: 0;
  padding: 8px 12px;
  line-height: 1;
}

.content {
  padding: 16px 40px 40px 40px;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 99;
}

.menu-lateral {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 75%;
  max-width: 300px;
  background-color: #fff;
  z-index: 100;
  padding: 1rem 1.5rem;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.menu-lateral.aberto {
  transform: translateX(0);
}

.btn-fechar {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin-bottom: 2rem;
  display: block;
}

.menu-lateral ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-lateral ul li {
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  font-size: 1rem;
}

/* Item "Sobre o Projeto" com seta */
.li-sobre {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Texto expandido — sem efeito de clique */
.li-texto-sobre {
  font-size: 0.85rem;
  color: #555;
  line-height: 1.5;
  cursor: default;
  border-bottom: 1px solid #eee;
  padding: 0.5rem 0 1rem 0;
}
</style>