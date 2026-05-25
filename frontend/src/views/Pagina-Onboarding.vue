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
  'Ataques digitais acontecem todos os dias, e qualquer pessoa pode ser um alvo de criminosos cibernéticos',
  'A segurança cibernética existe para proteger redes, sistemas e informações contra acessos não autorizados e golpes virtuais',
  'Desenvolvido como Trabalho de Conclusão de Curso, o objetivo é instruir a pessoa idosa em navegação segura no ciberespaço',
  'Explore, aprenda e navegue com muito mais segurança!!'
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
</style>