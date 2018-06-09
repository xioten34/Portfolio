<template>
    <section class="hero">
        <div class="columns">
            <div class="column is-7-desktop is-8-tablet is-10-mobile">
                <img class="img-back" src="/images/svg/element/circle_background.svg" alt="circle gradient">
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
        .img
            &-face
                position: absolute
                height: auto
                max-width: 400px
                top: 70px
                left: 20%
                transition: all 0.2s
                z-index: 5
                @media only screen and (max-width: 968px)
                    left: 10%
                @media only screen and (min-width: 1145px)
                    left: 30%
                @media only screen and (max-width: 650px)
                    left: 10%
                    max-width: 250px
                @media only screen and (max-width: 430px)
                    left: 5%
                    max-width: 200px
                @media only (min-width: 650px) and (max-height: 690px)
                    max-width: 320px

</style>