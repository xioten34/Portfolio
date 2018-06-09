<template>
    <section class="hero">
        <div class="columns">
            <div class="column is-7-desktop is-8-tablet is-10-mobile">
                <svg id="Circle_background" data-name="Circle Background" viewBox="0 0 1190 964">
                    <defs>
                        <linearGradient id="gradient" x1="-318.57" y1="-456.68" x2="862.41" y2="697.04" gradientUnits="userSpaceOnUse">
                            <stop offset="0" stop-color="#6c00aa">
                                <animate attributeName="stop-color" values="#6c00aa; #c486b7; #6c00aa" dur="4s" repeatCount="indefinite"></animate>
                            </stop>
                            <stop offset="0.55" stop-color="#c486b7">
                                <animate attributeName="stop-color" values="#c486b7; #e8bcbc; #c486b7" dur="4s" repeatCount="indefinite"></animate>
                            </stop>
                            <stop offset="1" stop-color="#e8bcbc">
                                <animate attributeName="stop-color" values="#e8bcbc; #c486b7; #e8bcbc" dur="4s" repeatCount="indefinite"></animate>
                            </stop>
                        </linearGradient>
                    </defs>
                    <path class="circle" d="M1169.49,0H0V851.58A781.26,781.26,0,0,0,405,964c433.54,0,785-351.46,785-785A787.32,787.32,0,0,0,1169.49,0Z"/>
                </svg>
            </div>
        </div>
        <img class="img-face" src="/images/svg/element/portrait.svg" />
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="sass" scoped>

    .hero
        svg
            .circle
                fill:url(#gradient)
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