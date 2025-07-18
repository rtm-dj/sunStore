import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import router from './router'

import Modal from "@/components/BuyModal.vue"
import BurgerMenu from "@/components/BurgerMenu.vue"

const app = createApp(App)
const head = createHead()

const preloadAssets = async () => {
  try {
    const assetsContext = import.meta.glob('@/assets/**/*.{jpg,png,svg}')
    
    for (const path in assetsContext) {
      const image = new Image()
      const module = await assetsContext[path]()
      image.src = module.default
    }
  } catch (error) {
    console.warn('Asset preloading error:', error)
  }
}

app.use(head)
app.use(router)
app.component('Modal', Modal)
app.component('BurgerMenu', BurgerMenu)

preloadAssets().then(() => {
  app.mount('#app')
})