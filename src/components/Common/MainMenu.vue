<template>
    <nav class="navbar hass-background-transparent has-padding-y-1 has-no-margin">
        <div class="container has-padding-x-1">
            <div class="navbar-brand">
                <a href="#" class="navbar-item has-no-padding is-logo">
                    <img src="/images/svg/logo/logo.svg">
                </a>
                <div class="navbar-item has-text-weight-bold">Damien <span class="has-text-corail">.</span></div>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a href="#" class="navbar-item">{{ $t('menu[\'accueil\']') }}</a>
                    <a href="#" class="navbar-item">{{ $t('menu[\'a propos\']') }}</a>
                    <a href="#" class="navbar-item">{{ $t('menu[\'portfolio\']') }}</a>
                    <a href="#" class="navbar-item">{{ $t('menu[\'travel\']') }}</a>
                </div>
                <div class="navbar-end lang">
                    <a class="navbar-item" @click="switchLang('fr')">Français</a>
                    <a class="navbar-item" @click="switchLang('en')">English</a>
                    <a class="navbar-item" @click="switchLang('ja')">日本語</a>
                    <!-- <span class="navbar-item">
                        <a href="#" class="button has-no-border has-background-corail">{{ $t('menu[\'contact\']') }}</a>
                    </span> -->
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
               
            }
        },
        methods: {
            switchLang(language) {
                const html = document.documentElement
                html.setAttribute('lang', language)
            }
        }
    }
</script>