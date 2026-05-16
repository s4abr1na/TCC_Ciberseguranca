<template>
  <div class="onboarding">
    <div class="quadro">
      <img src="@/assets/logo-texto-preto.png" class="logo-img3" alt="Logo CiberGuardiã" />
    
      <div class="carrossel-onboarding">
        <button class="carrossel-btn" @click="anterior">‹</button>

        <transition name="fade" mode="out-in">
          <div class="carrossel-card" :key="atual">
            <p class="texto-onboarding">{{ onboarding[atual] }}</p>
          </div>
        </transition>

        <button class="carrossel-btn" @click="proximo">›</button>
      </div>

      <div class="carrossel-indicadores">
        <span
          v-for="(_, i) in onboarding"
          :key="i"
          :class="['ponto', { ativo: i === atual }]"
          @click="atual = i"
        ></span>
      </div>

      <div class="acao-onboarding">
        <button 
          v-if="atual === onboarding.length - 1" 
          @click="irParaHome" 
          class="btn-começar"
        >
          Começar
        </button>

        <button 
          v-else 
          @click="irParaHome" 
          class="botao-pular"
        >
          Pular
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const atual = ref(0)

const onboarding = [
  'Navegue no mundo digital com mais confiança e aprenda sobre segurança cibernética',
  'Aprenda a reconhecer golpes, proteger seus dados e conversar com amigos e familiares com muito mais segurança',
  'Desenvolvido como Trabalho de Conclusão de Curso, o objetivo é promover a inclusão digital à pessoa idosa'
]

const proximo = () => {
  atual.value = (atual.value + 1) % onboarding.length
}

const anterior = () => {
  atual.value = (atual.value - 1 + onboarding.length) % onboarding.length
}

const irParaHome = () => {
  router.push('/home')
}
</script>

<style scoped>
@import '@/assets/style.css';

.onboarding {
  background-color: #071c43;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
}

.quadro {
  background-color: white;
  padding: 30px;
  border-radius: 24px;
  height: 540px;
  width: 80%;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

.logo-img3 {
  width: 200px;
  height: auto;
  margin-bottom: 20px;
}

/* Estilos do Carrossel */
.carrossel-onboarding {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.carrossel-btn {
  background: none;
  border: none;
  font-size: 35px;
  color: #0e3469;
  cursor: pointer;
  padding: 10px;
}

/* MODIFICADO: Forçando a remoção de qualquer fundo ou sombra vindo do style.css global */
.carrossel-card {
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  background: none !important;
  background-color: transparent !important;
  border: none !important;
  box-shadow: none !important;
}

.texto-onboarding {
  font-size: 18px;
  color: #333;
  line-height: 1.5;
  font-weight: 400;
  background: none !important; /* Garante que o texto em si também não tenha fundo */
}

/* Pontinhos */
.carrossel-indicadores {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 25px;
}

.ponto {
  width: 12px;
  height: 12px;
  background-color: #AAA;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.ponto.ativo {
  background-color: #0e3469;
  width: 24px;
  border-radius: 6px;
}

.acao-onboarding {
  height: 50px; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.botao-pular {
  background: none;
  border: none;
  color: #666666; 
  font-size: 16px;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  padding: 10px 20px;
  transition: color 0.2s;
}

.botao-pular:active {
  color: #0e3469;
}

/* Botão Começar Chamativo */
.btn-começar {
  background-color: #0e3469;
  color: white;
  border: none;
  padding: 12px 40px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 50px;
  cursor: pointer;
  width: 100%;
  box-shadow: 0 4px 10px rgba(14, 52, 105, 0.2);
  transition: transform 0.1s;
}

.btn-começar:active {
  transform: scale(0.95);
}

/* Transição de Fade */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>