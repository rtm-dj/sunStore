<template>
    <section class="components">
        <div class="head">
          <BurgerMenu id="burger"/>
          <HeaderText :title="'компоненты'"/>
        </div>
        <div class="components-wrapper">
          <div class="components-left-part" v-if="slider == 1"> 
              <img :src="webComponents1" alt="" ref="block_third">
              <LabelText :title="'травы, согретые солнцем и напоенные дождем, передают свою энергию'" id="labelText1"/>
              <LabelText :title="'aктивный отдых и натуральный компоненты идут рука об руку'" id="labelText2"/>
          </div>
          <div class="components-left-part" v-if="slider == 2">
              <img :src="webComponents2" alt="" ref="block_third">
              <LabelText :title="'репеленты не всегда могут помочь, в этом случае можно прибегнуть к помощи крема после укусов насекомых'" id="labelText3"/>
          </div>
          <div class="components-left-part" v-if="slider == 3">
              <img :src="webComponents3" alt="" ref="block_third">
              <LabelText :title="'один из негативных моментов насекомые - комары, слепни, мошки и другие'" id="labelText4"/>
          </div>
          <div class="components-right-part">
              <h1 v-if="slider == 1" ref="block_first">уменьшает зуд<br> и раздражение, <br> снижает <br> отечность</h1>
              <h1 v-if="slider == 2" ref="block_first">обладает<br>действием<br>против<br>воспаления</h1>
              <h1 v-if="slider == 3" ref="block_first">оказывают<br>регенерирующее<br>действие на<br>поврежденные клетки</h1>

              <div class="sliderNavigation">
                <div class="sliderArrow" @click="slider != 1 ? slider-- : slider = 3">
                  <img src="../assets/sliderArrowLeft.svg" alt="">
                </div>
                <div class="counter">{{ slider + '/3' }}</div>
                <div class="sliderArrow" @click="slider != 3 ? slider++ : slider = 1">
                  <img src="../assets/sliderArrowRight.svg" alt="">
                </div>
              </div>
          </div>
          <img style="display: none;" src="../assets/curvedText_2.svg" alt="" class="curvedTextComponents">
        </div>

        <div class="mobile-components">
          <img :src="mobComponents1" style="width: 100%;" alt="">
          <img :src="mobComponents2" style="width: 100%;" alt="">
          <img :src="mobComponents3" style="width: 100%;" alt="">
        </div>
    </section>
</template>

<script>
import webComponents1 from '../assets/web-components1.svg';
import webComponents2 from '../assets/web-components2.svg';
import webComponents3 from '../assets/web-components3.svg';

import mobComponents1 from '../assets/mob-components1.svg';
import mobComponents2 from '../assets/mob-components2.svg';
import mobComponents3 from '../assets/mob-components3.svg';

import HeaderText from "../components/HeaderText.vue";
import LabelText from "../components/LabelText.vue";
export default {
    data() {
      return {
        startY: 0,
        slider: 1,

        webComponents1,
        webComponents2,
        webComponents3,
        mobComponents1,
        mobComponents2,
        mobComponents3,
      };
    },
    mounted() {
      [webComponents1, webComponents2, webComponents3,  mobComponents1, mobComponents2, mobComponents3].forEach(src => {
        const img = new Image();
        img.src = src;
      });
    },

    watch: {
      slider() {
        this.hideComponentsAnimation();
        setTimeout(() => {
          this.showComponentsAnimation();
        }, 200);
        
      },
    },

    mounted() {
      this.showComponentsAnimation();

      // this.wheelHandler = this.handleWheel.bind(this);
      // this.touchHandler = this.handleTouch.bind(this);
      
      // window.addEventListener('wheel', this.wheelHandler);
      // window.addEventListener('touchmove', this.touchHandler);
    },

    beforeUnmount() {
      window.removeEventListener('wheel', this.wheelHandler);
      window.removeEventListener('touchmove', this.touchHandler);
    },
    
    components: { HeaderText, LabelText },
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

      handleWheel(event) {
        if (event.deltaY < 0) {
          this.hideComponentsAnimation();
          setTimeout(() => {
            this.$router.push('/');
          }, 800);
        } else {
          this.showComponentsAnimation();
        }
      },

      handleTouch(event) {
        if (event.touches.length > 0) {
          const currentY = event.touches[0].clientY;
          if (this.startY === 0) {
            this.startY = currentY;
          }

          if (this.startY - currentY < 50) {
            this.hideComponentsAnimation();
            setTimeout(() => {
              this.$router.push('/');
            }, 800);
          } else if (currentY - this.startY < 50) {
            this.showComponentsAnimation();
          }
        }
      },
    }
}
</script>

<style scoped>
*{
  /* transition: all .7s cubic-bezier(0.560, 1.555, 0.305, 0.940); */
  transition: all .5s cubic-bezier(0.560, 1.555, 0.305, 0.940);
}
#burger{
  display: none;
}
.mobile-components{
  display: none;
}
.block-show{
    scale: 1 !important;
    opacity: 1 !important;
}
.components{
  padding: 56px;
  padding-right: 150px;
}

.components-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
  height: 80vh;
  margin-top: -20px;
}
.components-right-part{
  z-index: 5;
}

.components-right-part h1{
  color: #262B2D;
  font-size: 70px;
  font-weight: 500;
  text-align: right;
  opacity: 0;
}
.components-left-part img{
  width: 100%;
  scale: 1.3 !important;
  opacity: 0;
}
.components-left-part{
  position: relative;
  margin-left: 250px;
}

.curvedTextComponents{
  height: 120%;
  position: absolute;
  transform: translateX(70%);
}
.sliderNavigation{
  display: flex;
  height: 46px;
  align-items: center;
  justify-content: end;
}
.sliderArrow{
  height: 46px;
  aspect-ratio: 1;
  border-radius: 23px;
  border: solid 1px #262B2D;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sliderArrow:hover{
  cursor: pointer;
  background-color: #F0EDE0;
}
.counter{
  width: 70px;
  text-align: center;
}

#labelText1{
  position: absolute;
  top: 40px;
  right: 80px;
}
#labelText2{
  position: absolute;
  bottom: 100px;
  right: -30px;
}
#labelText3{
  position: absolute;
  top: -90px;
  right: -100px;
}
#labelText4{
  position: absolute;
  top: -15px;
  right: -120px;
}

@media (min-width: 768px) and (max-width: 1800px){
  .components{
    padding: 56px;
  }
  .components-left-part{
    position: relative;
    margin-left: 40px;
  }
  .components-left-part img{
    width: 80%;
    scale: 1 !important;
    opacity: 0;
  }
  .components-right-part h1{
    color: #262B2D;
    font-size: 35px;
    width: 300px;
    font-weight: 500;
    text-align: right;
    opacity: 0;
    scale: 0;
  }
  
  #labelText1{
    top: 60px;
    right: 150px;
  }
  #labelText2{
    bottom: 100px;
    right: 50px;
  }
  #labelText3{
    top: 10px;
    right: 40px;
  }
  #labelText4{
    top: 50px;
    right: 10px;
  }
}
@media (max-width: 768px){
  #burger{
    display: block;
  }
  .mobile-components{
    display: block;
  }
  .components-wrapper{
    display: none;
  }
  .components{
    padding: 12px;
    padding-top: 54px;
    overflow-x: hidden;
  }
  .head{
    display: flex;
    align-items: center;
    gap: 12px;
    /* position: fixed; */
    background-color: #FFFDEF;
  }
}
</style>