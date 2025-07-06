<template>
    <section class="buy">
        <div class="head">
          <BurgerMenu id="burger"/>
          <HeaderText :title="'компоненты'"/>
        </div>
        <div class="title">
            <LabelText :title="'Два вида фасовки 50 и 30 мл, компактный размер, точечное нанесение – экономный расход'"/>
        </div>
        <div class="buy-items">
            <div class="item">
                <img src="../assets/big.png" alt="">
                <p class="mililitres">50 мл</p>
            </div>
            <div class="item">
                <img src="../assets/small.png" alt="">
                <p class="mililitres">30 мл</p>
            </div>
        </div>
    </section>
    <Footer/>
</template>

<script>
import LabelText from "../components/LabelText.vue";
import Footer from "../components/FooterContent.vue";
export default {
    components: { LabelText, Footer },
    async mounted() {
        this.showComponentsAnimation();
    },
    methods:{
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
</style>