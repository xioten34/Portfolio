<template>
    <div class="container has-margin-y-5">
        <div class="columns">
            <div class="column has-text-centered is-5 is-offset-1">
                <img class="img-face" src="/images/svg/element/portrait.svg" />
            </div>
            <div class="column is-4 is-mobile is-flex">
                <section class="has-fullheight is-align-center">
                    <div class="is-main-title">
                        <h1 class="title is-size-1 is-uppercase has-text-weight-bold">
                            Damien<span class="has-text-corail">.</span>
                        </h1>
                        <h2 class="subtitle is-size-3 has-text-weight-light has-text-corail">
                            Thinking, Loving & Making<br>Webdesign
                        </h2>
                    </div>
                </section>
            </div>
            <div class="column is-1 is-offset-1 is-flex">
                <section class="has-fullheight is-align-center has-text-corail">
                    <p class="is-icon-list">
                        <span>social media —</span>
                        <fa-icon class="has-no-margin-top" :icon="['fab', 'instagram']" />
                        <fa-icon :icon="['fab', 'linkedin']" />
                        <fa-icon :icon="['fab', 'github']" />
                    </p>
                </section>
            </div>
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
                max-width: 90%
                top: 70px
                left: 20%
                transition: all 0.2s
                z-index: 5
                @media only screen and (max-width: 650px)
                    max-width: 250px
                @media only screen and (max-width: 430px)
                    max-width: 200px
                @media only (min-width: 650px) and (max-height: 690px)
                    max-width: 90%

</style>