import Home from '@/layouts/home/Home.vue'
import { createRouter, createWebHashHistory, Router, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
  // {
  //   path: '/vuex',
  //   name: 'Vuex',
  //   component: Vuex
  // },
  // {
  //   path: '/axios',
  //   name: 'Axios',
  //   component: () => import('@/layouts/Axios.vue')
  // },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   component: Test
  // }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
