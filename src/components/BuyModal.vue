<template>
  <section class="modal" v-if="isOpen">
    <div class="overlay" @click.self="close"></div>
    <div 
      class="modal-wrapper" 
      ref="block_first"
      :class="{ 'block-show': blocksVisible[0] }"
    >
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
      <div class="links">
        <a 
          ref="block_second" 
          class="link" 
          href="https://www.ozon.ru/"
          :class="{ 'block-show': blocksVisible[1] }"
        >Ozon</a>
        <a 
          ref="block_third" 
          class="link" 
          href="https://www.wildberries.ru/"
          :class="{ 'block-show': blocksVisible[2] }"
        >Wildberries</a>
        <a 
          ref="block_fourth" 
          class="link" 
          href="https://www.wildberries.ru/"
          :class="{ 'block-show': blocksVisible[3] }"
        >Маркет</a>
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
  opacity: 0;
  scale: 0;
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
  opacity: 0;
  scale: 0;
}
@media (max-width: 768px){
  .modal-wrapper{
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    width: 300px;
    height: 180px;
    padding: 25px;
    position: absolute;
    background-color: #fffdef56;
    border-radius: 20px;
    border: 1px solid #FFFDEF;
    backdrop-filter: blur(20px);
  }
  .link{
    background-color: #FFFDEF;
    width: 204px;
    height: 36px;
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
}
</style>