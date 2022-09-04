export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  srcDir: 'src/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'coodesh-investty-credit',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/axios'],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'https://api.beta.mejorconsalud.com/wp-json/mc/v2',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
