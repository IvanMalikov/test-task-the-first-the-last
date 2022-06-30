<template>
    <main class="main">
        <div class="where btn">
            <router-link :to="'/where'">where?</router-link>
        </div>
        <div class="agency">
            <span>FULL-CYCLE EVENT AGENCY</span>
        </div>
        <div class="what btn">
            <router-link :to="'/what'">what?</router-link>
        </div>
    </main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .main {
        z-index: 2;
        font-family: "Grtsk";
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .where {
            transform: rotate(-90deg);
            a {
                text-decoration: none;
                color: #373737;
            }

            a:hover {
                color: #fff;
            }
        }

        .btn {
            display: inline-block;
            padding-bottom: 3px;
            background-image: linear-gradient(#fff, #fff);
            background-position: 0 100%;
            background-size: 0% 2px;
            background-repeat: no-repeat;
            transition:
                background-size 0.5s,
                background-position 0s 0.5s;
        }

        .btn:hover {
            color: #fff;
            background-position: 100% 100%;
            background-size: 100% 2px;
        }

        .agency {
            position: absolute;
            margin: auto;
            bottom: 0;
            top: 0;
            left: 0;
            right: 0;
            text-align: center;
            width: 1023px;
            height: 180px;
            font-size: 82px;
            line-height: 90px;
            text-align: center;
        }

        .what {
            transform: rotate(90deg);
            a {
                text-decoration: none;
                color: #373737;
            }

            a:hover {
                color: #fff;
            }
        }
    }

    @media (max-width: 1280px) {
        .main {
            .agency {
                font-size: 58px;
                line-height: 64px;
            }
        }
    }

    @media (max-width: 1050px) {
        .main {
            .agency {
                width: 568px;
                font-size: 58px;
                line-height: 64px;
            }
        }
    }

    @media (max-width: 415px) {
        .main {
            .agency {
                top: 70px;
                width: 333px !important;
                font-size: 34px;
                line-height: 37px;
            }

            .where {
                display: none;
            }

            .what {
                display: none;
            }
        }
    }
</style>