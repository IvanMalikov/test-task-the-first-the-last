<template>
    <img class="showreel" @mouseover="animationStart()" @mouseleave="animationEnd()" src="../assets/showreel.png" alt="">
</template>

<script>
import gsap from 'gsap'
    export default {
        data() {
            return {
                tl: gsap.timeline()
            }
        },

        mounted() {
            this.tl.to('.showreel', {
                rotation: 360,
                duration: 2,
                ease: "none",
                repeat: -1
            }).pause()
        },

        methods: {

            animationStart() {
                this.tl.resume()
            },

            animationEnd() {
                this.tl.pause()
            }

        },

    }
</script>

<style lang="scss" scoped>
    .showreel {
        position: absolute;
        bottom: 15%;
        right: 30%;
        z-index: 2;
    }

    @media (max-width: 1050px) {
        .showreel {
            bottom: 18%;
            right: 23%;
        }
    }

    @media (max-width: 900px) {
        .showreel {
            right: 19%;
        }
    }

    @media (max-width: 375px) {
        .showreel {
            width: 90px;
            height: 90px;
            bottom: 25%;
            right: 15%;
        }
    }
</style>