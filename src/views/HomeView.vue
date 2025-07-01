<template>
  <div class="page">
    <Modal :isOpen="modal" @close="modal = false"></Modal>
    <section class="banner">
      <div class="left-part">
        <div class="language">
          <button class="lang" @click="language == 'ru' ? language = 'en' : language = 'ru'">{{ language }}</button>
        </div>
        <img src="../assets/logo.png" alt="" class="logotype" ref="block_first">
        <div class="bottom-action" ref="block_third">
          <span class="copyright">2025 © кладовая солнца</span>
          <button class="buy" @click="modal = true">Купить</button>
        </div>

        <BurgerMenu/>
        
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
          <h1 ref="block_second">быстро<br>снимает<br>воспаление,<br>отёк, зуд и<br>раздражение.</h1>
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
      startY: 0,
      modal: false,
      modelSrc: null,
    };
  },

  async mounted() {
    const modelPath = await import('@/assets/test.glb');
    this.modelSrc = modelPath.default;

    this.showBannerAnimation();

    // this.wheelHandler = this.handleWheel.bind(this);
    // this.touchHandler = this.handleTouch.bind(this);
    
    // window.addEventListener('wheel', this.wheelHandler);
    // window.addEventListener('touchmove', this.touchHandler);

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
          this.startY = currentY;
        }

        if (this.startY - currentY > 50) { 
          this.hideBannerAnimation();
          setTimeout(() => {
            this.$router.push('/components');
          }, 800);
        } else if (currentY - this.startY > 50) { 
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
  transition: all .5s cubic-bezier(0.560, 1.555, 0.305, 0.940);
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

@media (max-width: 768px){
  .banner{
    display: block;
    position: relative;
    height: 100vh;
    overflow: hidden;
  }
  .left-part{
    display: flex;
    flex-direction: row-reverse;
    gap: 50px;
    justify-content: center;
    align-items: center;
    height: fit-content;
    width: 100%;
    padding: 30px 0;
    border-bottom: solid 1px #8F8F76;
  }
  .logotype{
    width: 30%;
    aspect-ratio: 1;
    object-fit: contain;
    scale: 0;
    opacity: 0;
  }
  .language{
    width: fit-content;
  }
  .bottom-action{
    display: none;
  }
  .text-header{
    position: absolute;
    right: 20px;
    top: 120px;
    width: 500px;
    text-align: end;
  }
  .text-header h1{
    color: #262B2D;
    font-size: 20px;
    font-weight: 500;
    position: absolute;
    right: 0;
    top: 80px;
    scale: 0;
    opacity: 0;
  }
  .blob{
    position: absolute;
    left: 90px;
    top: -150px;
    scale: 0.35 !important;
    opacity: 0;
  }
  .right-part{
    height: 100%;
    padding-top: 80px;
  }
  .model{
    scale: 0;
    opacity: 0;
    position: absolute;
    z-index: 2;
    height: 50%;
    width: 100%;
    left: 0;
  }
  .scrolldown{
    display: none;
  }
  .bottom-action{
    position: absolute;
    bottom: 20px;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    scale: 0;
    opacity: 0;
  }
  .buy{
    background-color: #8F8F76;
    width: 250px;
    height: 46px;
    color: white;
    font-size: 16px;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat Alternates';
    transition: all .2s ease;
    margin-bottom: 24px;
  }
  .copyright{
    color: #262B2D;
    font-size: 16px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .language{
    margin-top: 0;
  }
}


@media (min-width: 768px) and (max-width: 1800px) {
  .copyright{
    color: #262B2D;
    font-size: 14px;
    text-align: center;
    font-weight: 500;
    margin-bottom: 10px;
  }
  .model{
    scale: 0;
    opacity: 0;
    position: absolute;
    z-index: 2;
    height: 100vh;
    width: 40vw;
    left: 30%;
  }
  .blob{
    position: absolute;
    right: -150px;
    top: -80px;
    scale: .7 !important;
    opacity: 0;
  }
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
    font-size: 35px;
    font-weight: 500;
    position: absolute;
    right: 150px;
    top: 80px;
    scale: 0;
    opacity: 0;
  }
}
</style>
