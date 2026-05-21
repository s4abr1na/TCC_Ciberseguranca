<template>
  <div class="pagina-ciber-agente">

    <header class="header-azul">
      <div class="logo-area">
        <img src="@/assets/logo-fundo-branco-lupa.png" class="logo-imagem"/>
      </div>
    </header>

    <main class="conteudo-agente">

      <button @click="$router.back()" class="btn-voltar">
        <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
      </button>

      <div class="titulo-pagina">Ciber Agente</div>

      <p class="texto-descricao">
        Olá! Sou o Ciber Agente.
      </p>

      <!-- histórico de mensagens -->
      <div class="historico" ref="historico">
        <div v-if="historico.length === 0" class="mensagem-inicial">
          <p>Como posso te ajudar hoje?</p>
        </div>
        <div
          v-for="(mensagem, index) in historico"
          :key="index"
          :class="mensagem.tipo === 'usuario' ? 'balao-usuario' : 'balao-agente'"
        >
          {{ mensagem.texto }}
        </div>
        <div v-if="carregando" class="balao-agente balao-carregando">
          Digitando...
        </div>
      </div>

      <!-- input -->
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

    </main>

    <footer class="menu-inferior">
      <button @click="$router.push('/home')" class="nav-item">
        <img src="@/assets/icone-home-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Início</span>
      </button>
      <button @click="$router.push('/tipos-de-ataques')" class="nav-item">
        <img src="@/assets/icone-ataques-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Ataques</span>
      </button>
      <button @click="$router.push('/pagina-como-me-proteger')" class="nav-item">
        <img src="@/assets/icone-protecao-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Proteção</span>
      </button>
      <button @click="$router.push('/pagina-boas-praticas')" class="nav-item">
        <img src="@/assets/icone-boas-praticas-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Boas práticas</span>
      </button>
      <button @click="$router.push('/pagina-canais-de-comunicacao')" class="nav-item">
        <img src="@/assets/icone-canais-vazio.png" class="icone-menu-navegacao"/>
        <span class="nav-texto">Canais</span>
      </button>
    </footer>

  </div>
</template>

<script>
export default {
  name: 'PaginaCiberAgente',
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
        //http://localhost:3000/chat
        const response = await fetch('tccciberseguranca-production.up.railway.app', {
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
        this.$nextTick(() => {
          const el = this.$refs.historico
          if (el) el.scrollTop = el.scrollHeight
        })
      }
    }
  }
}
</script>

<style>
.conteudo-agente {
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 20px;
  height: calc(100vh - 130px); /* tela cheia menos header e footer */
  position: relative;
}

.historico {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 16px;
  margin-top: 10px;
}

.mensagem-inicial {
  text-align: center;
  color: #aaa;
  font-size: 18px;
  margin-top: 40px;
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

.balao-carregando {
  opacity: 0.5;
  font-style: italic;
}

.input-area {
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 12px 0 80px 0;
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