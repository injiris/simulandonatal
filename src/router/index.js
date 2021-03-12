import Vue from 'vue'
import VueRouter from 'vue-router'
import Flamengo from '../views/Flamengo.vue'
import Internacional from '../views/Internacional.vue'
import Fortaleza from '../views/Fortaleza.vue'
import Santos from '../views/Santos.vue'
import Corinthians from '../views/Corinthians.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/Flamengo',
        name: 'Flamengo',
        component: Flamengo
    },
    {
        path: '/Internacional',
        name: 'Internacional',
        component: Internacional
    },
    {
        path: '/Fortaleza',
        name: 'Fortaleza',
        component: Fortaleza
    },
    {
        path: '/Santos',
        name: 'Santos',
        component: Santos
    },
    {
        path: '/Corinthians',
        name: 'Corinthians',
        component: Corinthians
    }
]

const router = new VueRouter({
    routes
})

export default router