export default defineNuxtPlugin(() => {
  const imagePaths = [
    '/logo.png',
    '/logo-white.png',
    '/photo.png',
    '/big.png',
    '/small.png',
    '/big-empty.png',
    '/small-empty.png',
    '/rabbit.png',
    '/blob1.svg',
    '/curvedText_1.svg',
    '/curvedText_2.svg',
  ]

  imagePaths.forEach((path) => {
    const image = new Image()
    image.src = path
  })
})
