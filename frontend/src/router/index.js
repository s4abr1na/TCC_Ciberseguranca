import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TiposAtaques from '../views/TiposAtaques.vue'
import SenhasAcessos from '@/views/SenhasAcessos.vue'
//import ComoMeProteger from '../views/ComoMeProteger.vue'
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
      path: '/senhas-e-acessos',
      name: 'SenhasEAcessos',
      component: SenhasAcessos
    }
    /*{
      path: '/como-me-proteger',
      name: 'ComoMeProteger',
      component: ComoMeProteger
    },
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
