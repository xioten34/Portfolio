<template>
    <div class="container has-margin-y-12">
        <div class="columns">
            <div class="column has-text-centered is-5 is-offset-1">
                <img class="img-face" src="/images/svg/element/portrait.svg" />
            </div>
            <div class="column is-3 is-mobile is-offset-1"></div>
            <div class="column is-1 is-offset-1"></div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>

    .container
        .img
            &-face
                height: auto
                max-width: 400px
                top: 70px
                left: 20%
                transition: all 0.2s
                z-index: 5
                @media only screen and (max-width: 650px)
                    max-width: 250px
                @media only screen and (max-width: 430px)
                    max-width: 200px
                @media only (min-width: 650px) and (max-height: 690px)
                    max-width: 320px

</style>