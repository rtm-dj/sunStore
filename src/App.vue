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
  /* width: 100vw; */
  /* overflow: hidden; */
}
* {
  -webkit-tap-highlight-color: transparent;
  -webkit-appearance: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
</style>
