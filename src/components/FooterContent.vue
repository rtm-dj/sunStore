<template>
    <div class="footer">
        <div class="smallLogo">
            <img src="../assets/logo-white.png" alt="">
        </div>
        <div class="menuItems">
            <p @click="this.$router.push('/')">Главная</p>
            <p @click="this.$router.push('/components')">Компоненты</p>
            <p @click="this.$router.push('/about')">О компании</p>
            <p>Купить</p>
        </div>
        <div class="bottomContent">
            <p>2025 © Кладовая солнца</p>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bottomContent{
    display: flex;
    font-size: 16px;
    color: #FFFDEF;
    justify-content: center;
    width: 90%;
    align-items: center;
}
.menuItems p{
    transition: all .2s ease;
}
.menuItems p:hover{
    cursor: pointer;
    filter: brightness(80%);
}
.menuItems{
    display: flex;
    font-size: 16px;
    color: #FFFDEF;
    gap: 90px;
    align-items: center;
}
.smallLogo img{
    width: 74px;
}
.footer{
    margin-top: auto;
    padding: 14px 0;
    background-color: #8F8F76;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
@media (max-width: 768px){
    .menuItems{
        text-align: center;
        display: block;
        font-size: 16px;
        color: #FFFDEF;
        gap: 90px;
        align-items: center;
    }
}
</style>