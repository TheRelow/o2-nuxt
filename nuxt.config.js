export default {

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'o2fit.ru',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'yandex-verification', content: '58ad13c846585501' },
      {
        name: 'google-site-verification',
        content: 'iE64WDDZbbwHTv6RAxTTj-5RFx1a-O9NIKLmQ1jvgLM',
      },
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

  robots: {
    UserAgent: '*',
    Disallow: ['/cart', '/checkout'],
    Sitemap: 'https://npovolna.ru/sitemap.xml',
    CleanParam: 'p /',
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    'nuxt-gsap-module',
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyBuzISeyN2BNuhuiDdz_4-F8eVY8oq-ZZQ",
          authDomain: "o2-proj.firebaseapp.com",
          databaseURL: "https://o2-proj-default-rtdb.firebaseio.com",
          projectId: "o2-proj",
          storageBucket: "o2-proj.appspot.com",
          messagingSenderId: "495294938001",
          appId: "1:495294938001:web:16aa4ee5720a3e8b157830",
          measurementId: "G-0GEGKF4P9W"
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

  sitemap: {
    hostname: 'https://o2fit.ru',

    gzip: true,
    exclude: ['/admin'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
    },
  },

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
