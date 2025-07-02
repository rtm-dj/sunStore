<template>
    <div class="head">
        <BurgerMenu id="burger"/>
        <HeaderText :title="'о компании'"/>
    </div>
    <div class="aboutpage">
        <div class="company">
            <div class="bigLogo">
                <img src="../assets/logo.png" alt="" class="logo">
                <h1>ИП Токмачева Е. Н.</h1>
                <div class="info">
                    <p>Карамышевская набережная, д. 22А</p>
                </div>
            </div>
            <div class="documents">
                <p class="naming">Сертификат качества</p>
                <p class="naming">Состав</p>
                <p class="naming">Инструкция по применению</p>
            </div>
            <div class="description">
                <p>Кладовая Солнца – это бренд натуральной косметики, которая разрабатывается, опираясь на научные данные, и использует в своем составе максимум натуральных компонентов. В своей работе мы в первую очередь руководствуемся принципом « не навреди» и не даем пустых обещаний — наша косметика работает.</p>
            </div>
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
                <p>2025 © Кладовая солнца</p>
                <p>{{ 'Language' }}</p>
            </div>
        </div>
    </div>
  
</template>

<script>
import HeaderText from "../components/HeaderText.vue";
export default {
    components: { HeaderText },
}
</script>

<style scoped>
#burger{
  display: none;
}
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
    height: 40px;
    border: none;
    border-radius: 20px;
    background-color: #F0EDE0;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 44px;
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
@media (max-width: 768px){
    #burger{
        display: block;
    }
    .company{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-top: 10%;
        gap: 70px;
    }   
    .logo{
        width: 200px;
    }
    h1{
        font-size: 16px;
        color: #262B2D;
    }
    .description{
        padding: 0 40px;
    }
    .description p{
        font-size: 18px;
        width: 100%;
    }
    .head{
        display: flex;
        align-items: center;
        gap: 12px;
        /* position: fixed; */
        background-color: #FFFDEF;
        margin-top: 54px;
        margin-left: 12px;
    }
    .naming{
        border-radius: 20px;
        border: none;
        padding: 0;
        font-size: 10px;
        color: #262B2D;
        width: fit-content;
    }
}
</style>