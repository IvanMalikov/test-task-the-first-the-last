<template>
  <div class="app">
    <Header />
    <Main />
    <Footer />
    <BackgroundCircle />
    <Showreel />
    <MarqueeText />
    <MarqueeTextReverse />
    <!-- <router-view /> -->
  </div>
</template>

<script>
import MarqueeText from '../components/MarqueeText.vue'
import MarqueeTextReverse from '../components/MarqueeTextReverse.vue'
import BackgroundCircle from '../components/BackgroundCircle.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import Main from '../components/Main.vue'
import Showreel from '../components/Showreel.vue'

  export default {
    mounted() { 
      let agency = document.querySelector('.agency')
      document.addEventListener('mousemove', (e) => {
        let x = e.clientX
        let y = e.clientY
        agency.style.left = x / 10 + 'px'
        agency.style.top = y / 10 + 'px'

      })
    },
    components: {
      Header,
      Main,
      BackgroundCircle,
      Footer,
      Showreel,
      MarqueeText,
      MarqueeTextReverse
    }
  }
</script>

<style lang="scss">
@font-face {
  font-family: 'Grtsk';
  src: url('../fonts/GrtskGiga-Bold.ttf');
}

  * {
    margin: 0;
    padding: 0;
  }

  .app {
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
</style>
