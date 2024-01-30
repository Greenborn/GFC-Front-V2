import { createRouter, createWebHistory } from 'vue-router'

import Layout     from '../layout/Layout.vue'
import BaseLayout from '../layout/BaseLayout.vue'

import PaginaRegistro from '../views/usuarios/PaginaRegistro.vue'
import PaginaLogin from '../views/usuarios/PaginaLogin.vue'
import HomePage from '../views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'root',
      redirect: 'home',
    },
    {
      path: "/",
      name: "dashboard",
      component: BaseLayout,
      children: [
        { path:  "/login",    component: PaginaLogin    },
        { path:  "/register", component: PaginaRegistro },
        { path:  "/home",     component: HomePage }
      ]
    }
  ]
})

export default router
