// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: [
    '@/assets/css/reset.css',
    '@/assets/css/plugins.css',
    '@/assets/css/dashboard-style.css',
    '@/assets/css/style.css',
    '@/assets/css/color.css',
    
  ],
  components: [
    {
      path: '~/components',
      pathPrefix: true,
      extensions: ['.vue'],
    },
  ],
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',      
      // script: [{ src: 'js/scripts.js' }, { src: 'js/plugins.js' }, { src: 'js/jquery.min.js' }, , { src: 'js/map-add.js' }],
    }
  },
  modules: [
    // ...
    '@pinia/nuxt',
  ],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  experimental: {
    componentIslands: true
  },
  
})
