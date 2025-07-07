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

#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background:  #8F8F76 !important;

  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 5px !important;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px  #8F8F76, 0 0 5px  #8F8F76;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
      -ms-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}

/* Remove these to get rid of the spinner */
#nprogress .spinner {
  display: none;
  position: fixed;
  z-index: 1031;
  top: 15px;
  right: 15px;
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;

  border: solid 2px transparent;
  border-top-color:  #8F8F76;
  border-left-color:  #8F8F76;
  border-radius: 50%;

  -webkit-animation: nprogress-spinner 400ms linear infinite;
          animation: nprogress-spinner 400ms linear infinite;
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative;
}

.nprogress-custom-parent #nprogress .spinner,
.nprogress-custom-parent #nprogress .bar {
  position: absolute;
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
