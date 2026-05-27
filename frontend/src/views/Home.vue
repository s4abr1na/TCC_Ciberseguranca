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
        <li @click="$router.push('/pagina-onboarding'); menuAberto = false">Página inicial</li>
        
        <li @click="sobreAberto = !sobreAberto" class="li-sobre">
          Sobre o projeto
          <span>{{ sobreAberto ? '▲' : '▼' }}</span>
        </li>

        <li v-if="sobreAberto" class="li-texto-sobre">
          Aplicativo mobile voltado à prevenção de ataques cibernéticos contra pessoas idosas, com conteúdos educativos e recomendações práticas de segurança.
          <br>
          O aplicativo é dividido em quatro seções principais: "Conheça os tipos de ataques", "Saiba como se proteger", "Adote boas práticas", "Canais para relatar ataque".
          <br>
          Objetivo: instruir o idoso em navegação segura no ciberespaço.
        </li>

        <li @click="conteudo = !conteudo" class="li-sobre">
          Conteúdo
          <span>{{ conteudo ? '▲' : '▼' }}</span>
        </li>

        <li v-if="conteudo" class="li-texto-sobre">
          Os materiais de apoio incluem cartilhas do Cert.br e conteúdos de áudio e vídeo gerados pela IA Notebook LM.
        </li>

        <li>
          Instituto Federal de Educação, Ciência e Tecnologia de Brasília
          <br><br>
          Ciberguardião: Um Sistema Mobile Para Prevenção de Ataques Cibernéticos contra Pessoas Idosas. 
          <br><br>
          Estudante: Sabrina de Oliveira Souza
          <br>
          Orientadora: Prof.ª Dr.ª Cristiane Jorge de Lima Bonfim
        </li>

        <li>Siga-nos nas redes sociais<br><br>
          <a href="https://www.instagram.com/ciberguardiaotcc/" target="_blank">
            <img src="@/assets/icone-instagram.png" class="icone-redes-sociais"/>
          </a>      
          <a href="https://www.youtube.com/@CiberGuardiaoTCC" target="_blank">
            <img src="@/assets/icone-youtube.png" class="icone-redes-sociais"/>
          </a> 
        </li>
      </ul>
    </nav>

    <button @click="$router.push('/ciber-agente')" class="btn-agente-flutuante">
      <img src="@/assets/img-agente.png" class="img-agente"/>
    </button>

    <div class="content">
      <p class="titulo-boas-vindas">Conhecimento é sua melhor defesa!</p>
      <div class="grade-botoes">
        <button @click="$router.push('/tipos-de-ataques')" class="btn-menu1">
          Conheça os tipos de ataques
        </button>
        <button @click="$router.push('/pagina-como-me-proteger')" class="btn-menu2">
          Saiba como se proteger
        </button>
        <button @click="$router.push('/pagina-boas-praticas')" class="btn-menu3">
          Adote boas práticas
        </button>
        <button @click="$router.push('/pagina-canais-de-comunicacao')" class="btn-menu4">
          Canais para relatar ataque
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

.icone-redes-sociais{
  width: 30px;
  height: 30px;
  margin-right: 10px;
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

.btn-agente-flutuante {
  position: absolute;
  bottom: 5px;
  right: 20px;
  background-color: #11284b;
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  z-index: 99;
}

.img-agente {
  width: 50px;
  height: 50px;
} 
</style>