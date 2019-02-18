<template>
    <section>
        <modal v-show="isModalActive" :active="isModalActive" @close="isModalActive = false"></modal>
        <div class="container has-margin-top-12 has-margin-bottom-6 has-padding-left-1-tablet">
            <div class="columns">
                <div class="column is-5 is-flex">
                    <section class="has-fullheight has-padding-left-2-mobile">
                        <div>
                            <span class="has-text-weight-semibold has-text-grey-light">Portfolio<span class="has-text-corail">.</span></span>
                            <h2 class="title has-text-weight-bold has-margin-top-2">
                                Some of my work<span class="has-text-corail">.</span>
                            </h2>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        <div class="container has-padding-x-2-mobile has-padding-left-1-tablet has-margin-bottom-12">
            <div class="columns">
                <div class="column is-10 is-flex">
                    <div class="tile is-ancestor">
                        <div class="tile is-vertical is-8">
                            <div class="tile">
                                <div class="tile is-vertical is-parent">
                                    <div class="columns is-multiline is-mobile">
                                        <div class="column is-half">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                        <div class="column is-half">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                        <div class="column is-half">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                        <div class="column is-half">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                                <div class="tile is-6 is-parent">
                                    <article class="tile is-child">
                                        <figure class="image is-clipped is-square">
                                            <img class="has-background-corail" src="" alt="">
                                        </figure>
                                    </article>
                                </div>
                            </div>
                            <div class="tile">
                                <div class="tile is-vertical is-parent">
                                    <div class="columns is-multiline is-mobile">
                                        <div class="column is-half-mobile">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                        <div class="column is-half-mobile">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                        <div class="column is-half-mobile">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                        <div class="column is-half-mobile">
                                            <article class="tile is-child">
                                                <figure class="image is-clipped is-square">
                                                    <img class="has-background-corail" src="" alt="">
                                                </figure>
                                            </article>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child">
                                <figure class="image is-clipped has-fullheight">
                                    <img class="has-background-corail has-fullheight" src="" alt="">
                                </figure>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import Modal from '../Common/Modal.vue';

    export default {
        components: {
            Modal,
        },
        data() {
            return {
                isModalActive: false,
            }
        }
    }
</script>