<template>
    <section class="hero">
        <div class="columns">
            <div class="column is-7-desktop is-8-tablet is-10-mobile">
                <img class="img-back" src="/images/svg/element/circle_test.svg" alt="circle gradient">
            </div>
        </div>
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
            // position: fixed
            z-index: 5
        .img
            /* &-back
                top: 0
                left: 0
                max-width: 55%
                @media only (min-width: 600px) and (max-width: 1024px)
                    max-width: 100%
                    top: -200px
                    left: -100px
                @media only screen and (max-width: 600px)
                    max-width: 120%
                    top: -100px
                    left: -150px
                @media only screen and (max-width: 320px)
                    max-width: 140% */
            &-face
                position: fixed
                height: auto
                max-width: 400px
                top: 70px
                left: 20%
                transition: all 0.2s
                @media only screen and (max-width: 1080px)
                    left: 10%
                @media only screen and (max-width: 650px)
                    left: 10%
                    max-width: 250px
                @media only screen and (max-width: 430px)
                    left: 5%
                    max-width: 200px
</style>