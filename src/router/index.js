import Vue from 'vue'
import VueRouter from 'vue-router'
import Flamengo from '../views/Flamengo.vue'

Vue.use(VueRouter)

<<<<<<< HEAD
const routes = [

  
]
=======
const routes = [{
    path: '/',
    name: 'Flamengo',
    component: Flamengo
}]
>>>>>>> cdc2b57f85cf1b51ffcf559ad82bbe7cc8e74553

const router = new VueRouter({
    routes
})

export default router