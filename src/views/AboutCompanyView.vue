<template>
    <div class="aboutpage">
        <div class="company">
            <div class="bigLogo">
                <img src="../assets/logo.png" alt="" class="logo">
                <h1>ИП Токмачева Е. Н.</h1>
                <div class="info">
                    <p>123423</p>
                    <p>г. Москва, Карамышевская наб., 22А</p>
                </div>
            </div>
            <div class="description">
                <p>Кладовая солнца - текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст</p>
            </div>
        </div>
        <div class="documents">
            <p class="naming">Сертификат качества</p>
            <p class="naming">Состав</p>
            <p class="naming">Инструкция по применению</p>
        </div>
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
                <p>2024 © Кладовая солнца</p>
                <p>{{ 'Language' }}</p>
            </div>
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
    justify-content: space-between;
    width: 90%;
    align-items: center;
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
    margin-top: 100px;
    width: 100%;
    padding: 14px;
    background-color: #8F8F76;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.aboutpage{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.naming{
    border-radius: 20px;
    border: 1px solid #FFFDEF;
    padding: 20px;
    color: #FFFDEF;
}
.documents{
    margin-top: 100px;
    height: 60px;
    border: none;
    border-radius: 40px;
    background-color: #8F8F76;
    padding: 20px;
    display: flex;
    align-items: center;
    gap: 10px;
}   
.bigLogo{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.company{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10%;
    gap: 70px;
}   
.logo{
    width: 400px;
}
.info{
    display: flex;
    align-items: center;
    gap: 10px;
}
.description p{
    font-size: 24px;
    width: 600px;
}
</style>