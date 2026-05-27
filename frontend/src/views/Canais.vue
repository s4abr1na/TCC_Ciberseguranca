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
                <strong>Passo 1:</strong> Bloqueie imediatamente o acesso à sua conta<br>
                <strong>Passo 2:</strong> Altere todas as senhas e credenciais de acesso<br>
                <strong>Passo 3:</strong> Registre um boletim de ocorrência<br>
                <strong>Passo 4:</strong> Conteste as transações não reconhecidas com o banco<br>
                <strong>Passo 5:</strong> Monitore seu CPF e histórico de crédito<br>
                <strong>Passo 6:</strong> Contate o seu banco
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
                Delegacia Especial de Repressão aos Crimes Cibernéticos (DRCC)/PCDF
              </button>
            </h2>
            <div class="custom-collapse" v-show="itemAberto === 2">
              <div class="accordion-body">
                Disque 197 | WhatsApp (61) 98626-1197 | denuncia197@pcdf.df.gov.br<br>
                <strong>Passo 1:</strong> Não apague nada — preserve as evidências digitais<br>
                <strong>Passo 2:</strong> Registre o Boletim de Ocorrência o quanto antes<br>
                <strong>Passo 3:</strong> Leve as evidências à delegacia e detalhe o ocorrido<br>
                <strong>Passo 4:</strong> Solicite abertura de investigação e guarde o protocolo<br>
                <strong>Passo 5:</strong> Busque orientação jurídica e considere ação civil
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
