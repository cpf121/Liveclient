import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/main'
import viewsign from '../views/shared/Viewsign'
import guidesign from '../views/shared/Guidesign'
import childrens from './module'

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(VueRouter)

const routes = [
  {
    path: '/main',
    name:'main',
    component: main,
    children:[...childrens]
  },
  {
    path: '/viewsign',
    name:'viewsign',
    component: viewsign
  },
  {
    path: '/guidesign',
    name:'guidesign',
    component: guidesign
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
