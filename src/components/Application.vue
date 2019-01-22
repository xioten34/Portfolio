<template>
    <div class="main">
        <top-menu></top-menu> 
        <home></home>
        <about></about>
        <work></work>
    </div>
</template>

<script>
    import topMenu from './Common/TopMenu'
    import home from './sections/Home'
    import about from './sections/About'
    import work from './sections/Work'

    export default {
        components: {
            topMenu,
            home,
            about,
            work
        }
    }
</script>

<style lang="sass" scoped>

</style>


