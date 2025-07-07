<template>
  <section class="modal" v-if="isOpen">
    <div 
      class="modal-wrapper" 
      ref="block_first"
      :class="{ 'block-show': blocksVisible[0] }"
    >
      <div class="modal-content">
        <svg 
        @click="close" 
        class="cancel" 
        width="14" 
        height="14" 
        viewBox="0 0 14 14" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.46 7L14 12.54V14H12.54L7 8.46L1.46 14H0V12.54L5.54 7L0 1.46V0H1.46L7 5.54L12.54 0H14V1.46L8.46 7Z" fill="#262B2D"/>
        </svg>
        <p class="label">Купить на маркетплэйсах:</p>
      </div>
      <div class="links">
        <a 
          ref="block_second" 
          class="link" 
          href="https://www.ozon.ru/product/krem-gel-balzam-posle-ukusov-nasekomyh-50-ml-2074229992/"
          :class="{ 'block-show': blocksVisible[1] }"
          target="_blank"
        >Ozon</a>
        <!-- <a 
          ref="block_third" 
          class="link" 
          href="https://www.wildberries.ru/"
          :class="{ 'block-show': blocksVisible[2] }"
        >WB</a>
        <a 
          ref="block_fourth" 
          class="link" 
          href="https://www.wildberries.ru/"
          :class="{ 'block-show': blocksVisible[3] }"
        >Я.Маркет</a> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close']);

const block_first = ref(null);
const block_second = ref(null);
const block_third = ref(null);
const block_fourth = ref(null);

const blocksVisible = ref([false, false, false, false]);

const close = () => {
  emit('close');
};

const showComponentsAnimation = () => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < blocksVisible.value.length) {
      blocksVisible.value[index] = true;
      index++;
    } else {
      clearInterval(interval);
    }
  }, 50);
};

const hideComponentsAnimation = () => {
  blocksVisible.value = [false, false, false, false];
};

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    showComponentsAnimation();
  } else {
    hideComponentsAnimation();
  }
});
</script>


<style scoped>
.block-show{
    scale: 1 !important;
    opacity: 1 !important;
}
.modal{
  position: absolute;
  top: 0;
  z-index: 10;
}

.modal-wrapper{
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
  gap: 40px;
}

.cancel{
  width: 20px;
  aspect-ratio: 1;
  cursor: pointer;
  position: absolute;
  left: 35vw;
}

.label{
  color: #262B2D;
  font-size: 20px;
  margin: 0;
  width: fit-content;
  border-radius: 20px;
  font-weight: 500;
  padding: 10px 20px;
  background-color: #F0EDE0;
}

.links{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.link:hover{
  filter: brightness(90%);
}

.link{
  background-color: #8f8f76d4;
  width: 130px;
  height: 114px;
  color: #FFFFFF;
  font-size: 20px;
  text-align: center;
  border: none;
  border-radius: 30px;
  font-family: 'Montserrat Alternates';
  font-weight: 500;
  transition: all .2s ease;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  scale: 0;
}
.modal-content{
  margin-top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
@media (max-width: 768px){
  .modal-content{
    margin-top: -20%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .modal-wrapper{
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
    gap: 40px;
  }
  .link{
    background-color: #8f8f76d4;
    width: 130px;
    height: 114px;
    color: #FFFFFF;
    font-size: 20px;
    text-align: center;
    border: none;
    border-radius: 30px;
    font-family: 'Montserrat Alternates';
    font-weight: 500;
    transition: all .2s ease;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    scale: 0;
  }
  .links{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }
  .cancel{
    width: 20px;
    aspect-ratio: 1;
    cursor: pointer;
    position: absolute;
    top: -5vh;
    left: 20px;
  }
}
</style>