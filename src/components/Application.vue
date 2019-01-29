<template>
    <div class="main">
        <main-menu></main-menu> 
        <home></home>
        <about></about>
        <work></work>
    </div>
</template>

<script>
    import mainMenu from './Common/MainMenu'
    import home from './sections/Home'
    import about from './sections/About'
    import work from './sections/Work'

    export default {
        components: {
            mainMenu,
            home,
            about,
            work
        }
    }
</script>

