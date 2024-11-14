<template>
    <section class="buy">
        <img src="../assets/photo.png" alt="" class="photo" ref="block_first">
        <div class="about">
            <div class="about-wrapper">
                <h3>Два вида фасовки 50 и 30 мл, компактный размер, точечное нанесение – экономный расход</h3>
                <div class="about-blocks">
                    <div class="block" ref="block_second">
                        <h1 class="ml">50<span>мл</span></h1>
                        <p class="subtitle">Больше объема для<br>длительного ухода!</p>
                    </div>
                    <div class="block" ref="block_third">
                        <h1 class="ml">30<span>мл</span></h1>
                        <p class="subtitle">Компактно и удобно —<br>всегда под рукой!</p>
                    </div>
                </div>
            </div>
            <div class="buy-buttons">

            </div>
        </div>
    </section>
</template>

<script>
export default {
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
            this.$refs.block_fourth,
            this.$refs.block_fifth,
            this.$refs.block_sixth,
            this.$refs.block_seventh,
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
            this.$refs.block_fourth,
            this.$refs.block_fifth,
            this.$refs.block_sixth,
            this.$refs.block_seventh,
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
*{
  transition: all .7s ease;
}
.block-show{
    scale: 1 !important;
    opacity: 1 !important;
}
.photo{
    height: 91vh;
    width: 50%;
    background-color:blue;
    border-radius: 50px;
    object-fit: cover;
    scale: 0;
    opacity: 0;
}
.buy{
    display: flex;
    gap: 18px;
    padding: 18px;
    padding-top: 90px;
}
.about{
    height: 91vh;
    width: 50%;
}

.about-wrapper{
    background-color: #F0EDE0;
    border-radius: 50px;
    height: 60vh;
    margin-bottom: 1vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
}

.buy-buttons{
    background-color: #8F8F76;
    border-radius: 50px;
    height: 30vh;
}
.about-blocks{
    display: flex;
    padding: 25px;
    justify-content: space-between;
}
.ml{
    font-size: 180px;
    font-weight: 500;
}
span{
    font-size: 80px;
    font-weight: 500;
}
.block{
    background-color: #FFFDEF;
    border-radius: 25px;
    width: 49%;
    height: 100%;
    color: #262B2D;
    text-align: center;
    scale: 0;
    opacity: 0;
}
.subtitle{
    font-size: 20px;
    font-weight: 500;
    color: #ACABA4;
    text-align: center;
}
h3{
    font-size: 24px;
    font-weight: 500;
    color: #262B2D;
    text-align: center;
    margin: 0 50px 0 50px;
    padding-top: 50px;
}
@media (min-width: 768px) and (max-width: 1800px){
    .ml{
        font-size: 70px;
        margin: 40px 0;
        font-weight: 500;
    }
    span{
        font-size: 30px;
        font-weight: 500;
    }
    .subtitle{
        font-size: 14px;
        font-weight: 500;
        color: #ACABA4;
        text-align: center;
    }
    h3{
        font-size: 16px;
        font-weight: 500;
        color: #262B2D;
        text-align: center;
        margin: 0 50px 0 50px;
        padding-top: 50px;
    }
    .photo{
        height: 85vh;
        width: 50%;
        background-color:blue;
        border-radius: 50px;
        object-fit: cover;
        scale: 0;
        opacity: 0;
    }

    .about{
        height: 85vh;
        width: 50%;
    }
    .about-wrapper{
        background-color: #F0EDE0;
        border-radius: 50px;
        height: 50vh;
        margin-bottom: 1vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;  
    }

    .buy-buttons{
        background-color: #8F8F76;
        border-radius: 50px;
        height: 34vh;
    }
}
</style>