/* eslint-disable no-unused-vars */

import Vue from 'vue'
import './scss/style.scss'

// translation Vue-i18n

import VueI18n from 'vue-i18n'
import Locale from './vue-i18n-locales.js'

Vue.use(VueI18n)

Vue.component('application', require('./components/Application.vue').default)
// Vue.component('home', require('./components/sections/Home.vue').default)
// Vue.component('about', require('./components/sections/About.vue').default)
// Vue.component('work', require('./components/sections/Work.vue'))

const lang = document.documentElement.lang

const i18n = new VueI18n({
  locale: lang,
  messages: Locale
})

const app = new Vue({
  el: '#app',
  i18n
})
