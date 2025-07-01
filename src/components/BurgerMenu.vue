<template>
    <div class="menu">
        <div class="icon" @click="isOpen = true">
            <svg width="26" height="18" viewBox="0 0 26 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 18H26V15H0V18ZM0 10.5H26V7.5H0V10.5ZM0 0V3H26V0H0Z" fill="black"/>
            </svg>
        </div>
        <div class="menu-content" v-if="isOpen">
            <div class="menu-items">
                <button style="position: relative;" @click="this.$router.push('/')" :class="$route.path === '/' ? 'sectionActive' : 'section'">
                    <div class="positioned">
                        <div class="close" @click="isOpen = false">
                            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M8.46 7L14 12.54V14H12.54L7 8.46L1.46 14H0V12.54L5.54 7L0 1.46V0H1.46L7 5.54L12.54 0H14V1.46L8.46 7Z" fill="#262B2D"/>
                            </svg>
                        </div>
                        <div class="arrow">
                            <svg width="59" height="25" viewBox="0 0 59 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.562777 10.5338C12.4067 5.49982 36.6858 -0.433829 42.0687 15.2037C45.7438 25.8801 32.662 27.7817 29.0893 15.9575C25.5167 4.13334 42.3824 -7.88696 57.9235 10.8087M57.9235 10.8087L53.085 10.9947M57.9235 10.8087L57.3278 4.35641" stroke="#262B2D" stroke-linecap="round"/>
                            </svg>
                        </div>
                    </div>
                    Главная
                </button>
                <button @click="this.$router.push('/components')" :class="$route.path === '/components' ? 'sectionActive' : 'section'">Компоненты</button>
                <button @click="this.$router.push('/about')" :class="$route.path === '/about' ? 'sectionActive' : 'section'">О компании</button>
                <button @click="this.$router.push('/buy')" :class="$route.path === '/buy' ? 'sectionActive' : 'section'">Купить</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
}
</script>

<style scoped>
.positioned{
    position: absolute;
    left: -100px;
    top: 4px;
    display: flex;
    gap: 5px;
}
.menu-items{
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}
.section{
    background-color: #8F8F76;
    color: #ffffff;
}

.sectionActive{
    background-color: #787863;
    color: #ffffff;
}
button{
    padding: 0 20px;
    transition: all .2s ease;
    border-radius: 16px;
    height: 32px;
    font-size: 20px;
    font-family: 'Montserrat Alternates';
    font-weight: 500;
    border: none;
}
.menu-content{
    position: relative;
    background-color: #fffdef56;
    backdrop-filter: blur(5px);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.icon{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 46px;
    aspect-ratio: 1;
}
</style>