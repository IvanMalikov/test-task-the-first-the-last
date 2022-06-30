<template>
    <div class="wrapper">
        <h1>What?</h1>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .wrapper {
        font-family: "Grtsk";
        min-height: 100vh;
        width: 100%;
        h1 {
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
    }

    @media (max-width: 1050px) {
        .wrapper {
            h1 {
                padding-top: 122px;
                width: 512px;
                font-size: 40px;
                line-height: 50px;
            }
        }
    }
    @media (max-width: 520px) {
        .wrapper {
            h1 {
                padding-top: 122px;
                width: 300px;
                font-size: 40px;
                line-height: 50px;
            }
        }
    }
</style>