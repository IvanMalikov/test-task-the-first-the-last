<template>
    <div class="circle">

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.circle {
    z-index: 1;
    position: absolute;
    margin: auto;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    border-radius: 100%;
    width: 578px;
    height: 578px;
    background-color: #FFCB46;
    filter: blur(76px);
}

@media (max-width: 1050px) {
    .circle {
        width: 482px;
        height: 482px;
    }
}

@media (max-width: 375px) {
    .circle {
        width: 294px;
        height: 294px;
        filter: blur(16.3568px);
    }
}
</style>