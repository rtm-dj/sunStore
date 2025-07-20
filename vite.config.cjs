const { fileURLToPath } = require('node:url')
const { defineConfig } = require('vite')
const vue = require('@vitejs/plugin-vue')
const prerender = require('vite-plugin-prerender')
const path = require('path')

module.exports = (async () => {
  const { default: Sitemap } = await import('vite-plugin-sitemap')

  return defineConfig({
    plugins: [
      vue(),
      prerender({
        staticDir: path.resolve(__dirname, 'dist'),
        routes: [
          '/',
          '/about',
          '/components',
          '/buy'
        ],
        debug: true,
      }),
      Sitemap({
        hostname: 'https://kladovayasun.ru/',
        routes: [
          '/',
          '/about',
          '/components',
          '/buy'
        ],
      }),
    ],
    assetsInclude: ['**/*.glb'],
    base: '/',
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
})()
