export default {

  googleAnalytics: {
    id: 'UA-144503294-1',
  },

  yandexMetrika: {
    id: '54576715',
    clickmap: true,
    trackLinks: true,
    accurateTrackBounce: true,
    webvisor: true,
    ecommerce: 'dataLayer',
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'o2-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src:"https://api-maps.yandex.ru/2.1/?apikey=dcb98938-5915-425a-96d8-becf3fab4359&lang=ru_RU" }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/baseComponents.js',
    {src: '~/plugins/vuelidate'},
    {src: '~/plugins/popup'},
    {src: '~/plugins/route'},
    {src: '~/plugins/directives'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/google-fonts'
  ],

  googleFonts: {
    families: {
      'Exo 2': true,
      'IBM Plex Serif': true,
      'Montserrat': {
        wght: [300,400,500,700]
      }
    }
  },

  gsap: {
    /* module options */
    extraPlugins: {
      scrollTrigger: true,
      scrollTo: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyCIWIwu5z3tyXKJGkdOYerXKqhdgtz6ytg",
          authDomain: "o2-fitness.firebaseapp.com",
          databaseURL: "https://o2-fitness-default-rtdb.firebaseio.com",
          projectId: "o2-fitness",
          storageBucket: "o2-fitness.appspot.com",
          messagingSenderId: "298077419827",
          appId: "1:298077419827:web:506f934ce39d66d8186646",
          measurementId: "G-TDLK6QRFVZ"
        },
        services: {
          auth: true // Just as example. Can be any other service.
        }
      }
    ],
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true
  }
}
