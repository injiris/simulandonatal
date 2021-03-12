import Vue from 'vue'
import VueRouter from 'vue-router'
import ClubesLista from '../views/ClubesLista.vue'
import Flamengo from "../views/Flamengo.vue"

Vue.use(VueRouter)

const routes = [
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
