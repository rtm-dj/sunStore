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
          <button class="buy" @click="modal = true">Купить</button>
        </div>
      </div>
      <div class="right-part">
        <model-viewer class="model"
        ref="block_seventh"
        :src="modelSrc"
        camera-orbit="0deg 60deg 50deg"
        disable-tap
        camera-controls
        disable-zoom
        auto-rotate
        touch-action="pan-y"
        @wheel.stop="preventScroll"
        @touchmove.stop="preventScroll"
        max-camera-orbit="60deg"></model-viewer>
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

    <section class="modal" v-if="modal">
      <div class="overlay"></div>
      <div class="modal-wrapper">
        <img src="../assets/cancel.svg" class="cancel" @click="modal = false">

        <div class="links">
          <a class="link" href="https://www.ozon.ru/">Ozon</a>
          <a class="link" href="https://www.wildberries.ru/">Wildberries</a>
          <a class="link" href="https://www.wildberries.ru/">Маркет</a>
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
      startY: 0,
      modal: false,
      modelSrc: null,
    };
  },

  async mounted() {
    const modelPath = await import('@/assets/test.glb');
    this.modelSrc = modelPath.default;

    this.showBannerAnimation();

    this.wheelHandler = this.handleWheel.bind(this);
    this.touchHandler = this.handleTouch.bind(this);
    
    window.addEventListener('wheel', this.wheelHandler);
    window.addEventListener('touchmove', this.touchHandler);

  },

  beforeUnmount() {
    window.removeEventListener('wheel', this.wheelHandler);
    window.removeEventListener('touchmove', this.touchHandler);
  },

  methods: {
    preventScroll(event) {
      event.stopPropagation();
    },
    handleWheel(event) {
      if (event.deltaY > 0) {
        this.hideBannerAnimation();
        setTimeout(() => {
          this.$router.push('/components');
        }, 800);
      } else {
        this.showBannerAnimation();
      }
    },

    handleTouch(event) {
      if (event.touches.length > 0) {
        const currentY = event.touches[0].clientY;
        if (this.startY === 0) {
          this.startY = currentY; // Фиксируем начальную точку свайпа
        }

        if (this.startY - currentY > 50) { // Прокрутка вниз (свайп вверх)
          this.hideBannerAnimation();
          setTimeout(() => {
            this.$router.push('/components');
          }, 800);
        } else if (currentY - this.startY > 50) { // Прокрутка вверх (свайп вниз)
          this.showBannerAnimation();
        }
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

    hideBannerAnimation() {
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
.blob{
  position: absolute;
  right: 0;
  top: 0;
  scale: 1.2;
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
  bottom: -25vh;
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
  font-size: 20px;
  width: 46px;
  aspect-ratio: 1;
  border-radius: 23px;
  padding: 0;
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
  width: 400px;
  height: 60px;
  color: white;
  font-size: 25px;
  border: none;
  border-radius: 30px;
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
  padding: 0 30px;
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
  width: 80%;
  aspect-ratio: 1;
  object-fit: contain;
  scale: 0;
  opacity: 0;
}

.model{
  scale: 0;
  opacity: 0;
  position: absolute;
  z-index: 2;
  height: 100vh;
  width: 30vw;
  left: 30%;
}
.overlay{
  height: 100vh;
  width: 100vw;
  background-color: #00000061;
}
.modal{
  position: absolute;
  top: 0;
  z-index: 10;
}

.modal-wrapper{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 450px;
  height: 300px;
  padding: 25px;
  position: absolute;
  background-color: #fffdef56;
  border-radius: 20px;
  border: 1px solid #FFFDEF;
  backdrop-filter: blur(20px);
}

.cancel{
  width: 20px;
  aspect-ratio: 1;
  cursor: pointer;
}

.links{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 90%;
  gap: 12px;
}

.link:hover{
  filter: brightness(90%);
}

.link{
  background-color: #FFFDEF;
  width: 350px;
  height: 46px;
  color: #262B2D;
  font-size: 20px;
  text-align: center;
  border: none;
  border-radius: 23px;
  font-family: 'Montserrat Alternates';
  font-weight: 500;
  transition: all .2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) and (max-width: 1023px) {
  .buy{
    background-color: #8F8F76;
    width: 250px;
    height: 46px;
    color: white;
    font-size: 20px;
    border: none;
    border-radius: 23px;
    font-family: 'Montserrat Alternates';
    transition: all .2s ease;
    margin-bottom: 50px;
  }
  .buy:hover{
    cursor: pointer;
    background-color: #71715d;
  }
  .text-header h1{
    color: #262B2D;
    font-size: 3vw;
    font-weight: 500;
    position: absolute;
    right: 150px;
    top: 80px;
    scale: 0;
    opacity: 0;
  }
}
</style>
