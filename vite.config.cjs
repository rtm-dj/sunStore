const { fileURLToPath } = require('node:url')
const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
// const Pages = require('vite-plugin-pages').default
// const Sitemap = require('vite-plugin-sitemap').default

const path = require('path')
const prerender = require('vite-plugin-prerender')

module.exports = defineConfig({
  plugins: [
    vue(),
    // Pages(),
    // Sitemap({ hostname: 'https://kladovayasun.ru' }),
    prerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes: [
        '/',
        '/about',
        '/components',
        '/buy'
      ],
      debug: true,
    })
  ],
  assetsInclude: ['**/*.glb'],
  base: '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
