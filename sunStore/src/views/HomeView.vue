<template>
  <div class="page">
    <section class="banner">
      <div class="left-part">
        <div class="language">
          <button class="lang" @click="language == 'ru' ? language = 'en' : language = 'ru'">{{ language }}</button>
        </div>
        <img src="../assets/logo.png" alt="" class="logotype" ref="block_first">
        <div class="bottom-action" ref="block_third">
          <span class="copyright">2024 © кладовая солнца</span>
          <button class="buy">Купить</button>
        </div>
      </div>
      <div class="right-part">
        <img src="../assets/curvedText_1.svg" alt="" class="curvedText" ref="block_sixth">
        <div class="scrolldown" ref="block_fourth">
          <div class="icon-container">
            <img class="icon" src="../assets/scroll.svg" alt="">
          </div>
          <p class="scroll-text">Листай</p>
        </div>
        <div class="text-header">
          <h1 ref="block_second">быстро снимает воспаление, отёк, зуд и раздражение.</h1>
          <img src="../assets/blob1.svg" alt="" class="blob" ref="block_fifth">
        </div>
      </div>
    </section>

  </div>
</template>


<script>


export default {
  data() {
    return {
      language: 'ru',
      showBanner: true,
    };
  },

  mounted() {
    window.addEventListener('wheel', this.handleWheel);
    this.showBannerAnimation();
  },

  beforeUnmount() {
    window.removeEventListener('wheel', this.handleWheel);
  },

  methods: {
    handleWheel(event) {
      if (event.deltaY > 0) {
        
        this.hideBannerAnimation()
        setTimeout(() => {
          this.$router.push('/components')
        }, 500);
      }
    },

    showBannerAnimation() {
      let index = 0;
      const blocks = [
        this.$refs.block_first,
        this.$refs.block_second,
        this.$refs.block_third,
        this.$refs.block_fourth,
        this.$refs.block_fifth,
        this.$refs.block_sixth,
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

    hideBannerAnimation() {
      let index = 0;
      const blocks = [
        this.$refs.block_first,
        this.$refs.block_second,
        this.$refs.block_third,
        this.$refs.block_fourth,
        this.$refs.block_fifth,
        this.$refs.block_sixth,
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
  },
};

</script>


<style scoped>
*{
  transition: all .7s cubic-bezier(0.560, 1.555, 0.305, 0.940);
}
.block-show{
    scale: 1 !important;
    opacity: 1 !important;
    
}
.page {
  overflow-y: scroll;
  overflow-x: hidden;
}
.icon-container{
  border: solid 1px #262B2D;
  border-radius: 50%;
  width: 2.6vw;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon{
  width: 20px;
}
.scroll-text{
  color: #262B2D;
  font-size: 20px;
  font-weight: 500;
  
}
.scrolldown:hover{
  transform: translateY(10px);
}
.scrolldown{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  height: fit-content;
  position: absolute;
  /* transform: translateX(50%); */
  width: 90%;
  bottom: 50px;
  transition: all .2s ease;
  scale: 0;
  opacity: 0;
}
.blob:hover{
  rotate: 5deg;
}
.blob{
  position: absolute;
  right: 0;
  top: 0;
  scale: 1.2;
  rotate: 0deg;
  /* transition: rotate .2s ease; */
  opacity: 0;
}
.text-header{
  position: absolute;
  right: -100px;
  top: -80px;
  width: 500px;
  text-align: end;
}

.text-header h1{
  color: #262B2D;
  font-size: 60px;
  font-weight: 500;
  position: absolute;
  right: 150px;
  top: 80px;
  scale: 0;
  opacity: 0;
}
.curvedText{
  width: 70%;
  position: absolute;
  transform: translateX(10%);
  bottom: -330px;
  opacity: 0;
}
.right-part{
  width: 100%;
}
.banner{
  display: flex;
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.language{
  display: flex;
  width: 100%;
  justify-content: right;
}
.lang{
  background: none;
  font-family: 'Montserrat Alternates';
  border: none;
  color: #262B2D;
  border: 1px solid transparent;
  font-size: 14px;
  width: 2vw;
  aspect-ratio: 1;
  border-radius: 1vw;
  margin-right: 20px;
  transition: all .2s ease;
}
.lang:hover{
  cursor: pointer;
  border: 1px solid #262B2D;
  accent-color: none;
  box-sizing: border-box;
}
.copyright{
  color: #262B2D;
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  margin-bottom: 10px;
}
.language{
  margin-top: 50px;
}
.buy{
  background-color: #8F8F76;
  width: 15vw;
  height: 2.6vw;
  color: white;
  font-size: 20px;
  border: none;
  border-radius: 1.3vw;
  font-family: 'Montserrat Alternates';
  transition: all .2s ease;
  margin-bottom: 50px;
}
.buy:hover{
  cursor: pointer;
  background-color: #71715d;
}
.left-part{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  width: 20%;
  border-right: solid 1px #8F8F76;
}
.bottom-action{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  scale: 0;
  opacity: 0;
}
.logotype{
  width: 70%;
  scale: 0;
  opacity: 0;
}


</style>