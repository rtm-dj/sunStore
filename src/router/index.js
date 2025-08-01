import { createRouter, createWebHistory } from 'vue-router'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/components',
      name: 'components',
      component: () => import('../views/ComponentsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutCompanyView.vue')
    },
    {
      path: '/buy',
      name: 'buy',
      component: () => import('../views/BuyView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('../views/NotFound.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

// const router = createRouter({
//   history: createWebHistory(import.meta.env.BASE_URL),
//   routes: [
//     {
//       path: '/:pathMatch(.*)*',
//       name: 'notFound',
//       component: () => import('../views/NotFound.vue')
//     }
//   ],
//   scrollBehavior(to, from, savedPosition) {
//     return { top: 0 }
//   }
// })

router.beforeEach((to, from, next) => {
  NProgress.start()
  NProgress.configure({ easing: 'ease', speed: 400 })
  NProgress.configure({ showSpinner: false })

  if (to.matched.length === 0) {
    next('/notFound')
  } else {
    setTimeout(() => {
      next()
    }, 300)
  }
})

router.afterEach(() => {
  NProgress.done()
})

export default router