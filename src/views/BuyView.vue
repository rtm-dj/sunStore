<template>
     <div class="head">
        <BurgerMenu id="burger"/>
        <HeaderText :title="'купить'"/>
    </div>
    <section class="buy">
        <div class="title">
            <LabelText :width="450" :title="'Два вида фасовки 50 и 30 мл, компактный размер, точечное нанесение – экономный расход'"/>
        </div>
        <div class="buy-items">
            <div class="item" @click="openLink('big')">
                <img src="../assets/big-empty.png" alt="big_cream">
                <p class="mililitres">50 мл</p>
            </div>
            <div class="item" @click="openLink('small')">
                <img src="../assets/small-empty.png" alt="small_cream">
                <p class="mililitres">30 мл</p>
            </div>
        </div>
    </section>
    <Footer/>
</template>

<script>
import LabelText from "../components/LabelText.vue";
import Footer from "../components/FooterContent.vue";
import HeaderText from "../components/HeaderText.vue";
import { useHead } from '@vueuse/head'
export default {
    components: { LabelText, Footer, HeaderText },
    async mounted() {
        this.showComponentsAnimation();
    },
    setup() {
        useHead({
        title: 'Кладовая Солнца | Купить',
        meta: [
            { name: 'description', content: 'Быстро снимает воспаление, отёк, зуд и раздражение' },
            { property: 'og:title', content: 'Бальзам после укусов' },
            { property: 'og:image', content: 'https://kladovayasun.ru/assets/photo-DmOUKuX9.png' }
        ],
        link: [
            { rel: 'canonical', href: 'https://kladovayasun.ru' }
        ]
        })
    },
    methods:{
        openLink(type) {
            if (type == 'big') {
                window.open('https://www.ozon.ru/product/krem-gel-balzam-posle-ukusov-nasekomyh-50-ml-2074229992/', '_blank');
            } else {
                window.open('https://www.ozon.ru/product/krem-gel-balzam-posle-ukusov-nasekomyh-30-ml-2074361875/', '_blank');
            }
            
        },
        showComponentsAnimation() {
            let index = 0;
            const blocks = [
                this.$refs.block_first,
                this.$refs.block_second,
                this.$refs.block_third,
            ];

            const interval = setInterval(() => {
                if (index < blocks.length) {
                const block = blocks[index];
                if (block) {
                    block.classList.add('block-show');
                }
                index++;
                } else {
                clearInterval(interval);
                }
            }, 50);
        },

        hideComponentsAnimation() {
            let index = 0;
            const blocks = [
                this.$refs.block_first,
                this.$refs.block_second,
                this.$refs.block_third,
            ];

            const interval = setInterval(() => {
                if (index < blocks.length) {
                const block = blocks[index];
                if (block) {
                    block.classList.remove('block-show');
                }
                index++;
                } else {
                clearInterval(interval);
                }
            }, 50);
        },
    }
}
</script>

<style scoped>
.buy-items{
    display: flex;
    gap: 20px;
}
.item:hover{
    cursor: pointer;
    filter: brightness(90%);
}
.item{
    border: 1px solid #8F8F76;
    border-radius: 20px;
    background-color: #F0EDE0;
    overflow: hidden;
    height: 40vh;
    width: 15vw;
}
.item img{
    border-bottom: 1px solid #8F8F76;
    height: 36vh;
    width: 100%;
    object-fit: cover;
}
.mililitres{
    margin: 0;
    color: #262B2D;
    font-size: 1vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.buy{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 7%;
    gap: 70px;
    min-height: 80vh;
}
.head{
    display: none;
}
*{
  /* transition: all .7s cubic-bezier(0.560, 1.555, 0.305, 0.940); */
  transition: all .5s cubic-bezier(0.560, 1.555, 0.305, 0.940);
}
@media (max-width: 768px){
    .head{
        display: flex;
        align-items: center;
        gap: 12px;
        /* position: fixed; */
        background-color: #FFFDEF;
        margin-top: 54px;
        margin-left: 12px;
    }
    .buy-items{
        display: flex;
        width: 90%;
        flex-direction: column;
        gap: 20px;
    }
    .item:hover{
        cursor: pointer;
        filter: brightness(100%);
    }
    .item{
        width: 100%;
        height: fit-content;
    }
    .buy{
        min-height: auto;
        margin-bottom: 30px;
    }
    .mililitres{
        font-size: 20px;
    }
    .item img{
        margin-top: 20px;
        width: 100%;
        object-fit: cover;
        height: auto;
    }
}
</style>