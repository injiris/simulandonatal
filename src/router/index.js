import Vue from "vue"
import VueRouter from "vue-router"
import Flamengo from "../views/Flamengo.vue"

Vue.use(VueRouter)

const routes = [
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
