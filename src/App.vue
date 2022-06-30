<template>
  <div id="app">
    <transition name="slide" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Home from './views/Home.vue'
import gsap from 'gsap'
  export default {
    components: {
      Home
    },
    
  }
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  #app {
    overflow: hidden;
    position: relative;
    color: #373737;
    height: 100vh;
    width: 100%;
    background-color: #BEBEBE;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .slide-enter-active, .slide-leave-active {
    transition: transform 1s;
  }

  .slide-enter, .slide-leave-to {
    transform: translateX(-100%);
  }

  .slide-enter-to, .slide-leave {
    transform: translateX(0);
  }
</style>
