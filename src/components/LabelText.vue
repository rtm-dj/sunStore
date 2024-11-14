<template>
    <p class="subtitle" ref="container">{{ title || 'Sample text' }}</p>
</template>

<script>
export default {
    props: ['title'],
    mounted() {
        setTimeout(() => {
            this.$refs.container.classList.add('container-show');
        }, 100);
    },
    beforeUnmount() {
        this.$refs.container.classList.remove('container-show');
    },
}
</script>

<style scoped>
.container-show{
    scale: 1 !important;
    opacity: 1 !important;
}

.subtitle:hover{
    scale: 1.1!important;
}
.subtitle{
  border: 1px solid #8F8F76;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  font-size: 15px;
  text-align: center;
  font-family: 'Montserrat Alternates';
  font-weight: 500;
  padding: 8px 13px;
  max-width: 330px;
  scale: 0;
  transition: all .7s cubic-bezier(0.560, 1.555, 0.305, 0.940);
}
@media (min-width: 768px) and (max-width: 1800px){
    .subtitle{
        border: 1px solid #8F8F76;
        backdrop-filter: blur(10px);
        border-radius: 20px;
        font-size: 12px;
        text-align: center;
        font-family: 'Montserrat Alternates';
        font-weight: 500;
        padding: 8px 13px;
        max-width: 300px;
        scale: 0;
        transition: all .7s cubic-bezier(0.560, 1.555, 0.305, 0.940);
    }
}
</style>