# sunStore — Кладовая Солнца

Сайт бренда натуральной косметики «Кладовая Солнца». Построен на **Nuxt 3** (Vue 3, SPA-режим).

## Структура проекта

```
├── app.vue           # Корневой layout (NavBar + страницы)
├── nuxt.config.ts    # Конфигурация Nuxt
├── pages/            # Маршруты (file-based routing)
│   ├── index.vue     # /
│   ├── components.vue
│   ├── about.vue
│   ├── buy.vue
│   └── [...slug].vue # 404
├── components/       # Vue-компоненты (auto-import)
├── assets/         # Ассеты для import в script
├── public/           # Статические файлы (картинки, svg, glb, pdf)
└── plugins/          # NProgress, preload ассетов
```

## Установка

```sh
npm install
```

## Разработка

```sh
npm run dev
```

Приложение будет доступно на `http://localhost:3000`.

## Сборка для production

```sh
npm run build
```

Результат — статический SPA в папке `.output/public` (подходит для GitHub Pages и nginx).

## Деплой

- **GitHub Pages**: workflow в `.github/workflows/deploy.yml` собирает и публикует `.output/public`
- **nginx**: конфиг в `nginx.conf` (SPA fallback на `index.html`)

## Статические файлы

PNG, GLB, PDF и другие бинарные файлы (logo.png, test.glb, certificate.pdf и т.д.) нужно положить в папку `public/`.
