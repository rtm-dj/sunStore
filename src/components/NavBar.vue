<template>
  <div class="row">
    <button @click="this.$router.push('/')" :class="$route.path === '/' ? 'sectionActive' : 'section'">Главная</button>
    <button @click="this.$router.push('/components')" :class="$route.path === '/components' ? 'sectionActive' : 'section'">Компоненты</button>
    <button @click="this.$router.push('/about')" :class="$route.path === '/about' ? 'sectionActive' : 'section'">О компании</button>
    <button @click="this.$router.push('/buy')" :class="$route.path === '/buy' ? 'sectionActive' : 'section'">Купить</button>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
@media (max-width: 768px){
    .row{
        display: none !important;
    }
}
.row{
    position: fixed;
    top: 20px;
    right: 0;
    left: 0;
    margin: auto;
    height: 44px;
    width: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f0ede0a1;
    backdrop-filter: blur(20px);
    border-radius: 22px;
    z-index: 5;
    padding: 2px;
    gap: 40px;
}
.section{
    padding: 0 30px;
    background-color: transparent;
    color: #262B2D;
    border: none;
    font-size: 14px;
    font-family: 'Montserrat Alternates';
    font-weight: 500;
}

.sectionActive{
    padding: 0 30px;
    background-color: #8F8F76;
    color: #ffffff;
    border: none;
    font-size: 14px;
    font-family: 'Montserrat Alternates';
    font-weight: 500;
}
button{
    transition: all .2s ease;
    border-radius: 21px;
    height: 42px;
}

button:hover{
    cursor: pointer;
    filter: brightness(90%);
}
.section:hover{
    background-color: #e3e0d3;
}

@media (min-width: 768px) and (max-width: 1800px){
    button:hover{
        cursor: pointer;
        filter: brightness(90%);
    }
}
</style>