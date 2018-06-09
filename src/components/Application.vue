<template>
    <div class="main">
        <layouts /> 
        <home />
        <about />
        <work />
    </div>
</template>

<script>
    import home from './sections/Home.vue'
    import about from './sections/About.vue'
    import work from './sections/Work.vue'
    // Layouts
    import layouts from './Common/Layouts.vue'

    export default {
        components: {
            layouts,
            home,
            about,
            work
        }
    }
</script>

<style lang="sass" scoped>
    .main 
        height: 100vh
        background: #fff
        .hero
            height: 100vh
    
</style>


