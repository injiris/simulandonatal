import Vue from 'vue'
import VueRouter from 'vue-router'
import ClubesLista from '../views/ClubesLista.vue'
import Flamengo from "../views/Flamengo.vue"
import Corinthians from "../views/Corinthians.vue"
import Santos from "../views/Santos.vue"
import Fortaleza from "../views/Fortaleza.vue"
import Internacional from "../views/Internacional.vue"
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
  {
    path: "/corinthians",
    name: "Corinthians",
    component: Corinthians
  },
  {
    path: "/fortaleza",
    name: "Fortaleza",
    component: Fortaleza
  },
  {
    path: "/internacional",
    name: "Internacional",
    component: Internacional
  },
  {
    path: "/santos",
    name: "Santos",
    component: Santos
  },
]

const router = new VueRouter({
  routes
})

export default router
