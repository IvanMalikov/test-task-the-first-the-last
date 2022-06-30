<template>
    <marquee-text reverse :duration="20">
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
        padding-bottom: 60px;
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
        -webkit-transform: skewY(150deg);
        -moz-transform: skewY(150deg);
        -ms-transform: skewY(150deg);
        -o-transform: skewY(150deg);
        transform: skewY(150deg);
    }

    .marquee-text-text {
        color: transparent;
        margin-right: 10px;
        -webkit-text-stroke: 1px #373737;
    }

    @media (max-width: 1180px) {
        .marquee-text-wrap {
            -webkit-transform: skewY(146deg);
            -moz-transform: skewY(146deg);
            -ms-transform: skewY(146deg);
            -o-transform: skewY(146deg);
            transform: skewY(146deg);
        }
    }

    @media (max-width: 945px) {
        .marquee-text-wrap {
             -webkit-transform: skewY(140deg);
            -moz-transform: skewY(140deg);
            -ms-transform: skewY(140deg);
            -o-transform: skewY(140deg);
            transform: skewY(140deg);
        }
    }

    @media (max-width: 768px) {
        .marquee-text-wrap {
            -webkit-transform: skewY(134deg);
            -moz-transform: skewY(134deg);
            -ms-transform: skewY(134deg);
            -o-transform: skewY(134deg);
            transform: skewY(134deg);
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