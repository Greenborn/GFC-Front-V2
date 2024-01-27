import { createRouter, createWebHistory } from 'vue-router'

import Layout from '../layout/Layout.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'root',
      redirect: 'dashboard',
      component: Layout,
      children: []
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: HomePage,
    }
  ]
})

export default router
