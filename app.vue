<template>
  <header hidden aria-hidden="true">
    <h1>Натуральный бальзам после укусов "Кладовая солнца"</h1>
    <h2>Экологичный бальзам с травами для снятия зуда и воспаления</h2>
    <h2>Сертифицированная натуральная косметика из России</h2>
    <h3>Быстро устраняет зуд от укусов комаров</h3>
    <h3>Снижает отечность и покраснение за 15 минут</h3>
    <h4>Состав: натуральные компоненты и травы</h4>
    <h4>Без парабенов и синтетических добавок</h4>
    <h5>Произведено в России по традиционным рецептам</h5>
    <h5>Подходит для взрослых и детей</h5>
    <h6>Объем: 50 мл и 30 мл</h6>
    <h6>Два вида фасовки 50 и 30 мл, компактный размер, точечное нанесение – экономный расход</h6>
    <p>быстро снимает воспаление, отёк, зуд и раздражение</p>
    <p>обладает действием против воспаления</p>
    <p>оказывают регенерирующее действие на поврежденные клетки</p>
  </header>
  <NavBar />
  <NuxtPage />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  background: #FFFDEF;
  font-family: 'Montserrat Alternates';
}

* {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: #8F8F76 !important;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px !important;
}

#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #8F8F76, 0 0 5px #8F8F76;
  opacity: 1.0;
  transform: rotate(3deg) translate(0px, -4px);
}

#nprogress .spinner {
  display: none;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  display: none;
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: #8F8F76;
  border-left-color: #8F8F76;
  border-radius: 50%;
  animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@keyframes nprogress-spinner {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
