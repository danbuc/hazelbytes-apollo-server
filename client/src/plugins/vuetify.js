import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import de from 'vuetify/es5/locale/de'
import colors from 'vuetify/es5/util/colors'
import '@mdi/font/css/materialdesignicons.css'

Vue.use(Vuetify, {
    theme: {
        primary: '#005f6a',
        secondary: '#001514',
        accent: '#607b7d',
        error: colors.red.accent4,
        warning: colors.orange.lighten1,
        info: '#c5c5c5',
        success: '#4c5b61'
    },
    customProperties: true,
    iconfont: 'mdi',
    lang: {
        locales: { de },
        current: 'de'
    },
})