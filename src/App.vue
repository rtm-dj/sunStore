<template>
  <NavBar/>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from "@/components/NavBar.vue";
export default{
  components: { NavBar },
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
  background: #FFFDEF;
  font-family: 'Montserrat Alternates';
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
