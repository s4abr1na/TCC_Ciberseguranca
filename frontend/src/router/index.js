import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

//BOTÃO: "TIPOS DE ATAQUES"
import TiposAtaques from '../views/TiposAtaques.vue'
import TiposAtaquesSenhasAcessos from '@/views/TiposAtaquesSenhasAcessos.vue'
import TiposAtaquesCopiaDeSeguranca from '@/views/TiposAtaquesCopiaDeSeguranca.vue'
import TiposAtaquesAplicativosFinanceiros from '@/views/TiposAtaquesAplicativosFinanceiros.vue'
import TiposAtaquesNoticiasFalsas from '@/views/TiposAtaquesNoticiasFalsas.vue'
import TiposAtaquesSegurancaAparelho from '@/views/TiposAtaquesSegurancaAparelho.vue' 
import TiposAtaquesVirusEAppsMaliciosos from '@/views/TiposAtaquesVirusEAppsMaliciosos.vue'
import TiposAtaquesComprasPelaInternet from '@/views/TiposAtaquesComprasPelaInternet.vue'
import TiposAtaquesMensagensELinksFalsos from '@/views/TiposAtaquesMensagensELinksFalsos.vue'
import TiposAtaquesDadosPessoais from '@/views/TiposAtaquesDadosPessoais.vue'
import TiposAtaquesWifiEInternet from '@/views/TiposAtaquesWifiEInternet.vue'
import TiposAtaquesRedesSociais from '@/views/TiposAtaquesRedesSociais.vue'
import TiposAtaquesTrabalhoRemoto from '@/views/TiposAtaquesTrabalhoRemoto.vue'
import TiposAtaquesVazamentoDados from '@/views/TiposAtaquesVazamentoDados.vue'

//BOTÃO: "COMO ME PROTEGER?"
import ComoMeProteger from '../views/ComoMeProteger.vue'
import ComoMeProtegerDicasRapidas from '@/views/ComoMeProtegerDicasRapidas.vue'
import ComoMeProtegerTecnologiasParaPrevencao from '@/views/ComoMeProtegerTecnologiasParaPrevencao.vue'
import ComoMeProtegerAntivirus from '@/views/ComoMeProtegerAntivirus.vue'
import ComoMeProtegerVPN from '@/views/ComoMeProtegerVPN.vue'
import ComoMeProtegerFirewallPessoal from '@/views/ComoMeProtegerFirewallPessoal.vue'

//BOTÃO: "BOAS PRÁTICAS"
import BoasPraticas from '@/views/BoasPraticas.vue'
import BoasPraticasAutenticacao from '@/views/BoasPraticasAutenticacao.vue'
import BoasPraticasBackup from '@/views/BoasPraticasBackup.vue'
import BoasPraticasBancoViaInternet from '@/views/BoasPraticasBancoViaInternet.vue'
import BoasPraticasBoatos from '@/views/BoasPraticasBoatos.vue'
import BoasPraticasCodigosMaliciosos from '@/views/BoasPraticasCodigosMaliciosos.vue'
import BoasPraticasComercioViaInternet from '@/views/BoasPraticasComercioViaInternet.vue'
import BoasPraticasComputadores from '@/views/BoasPraticasComputadores.vue'
import BoasPraticasFurtoDeCelulares from '@/views/BoasPraticasFurtoDeCelulares.vue'
import BoasPraticasPhishing from '@/views/BoasPraticasPhishing.vue'
import BoasPraticasPrivacidade from '@/views/BoasPraticasPrivacidade.vue'
import BoasPraticasProtecaoDeDados from '@/views/BoasPraticasProtecaoDeDados.vue'
import BoasPraticasRedes from '@/views/BoasPraticasRedes.vue'
import BoasPraticasRedesSociais from '@/views/BoasPraticasRedesSociais.vue'
import BoasPraticasTrabalhoRemoto from '@/views/BoasPraticasTrabalhoRemoto.vue'
import BoasPraticasVazamentoDeDados from '@/views/BoasPraticasVazamentoDeDados.vue'


//import CanaisDeComunicacao from '../views/CanaisDeComunicacao.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/tipos-de-ataques',
      name: 'TiposDeAtaques',
      component: TiposAtaques
    },
    {
      path: '/tipos-ataques-pagina-senhas-e-acessos',
      name: 'TiposAtaquesSenhasEAcessos',
      component: TiposAtaquesSenhasAcessos
    },
    {
      path: '/tipos-ataques-pagina-copia-de-seguranca',
      name: 'TiposAtaquesCopiaDeSeguranca',
      component: TiposAtaquesCopiaDeSeguranca
    },
    {
      path: '/tipos-ataques-pagina-aplicativos-financeiros',
      name: 'TiposAtaquesAplicativosFinanceiros',
      component: TiposAtaquesAplicativosFinanceiros
    },
    {
      path: '/tipos-ataques-pagina-noticias-falsas',
      name: 'TiposAtaquesNoticiasFalsas',
      component: TiposAtaquesNoticiasFalsas
    },
    {
      path: '/tipos-ataques-pagina-seguranca-aparelho',
      name: 'TiposAtaquesSegurancaAparelho',
      component: TiposAtaquesSegurancaAparelho
    },
    {
      path: '/tipos-ataques-pagina-virus-e-aplicativos-maliciosos',
      name: 'TiposAtaquesVirusEAppsMaliciosos',
      component: TiposAtaquesVirusEAppsMaliciosos
    },
    {
      path: '/tipos-ataques-pagina-compras-pela-internet',
      name: 'TiposAtaquesComprasPelaInternet',
      component: TiposAtaquesComprasPelaInternet
    },
    {
      path: '/tipos-ataques-pagina-mensagens-e-links-falsos',
      name: 'TiposAtaquesMensagensELinksFalsos',
      component: TiposAtaquesMensagensELinksFalsos
    },
    {
      path: '/tipos-ataques-pagina-dados-pessoais',
      name: 'TiposAtaquesDadosPessoais',
      component: TiposAtaquesDadosPessoais
    },
    {
      path: '/tipos-ataques-pagina-wifi-e-internet',
      name: 'TiposAtaquesWifiEInternet',
      component: TiposAtaquesWifiEInternet
    },
    {
      path: '/tipos-ataques-pagina-redes-sociais',
      name: 'TiposAtaquesRedesSociais',
      component: TiposAtaquesRedesSociais
    },
    {
      path: '/tipos-ataques-pagina-trabalho-remoto',
      name: 'TiposAtaquesTrabalhoRemoto',
      component: TiposAtaquesTrabalhoRemoto
    },
    {
      path: '/tipos-ataques-pagina-vazamento-de-dados',
      name: 'TiposAtaquesVazamentoDados',
      component: TiposAtaquesVazamentoDados
    },



    //BOTÃO: "COMO ME PROTEGER?"
    {
      path: '/pagina-como-me-proteger',
      name: 'ComoMeProteger',
      component: ComoMeProteger
    },
    {
      path: '/como-me-proteger-pagina-dicas-rapidas',
      name: 'ComoMeProtegerDicasRapidas',
      component: ComoMeProtegerDicasRapidas
    },
    {
      path: '/como-me-proteger-pagina-tecnologias-para-prevencao',
      name: 'ComoMeProtegerTecnologiasParaPrevencao',
      component: ComoMeProtegerTecnologiasParaPrevencao
    },
    {
      path: '/como-me-proteger-pagina-firewall-pessoal',
      name: 'ComoMeProtegerFirewallPessoal',
      component: ComoMeProtegerFirewallPessoal
    },
    {
      path: '/como-me-proteger-pagina-antivirus',
      name: 'ComoMeProtegerAntivirus',
      component: ComoMeProtegerAntivirus
    },
    {
      path: '/como-me-proteger-pagina-vpn',
      name: 'ComoMeProtegerVPN',
      component: ComoMeProtegerVPN
    },



    //BOTÃO: "BOAS PRÁTICAS"
    {
      path: '/pagina-boas-praticas',
      name: 'BoasPraticas',
      component: BoasPraticas
    },
    {
      path: '/boas-praticas-pagina-autenticacao',
      name: 'BoasPraticasAutenticacao',
      component: BoasPraticasAutenticacao
    },
    {
      path: '/boas-praticas-pagina-backup',
      name: 'BoasPraticasBackup',
      component: BoasPraticasBackup
    },
    {
      path: '/boas-praticas-pagina-banco-via-internet',
      name: 'BoasPraticasBancoViaInternet',
      component: BoasPraticasBancoViaInternet
    },
    {
      path: '/boas-praticas-pagina-boatos',
      name: 'BoasPraticasBoatos',
      component: BoasPraticasBoatos
    },
    {
      path: '/boas-praticas-pagina-codigos-maliciosos',
      name: 'BoasPraticasCodigosMaliciosos',
      component: BoasPraticasCodigosMaliciosos
    },
    {
      path: '/boas-praticas-pagina-comercio-via-internet',
      name: 'BoasPraticasComercioViaInternet',
      component: BoasPraticasComercioViaInternet
    },
    {
      path: '/boas-praticas-pagina-computadores',
      name: 'BoasPraticasComputadores',
      component: BoasPraticasComputadores
    },
    {
      path: '/boas-praticas-pagina-furto-de-celulares',
      name: 'BoasPraticasFurtoDeCelulares',
      component: BoasPraticasFurtoDeCelulares
    },
    {
      path: '/boas-praticas-pagina-phishing',
      name: 'BoasPraticasPhishing',
      component: BoasPraticasPhishing
    },
    {
      path: '/boas-praticas-pagina-privacidade',
      name: 'BoasPraticasPrivacidade',
      component: BoasPraticasPrivacidade
    },
    {
      path: '/boas-praticas-pagina-protecao-de-dados',
      name: 'BoasPraticasProtecaoDeDados',
      component: BoasPraticasProtecaoDeDados
    },
    {
      path: '/boas-praticas-pagina-redes',
      name: 'BoasPraticasRedes',
      component: BoasPraticasRedes
    },
    {
      path: '/boas-praticas-pagina-redes-sociais-boas-praticas',
      name: 'BoasPraticasRedesSociaisBoasPraticas',
      component: BoasPraticasRedesSociais
    },
    {
      path: '/boas-praticas-pagina-trabalho-remoto',
      name: 'BoasPraticasTrabalhoRemoto',
      component: BoasPraticasTrabalhoRemoto
    },
    {
      path: '/boas-praticas-pagina-vazamento-de-dados',
      name: 'BoasPraticasVazamentoDeDados',
      component: BoasPraticasVazamentoDeDados
    }
    /*
    
    {
      path: '/canais-de-comunicacao',
      name: 'CanaisDeComunicacao',
      component: CanaisDeComunicacao
    }*/
  ],
})

export default router
