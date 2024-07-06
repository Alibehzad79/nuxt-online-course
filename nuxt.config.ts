// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@primevue/nuxt-module',
    "@nuxt/image",
  ],
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  primevue: {
    usePrimeVue: true,
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: '.dark-mode',
        }
      }
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})