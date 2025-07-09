import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    vue(),
    Pages(),
    Sitemap({ hostname: 'https://kladovayasun.ru' }),
  ],
  assetsInclude: ['**/*.glb'],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
