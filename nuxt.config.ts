// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false, // если тебе не нужна серверная отрисовка
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:4000', // Это адрес твоего NestJS сервера
    },
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils',
    '@nuxtjs/tailwindcss',
    'v-gsap-nuxt'
  ]
})