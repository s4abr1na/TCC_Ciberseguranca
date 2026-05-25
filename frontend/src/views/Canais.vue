<template>
  <div class="pagina-canais-de-comunicacao">
    
    <AppHeader />

    <main class="conteudo">
    <button @click="$router.back()" class="btn-voltar">
      <img src="@/assets/icone-voltar.png" class="icone-voltar"/>
    </button>
        
    <div class="titulo-pagina">
        Canais para Relatar Ataque
    </div>

    <p class="texto-descricao">
        Qual é a categoria do ataque a ser reportado? Escolha dentre as opções abaixo:
    </p>

    <div class="accordion accordion-flush" id="accordionFlushExample">
        
        <!-- ITEM 1 -->
        <div class="accordion-item">
            <h2 class="accordion-header">
              <button 
                class="accordion-button" 
                :class="{ 'collapsed': itemAberto !== 1 }"
                type="button" 
                @click="alternarItem(1)"
              >
                Golpes Bancários
              </button>
            </h2>
            <!-- v-show faz o elemento aparecer e sumir instantaneamente se a condição for real -->
            <div class="custom-collapse" v-show="itemAberto === 1">
              <div class="accordion-body">
                Passo 1: bloqueie os cartões temporários<br>
                Passo 2: contate o seu banco<br>
                Passo 3: faça um boletim de ocorrência              
              </div>
            </div>
        </div>

        <!-- ITEM 2 -->
        <div class="accordion-item">
            <h2 class="accordion-header">
              <button 
                class="accordion-button" 
                :class="{ 'collapsed': itemAberto !== 2 }"
                type="button" 
                @click="alternarItem(2)"
              >
                Infeção por Malware / Ransomware
              </button>
            </h2>
            <div class="custom-collapse" v-show="itemAberto === 2">
              <div class="accordion-body">
                Se o seu computador está agindo de forma estranha ou arquivos foram bloqueados...
              </div>
            </div>
        </div>

        <!-- ITEM 3 -->
        <div class="accordion-item">
            <h2 class="accordion-header">
              <button 
                class="accordion-button" 
                :class="{ 'collapsed': itemAberto !== 3 }"
                type="button" 
                @click="alternarItem(3)"
              >
                Vazamento de Dados ou Credenciais
              </button>
            </h2>
            <div class="custom-collapse" v-show="itemAberto === 3">
              <div class="accordion-body">
                Caso suspeite que senhas ou dados confidenciais de clientes foram expostos, acione diretamente o comitê de privacidade (LGPD) pelo canal oficial no Slack ou Teams.
              </div>
            </div>
        </div>

    </div>
</main>

    <!--menu navegação-->
    <AppFooterCanais />

  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooterCanais from '@/components/AppFooterCanais.vue'

export default {
  name: 'PaginaCanaisComunicacao',
  data() {
    return {
      //controla qual item está aberto. Começa como null para virem todos fechados.
      itemAberto: null
    };
  },
  methods: {
    alternarItem(id) {
      //se clicar no item que já está aberto, ele fecha (vira null). Se não, abre o novo.
      this.itemAberto = this.itemAberto === id ? null : id;
    }
  },
  components: {
    AppHeader,
    AppFooterCanais
  }
}
</script>

<style>
@import '@/assets/style.css';

.conteudo{
    padding-bottom: 60px;
}
</style>
