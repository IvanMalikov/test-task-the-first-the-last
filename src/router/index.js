import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Where from '../views/Where.vue'
import Who from '../views/Who.vue'
import What from '../views/What.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/where',
    name: 'where',
    component: Where
  },
  {
    path: '/who',
    name: 'who',
    component: Who
  },
  {
    path: '/what',
    name: 'what',
    component: What
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
