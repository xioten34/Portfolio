<template>
    <div class="main">
        <MainMenu />
        <home />
        <about />
        <work />
    </div>
</template>

<script>
    import home from './sections/Home.vue'
    import about from './sections/About.vue'
    import work from './sections/Work.vue'
    // Layout
    import MainMenu from './Layouts/Header.vue'

    export default {
        components: {
            MainMenu,
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
    
</style>


