<template>
    <div>
        <home />
        <about />
    </div>
</template>

<script>
    import home from './sections/Home.vue'
    import about from './sections/About.vue'

    export default {
        components: {
            home,
            about
        }
    }
</script>

