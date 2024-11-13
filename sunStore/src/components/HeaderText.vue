<template>
    <div class="title" ref="container">
        <div class="title-circle"></div>
        <p class="title-text">{{ title || 'Sample text' }}</p>
    </div>
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
    transform: translateX(0) !important;
    opacity: 1 !important;
}
.title{
  height: 46px;
  width: fit-content;
  border: 1px solid #512D38;
  border-radius: 23px;
  display: flex;
  transform: translateX(-100px);
  opacity: 0;
  transition: all .5s cubic-bezier(0.560, 1.555, 0.305, 0.940);
}

.title-circle{
  height: 46px;
  width: 46px;
  border-right: solid 1px #512D38;
  border-radius: 23px;
}

.title-text{
  font-family: 'Montserrat Alternates';
  font-weight: 500;
  border: none;
  margin: 13px 25px 13px 20px;
  font-size: 16px;
}

</style>