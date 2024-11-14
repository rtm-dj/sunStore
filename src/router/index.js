import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import BuyView from '../views/BuyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/components',
      name: 'components',
      component: ComponentsView
    },
    {
      path: '/buy',
      name: 'buy',
      component: BuyView
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
