<template>
    <nav class="navbar is-background-transparent has-no-margin">
        <div class="container has-padding-x-1 has-padding-y-1">
            <div class="navbar-brand has-no-margin">
                <a href="#" class="navbar-item has-no-padding has-padding-right-1">
                    <img src="/images/svg/logo/logo_white.svg" id="mem-logo">
                </a>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div class="navbar-menu">
                <div class="navbar-start">
                    <a href="" class="navbar-item">{{ $t('menu[\'accueil\']') }}</a>
                    <a href="" class="navbar-item">{{ $t('menu[\'a propos\']') }}</a>
                    <a href="" class="navbar-item">{{ $t('menu[\'portfolio\']') }}</a>
                    <a href="" class="navbar-item">{{ $t('menu[\'travel\']') }}</a>
                    <a href="" class="navbar-item">{{ $t('menu[\'contact\']') }}</a>
                </div>
                <div class="navbar-end lang">
                    <a href="" class="navbar-item" @click="switchLang('fr')">Fr</a>
                    <a href="" class="navbar-item" @click="switchLang('en')">En</a>
                    <a href="" class="navbar-item" @click="switchLang('ja')">Ja</a>
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
            swithLang(language) {
                const html = document.documentElement
                html.setAttribute('lang','language')
            }
        }
    }
</script>