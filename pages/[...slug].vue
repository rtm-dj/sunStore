<template>
  <div class="notFound">
    <img src="/logo.png" alt="logo" class="logo">
    <div class="subtitle">
      Ooops🥺<br>Кажется, такой страницы у нас нет
    </div>
    <img src="/rabbit.png" alt="rabbit" class="rabbit">
  </div>
</template>

<script>
export default {
  setup() {
    useHead({
      title: 'Страница не найдена | Кладовая Солнца',
    })
  },
}
</script>

<style scoped>
.notFound {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFDEF;
  height: 100svh;
  gap: 40px;
}
.logo {
  width: 400px;
}
.subtitle {
  font-family: 'Montserrat';
  text-align: center;
  font-size: 35px;
}
.rabbit {
  width: 200px;
}

@media (max-width: 600px) {
  .logo {
    width: 200px;
  }
  .subtitle {
    font-family: 'Montserrat';
    text-align: center;
    font-size: 20px;
  }
  .rabbit {
    width: 100px;
  }
}
</style>
