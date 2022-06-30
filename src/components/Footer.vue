<template>
    <footer class="footer">
        <router-link :to="'/who'" class="btn">who?</router-link>
    </footer>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .footer {
        z-index: 1;
        font-family: "Grtsk";
        text-align: center;
        padding-bottom: 20px;
    }

    .btn {
        text-decoration: none;
        color: #373737;
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
        background-position: 100% 100%; /*OR bottom right*/
        background-size: 100% 2px;
    }

    @media (max-width: 375px) {
        .footer {
            display: none;
        }
    }
</style>