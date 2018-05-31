<template>
    <section class="hero">
        <img class="img-back" src="/images/svg/element/circle.svg" alt="circle gradient">
        <img class="img-face" src="/images/svg/element/portrait.svg" alt="portrait">
    </section>
    
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>
    .hero
        img
            position: fixed
            z-index: 5
        .img
            &-back
                top: -874px
                left: -612px
            &-face
                height: auto
                width: 400px
                top: 70px
                left: 350px
</style>