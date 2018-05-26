<template>
    <div class="hero-head">
        <header class="navbar">
            <div class="navbar-brands">
                <a href="" class="navbar-item"><img src="/images/svg/logo.svg" alt="logo damien" /></a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-end">
                    <a href="" class="navbar-item">{{ $t('menu[\'accueil\']') }}</a>
                    <a href="" class="navbar-item">{{ $t('menu[\'a propos\']') }}</a>
                    <a href="" class="navbar-item">{{ $t('menu[\'portfolio\']') }}</a>
                </div>
                <div class="navbar-end">
                    <a href="" class="navbar-item" @click="switchLang('fr')">Fr</a>
                    <a href="" class="navbar-item" @click="switchLang('en')">En</a>
                    <a href="" class="navbar-item" @click="switchLang('ja')">Ja</a>
                </div>
            </div>
        </header>
    </div>
    
</template>

<script>
    export default {
        data() {
            
        },
        methods: {
            swithLang(language) {
                const html = document.documentElement
                html.setAttribute('lang','language')
            }
        }
    }
</script>

<style lang="sass" scoped>
    .navbar
        padding: 10px
        .navbar-menu
            text-transform: uppercase
            font-weight: bold
</style>

