import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import WorkView from '../views/WorkView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'profile',
    component: HomeView
  },
  {
    path: '/skills',
    name: 'skills',
    component: () => import(/* webpackChunkName: "about" */ '../views/SkillView.vue')
  },
  {
    path: '/works',
    name: 'works',
    component: WorkView
  }
]

const router = new VueRouter({
  routes
})

export default router