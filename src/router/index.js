import Vue from 'vue'
import VueRouter from 'vue-router'
import ClubesLista from '../views/ClubesLista.vue'
import Flamengo from "../views/Flamengo.vue"
import Inicio from "../views/Inicio.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio,
  },
  {
    path: '/classificacao',
    name: 'ClubesLista',
    component: ClubesLista,
  },
  {
    path: "/flamengo",
    name: "Flamengo",
    component: Flamengo
  },
]

const router = new VueRouter({
  routes
})

export default router
