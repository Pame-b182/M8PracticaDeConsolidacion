import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import VestuarioHombre from '@/views/VestuarioHombreView.vue'
import VestuarioMujer from '@/views/VestuarioMujerView.vue'
import Electronica from '@/views/ElectronicaView.vue'
import Carrito from '@/views/CarritoView.vue'
import FormPagar from '@/views/FormPagarView.vue'
import ConfirmacionCompra from '@/views/ConfirmacionView.vue'
import NotFound from '@/views/NotFoundView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/vestuariohombre',
    name: 'VestuarioHombre',
    component: VestuarioHombre,
  },
  {
    path: '/vestuariomujer',
    name: 'VestuarioMujer',
    component: VestuarioMujer,
  },
  {
    path: '/electronica',
    name: 'Electronica',
    component: Electronica,
  },
  {
    path: '/carrito',
    name: 'Carrito',
    component: Carrito,
  },
  {
    path: '/pagar',
    name: 'Pagar',
    component: FormPagar,
  },
  {
    path: '/confirmacion',
    name: 'Confirmacion',
    component: ConfirmacionCompra,
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
