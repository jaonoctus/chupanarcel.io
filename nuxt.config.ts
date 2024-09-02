// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'Chupa, Narcélio!',
      script:  [
        {
          src: 'https://kit.fontawesome.com/2f0682036c.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
