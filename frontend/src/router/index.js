import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

//BOTÃO: "TIPOS DE ATAQUES"
import TiposAtaques from '../views/TiposAtaques.vue'
import SenhasAcessos from '@/views/SenhasAcessos.vue'
import CopiaDeSeguranca from '@/views/CopiaDeSeguranca.vue'
import AplicativosFinanceiros from '@/views/AplicativosFinanceiros.vue'
import NoticiasFalsas from '@/views/NoticiasFalsas.vue'
import SegurancaAparelho from '@/views/SegurancaAparelho.vue' 
import VirusEAppsMaliciosos from '@/views/VirusEAppsMaliciosos.vue'
import ComprasPelaInternet from '@/views/ComprasPelaInternet.vue'
import MensagensELinksFalsos from '@/views/MensagensELinksFalsos.vue'
import DadosPessoais from '@/views/DadosPessoais.vue'
import WifiEInternet from '@/views/WifiEInternet.vue'
import RedesSociais from '@/views/RedesSociais.vue'
import TrabalhoRemoto from '@/views/TrabalhoRemoto.vue'
import VazamentoDados from '@/views/VazamentoDados.vue'

//BOTÃO: "COMO ME PROTEGER?"
import ComoMeProteger from '../views/ComoMeProteger.vue'
import DicasRapidas from '@/views/DicasRapidas.vue'
//import BoasPraticas from '../views/BoasPraticas.vue'
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
      path: '/pagina-senhas-e-acessos',
      name: 'SenhasEAcessos',
      component: SenhasAcessos
    },
    {
      path: '/pagina-copia-de-seguranca',
      name: 'CopiaDeSeguranca',
      component: CopiaDeSeguranca
    },
    {
      path: '/pagina-aplicativos-financeiros',
      name: 'AplicativosFinanceiros',
      component: AplicativosFinanceiros
    },
    {
      path: '/pagina-noticias-falsas',
      name: 'NoticiasFalsas',
      component: NoticiasFalsas
    },
    {
      path: '/pagina-seguranca-aparelho',
      name: 'SegurancaAparelho',
      component: SegurancaAparelho
    },
    {
      path: '/pagina-virus-e-aplicativos-maliciosos',
      name: 'VirusEAppsMaliciosos',
      component: VirusEAppsMaliciosos
    },
    {
      path: '/pagina-compras-pela-internet',
      name: 'ComprasPelaInternet',
      component: ComprasPelaInternet
    },
    {
      path: '/pagina-mensagens-e-links-falsos',
      name: 'MensagensELinksFalsos',
      component: MensagensELinksFalsos
    },
    {
      path: '/pagina-dados-pessoais',
      name: 'DadosPessoais',
      component: DadosPessoais
    },
    {
      path: '/pagina-wifi-e-internet',
      name: 'WifiEInternet',
      component: WifiEInternet
    },
    {
      path: '/pagina-redes-sociais',
      name: 'RedesSociais',
      component: RedesSociais
    },
    {
      path: '/pagina-trabalho-remoto',
      name: 'TrabalhoRemoto',
      component: TrabalhoRemoto
    },
    {
      path: '/pagina-vazamento-de-dados',
      name: 'VazamentoDados',
      component: VazamentoDados
    },

    //BOTÃO: "COMO ME PROTEGER?"
    {
      path: '/pagina-como-me-proteger',
      name: 'ComoMeProteger',
      component: ComoMeProteger
    },

    {
      path: '/dicas-rapidas',
      name: 'DicasRapidas',
      component: DicasRapidas
    }
    /*
    {
      path: '/boas-praticas',
      name: 'BoasPraticas',
      component: BoasPraticas
    },
    {
      path: '/canais-de-comunicacao',
      name: 'CanaisDeComunicacao',
      component: CanaisDeComunicacao
    }*/
  ],
})

export default router
