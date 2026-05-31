export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,

  experimental: {
    viteEnvironmentApi: true,
  },

  app: {
    head: {
      title: 'Кладовая солнца',
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
        },
      ],
      script: [
        {
          src: 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js',
          type: 'module',
        },
      ],
    },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag === 'model-viewer',
    },
  },

  vite: {
    assetsInclude: ['**/*.glb'],
  },

  nitro: {
    prerender: {
      routes: ['/', '/components', '/about', '/buy'],
    },
  },

  modules: ['@nuxtjs/sitemap'],

  site: {
    url: 'https://kladovayasun.ru',
  },

  sitemap: {
    urls: ['/', '/components', '/about', '/buy'],
  },
})
