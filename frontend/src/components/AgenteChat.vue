<template>
  <div class="agente-chat">

    <p class="subtitulo-tema">Tire suas dúvidas</p>

    <div class="historico" v-if="historico.length > 0">
      <div
        v-for="(mensagem, index) in historico"
        :key="index"
        :class="mensagem.tipo === 'usuario' ? 'balao-usuario' : 'balao-agente'"
      >
        {{ mensagem.texto }}
      </div>
    </div>

    <div class="input-area">
      <input
        v-model="pergunta"
        type="text"
        placeholder="Digite sua dúvida..."
        @keyup.enter="enviar"
      />
      <button @click="enviar" :disabled="carregando">
        {{ carregando ? '...' : 'Enviar' }}
      </button>
    </div>

  </div>
</template>

<script>
export default {
  name: 'AgenteChat',
  data() {
    return {
      pergunta: '',
      historico: [],
      carregando: false
    }
  },
  methods: {
    async enviar() {
      if (!this.pergunta.trim()) return

      this.historico.push({ tipo: 'usuario', texto: this.pergunta })
      const perguntaAtual = this.pergunta
      this.pergunta = ''
      this.carregando = true

      try {
        const response = await fetch('http://localhost:3000/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ pergunta: perguntaAtual })
        })
        const data = await response.json()
        this.historico.push({ tipo: 'agente', texto: data.resposta })
      } catch (erro) {
        this.historico.push({
          tipo: 'agente',
          texto: 'Desculpe, ocorreu um erro. Tente novamente.'
        })
      } finally {
        this.carregando = false
      }
    }
  }
}
</script>

<style>
.agente-chat {
  width: 100%;
  padding: 0 20px;
  margin-bottom: 100px;
}

.historico {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.balao-usuario {
  background-color: #2e5a97;
  color: white;
  padding: 12px 16px;
  border-radius: 18px 18px 4px 18px;
  font-size: 18px;
  align-self: flex-end;
  max-width: 80%;
  line-height: 1.4;
}

.balao-agente {
  background-color: #f0f0f0;
  color: #333;
  padding: 12px 16px;
  border-radius: 18px 18px 18px 4px;
  font-size: 18px;
  align-self: flex-start;
  max-width: 80%;
  line-height: 1.4;
}

.input-area {
  display: flex;
  gap: 8px;
  align-items: center;
}

.input-area input {
  flex: 1;
  padding: 14px 16px;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 12px;
  outline: none;
}

.input-area input:focus {
  border-color: #2e5a97;
}

.input-area button {
  background-color: #2e5a97;
  color: white;
  border: none;
  padding: 14px 20px;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
}

.input-area button:disabled {
  background-color: #aaa;
}
</style>