export default {
  server: { host: "0.0.0.0", port: 3000 },
  target: 'server',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'virnect-ssr',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['swiper/dist/css/swiper.css', 'nuxt-video-player/src/assets/css/main.css'],
  buildModules: ['@nuxtjs/style-resources', '@nuxt/image'],
  styleResources: {
    less: '~/assets/css/*.scss'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: './plugins/vue-awesome-swiper.js', ssr: false, mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],
  modules: [
    ['nuxt-gsap-module'],
    ['nuxt-agile'],
    ['@nuxtjs/dayjs'],
    ['@nuxtjs/proxy'],
    ['@nuxtjs/axios'],
    // Doc: https://http.nuxtjs.org
    [
      "@nuxtjs/i18n",
      {
        //서버사이드랜더링 한번 다시쭉살펴보기  seo:true,를 여기에다 하는게 맞는건지?
        seo: true,
        //prefix_except_default <= 기존 no_prefix로바꾸고 호출문  setLocale(locale) 이거구현하니까 원하는모습나옴 대박
        strategy: "no_prefix",
        defaultLocale: "ko",
        lazy: true,
        langDir: "lang/",
        locales: [
          {
            code: "en",
            iso: "en",
            name: "English",
            file: "en/index.js"
          },
          {
            code: "ko",
            iso: "ko",
            name: "korean",
            file: "ko/index.js"
          }
        ]
      }

    ],

  ],
  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://13.209.200.75:8080',
      credential: true
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      "gsap"
    ]
  }
}
