import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'
import search from '../views/Search'
import detail from '../views/detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name:'client-search',
    component: main
  },
  {
    path: '/search',
    name:'search',
    component: search,
    props: true
  },
  {
    path: '/detail',
    name:'detail',
    component: detail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
