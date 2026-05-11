<template>
  <div class="como-me-proteger-pagina-dicas-rapidas">
    <header class="header-azul">
      <div class="logo-area">
        <h1 class="logo-texto">CIBER</h1>
        <p class="logo-subtexto">GUARDIÃ🌍</p>
      </div>
    </header>

    <main class="conteudo">
      <div class="navegacao-topo">
        <button @click="$router.back()" class="btn-voltar" aria-label="Voltar">←</button>
        <h3 class="subtitulo-tema">Como me proteger?</h3>
      </div>

      <!-- Carrossel -->
      <div class="carrossel">
        <button class="carrossel-btn" @click="anterior">‹</button>

        <transition name="fade" mode="out-in">
          <div class="carrossel-card" :key="atual">
            <p>{{ dicas[atual] }}</p>
          </div>
        </transition>

        <button class="carrossel-btn" @click="proximo">›</button>
      </div>

      <div class="carrossel-indicadores">
        <span
          v-for="(_, i) in dicas"
          :key="i"
          :class="['ponto', { ativo: i === atual }]"
          @click="atual = i"
        ></span>
      </div>
    </main>

    <footer class="menu-inferior">
      <button class="nav-item">
        <span class="nav-texto">Início</span>
      </button>
      <button class="nav-item">
        <span class="nav-texto">Ataques</span>
      </button>
      <button class="nav-item">
        <span class="nav-texto">Proteção</span>
      </button>
      <button class="nav-item">
        <span class="nav-texto">Boas práticas</span>
      </button>
      <button class="nav-item">
        <span class="nav-texto">Canais</span>
      </button>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const atual = ref(0)

const dicas = [
  'Não abra e-mails e anexos de fontes suspeitas.',
  'Utilize autenticação multifator.',
  'Desconfie de ofertas tentadoras.',
  'Mantenha seu antivírus e antimalware atualizados.',
  'Use senhas fortes.',
  'Prefira navegar em sites com HTTPS.',
  'Cuidado com downloads e aplicativos desconhecidos.',
  'Não forneça dados pessoais, de cartão ou senhas a desconhecidos.'
]

const proximo = () => {
  atual.value = (atual.value + 1) % dicas.length
}

const anterior = () => {
  atual.value = (atual.value - 1 + dicas.length) % dicas.length
}
</script>

<style>
@import '@/assets/style.css';

.carrossel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 24px 16px;
}

.carrossel-card {
  flex: 1;
  background: #f0f4ff;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  font-size: 1rem;
  width: 220px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  font-size: 25px;
}

.carrossel-btn {
  background: #1a3a6b;
  color: white;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 1.4rem;
  cursor: pointer;
  flex-shrink: 0;
}

.carrossel-indicadores {
  display: flex;
  justify-content: center;
  gap: 8px;
}

.ponto {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ccc;
  cursor: pointer;
}

.ponto.ativo {
  background: #1a3a6b;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
  
</style>