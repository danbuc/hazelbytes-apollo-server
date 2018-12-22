import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import de from 'vuetify/es5/locale/de'
import colors from 'vuetify/es5/util/colors'
import '@mdi/font/scss/materialdesignicons.scss'

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
    icons: {
        'steam': 'mdi-steam-box',
        'windows': 'mdi-windows',
        'xbox': 'mdi-xbox',
        'playstation': 'mdi-playstation',
        'switch': 'mdi-nintendo-switch',
        'classic': 'icon-controller-classic',
        'origin': 'mdi-origin',
        'unity': 'mdi-unity',
        'unreal': 'mdi-unreal',
        'twitch': 'mdi-twitch',
        'twitter': 'mdi-twitter',
        'slack': 'mdi-slack',
        'discord': 'mdi-discord',
        'instagram': 'mdi-instagram',
        'youtube': 'mdi-youtube',
        'patreon': 'mdi-patreon',
        'facebook': 'mdi-facebook-box',
        'github': 'mdi-github-box',
        'gog': 'icon-gog',
        'battlenet': 'icon-battlenet',
        'uplay': 'icon-ubisoft',
        'vr': 'mdi-virtual-reality',
        'html': 'mdi-language-html5',
        'js': 'mdi-language-javascript',
        'css': 'mdi-language-css3',
        'csharp': 'mdi-language-csharp',
        'cpp': 'mdi-language-cpp'
    },
    lang: {
        locales: { de },
        current: 'de'
    }
})