import Vue from 'vue'
import VueRouter from 'vue-router'
import ClubesLista from '../views/ClubesLista.vue'
import Flamengo from "../views/Flamengo.vue"
import Santos from "../views/Santos.vue"
import Corinthians from "../views/Corinthians.vue"
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
    path: '/Classificacao',
    name: 'ClubesLista',
    component: ClubesLista,
  },
  {
    path: "/Flamengo",
    name: "Flamengo",
    component: Flamengo
  },
  {
    path: "/corinthians",
    name: "Corinthians",
    component: Corinthians
  },
  {
    path: "/Fortaleza",
    name: "Fortaleza",
    component: Fortaleza
  },
  {
    path: "/Internacional",
    name: "Internacional",
    component: Internacional
  },
  {
    path: "/Santos",
    name: "Santos",
    component: Santos
  },
]

const router = new VueRouter({
  routes
})

export default router
