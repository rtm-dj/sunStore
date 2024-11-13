<template>
    <section class="components">
        <HeaderText :title="'компоненты'"/>
        <div class="components-wrapper">
        <div class="components-left-part">
            <img src="../assets/components1.svg" alt="" ref="block_third">
            <LabelText :title="'травы, согретые солнцем и напоенные дождем, передают свою энергию'" style="position: absolute; top: 30px; right: 60px;"/>
            <LabelText :title="'aктивный отдых и натуральный компоненты идут рука об руку'" style="position: absolute; bottom: 60px; right: -80px;"/>
        </div>
        <div class="components-right-part">
            <h1 ref="block_first">уменьшает зуд и раздражение, <br> снижает <br> отечность</h1>
        </div>
        <img ref="block_second" src="../assets/curvedText_2.svg" alt="" class="curvedTextComponents">
        </div>
    </section>
</template>

<script>

import HeaderText from "../components/HeaderText.vue";
import LabelText from "../components/LabelText.vue";
export default {
    data() {
      return {
        startY: 0,
      };
    },

    mounted() {
      this.showComponentsAnimation();

      this.wheelHandler = this.handleWheel.bind(this);
      this.touchHandler = this.handleTouch.bind(this);
      
      window.addEventListener('wheel', this.wheelHandler);
      window.addEventListener('touchmove', this.touchHandler);
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
  transition: all .7s cubic-bezier(0.560, 1.555, 0.305, 0.940);
}
.block-show{
    scale: 1 !important;
    opacity: 1 !important;
}
.components{
  padding: 56px;
}

.components-wrapper{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 56px;
  margin-top: -20px;
}

.components-right-part h1{
  color: #262B2D;
  font-size: 3vw;
  font-weight: 500;
  text-align: right;
  opacity: 0;
  scale: 0;
}
.components-left-part img{
  width: 100%;
  scale: 1.2 !important;
  opacity: 0;
}
.components-left-part{
  position: relative;
  margin-left: 40px;
}

.curvedTextComponents{
  height: 120%;
  position: absolute;
  transform: translateX(50%);
  opacity: 0;
}
</style>