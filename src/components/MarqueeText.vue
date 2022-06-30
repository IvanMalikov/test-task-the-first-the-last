<template>
    <marquee-text :duration="20">
        FULL-CYCLE EVENT AGENCY FULL-CYCLE EVENT AGENCY 
    </marquee-text>
</template>

<script>
import MarqueeText from 'vue-marquee-text-component'
    export default {
        components: {
            MarqueeText
        }
    }
</script>

<style lang="scss" scoped>
    .marquee-text-wrap {
        opacity: 0.1;
        padding-top: 60px;
        height: 65px;
        position: absolute;
        margin: auto;
        right: 0;
        top: 0;
        bottom: 0;
        left: 0;
        font-size: 52px;
        line-height: 57px;
        font-family: "Grtsk";
        -webkit-transform: skewY(-30deg);
        -moz-transform: skewY(-30deg);
        -ms-transform: skewY(-30deg);
        -o-transform: skewY(-30deg);
        transform: skewY(-30deg);
    }

    .marquee-text-text {
        color: transparent;
        margin-right: 10px;
        -webkit-text-stroke: 1px #373737;
    }

    @media (max-width: 1180px) {
        .marquee-text-wrap {
            -webkit-transform: skewY(-214deg);
            -moz-transform: skewY(-214deg);
            -ms-transform: skewY(-214deg);
            -o-transform: skewY(-214deg);
            transform: skewY(-214deg);
        }
    }

    @media (max-width: 945px) {
        .marquee-text-wrap {
            -webkit-transform: skewY(-220deg);
            -moz-transform: skewY(-220deg);
            -ms-transform: skewY(-220deg);
            -o-transform: skewY(-220deg);
            transform: skewY(-220deg);
        }
    }

    @media (max-width: 768px) {
        .marquee-text-wrap {
            -webkit-transform: skewY(125deg);
            -moz-transform: skewY(125deg);
            -ms-transform: skewY(125deg);
            -o-transform: skewY(125deg);
            transform: skewY(125deg);
        }
    }

    @media (max-width: 415px) {
        .marquee-text-wrap {
            -webkit-transform: skewY(120deg);
            -moz-transform: skewY(120deg);
            -ms-transform: skewY(120deg);
            -o-transform: skewY(120deg);
            transform: skewY(120deg);
            font-size: 28px;
            line-height: 31px;
        }
    }
</style>