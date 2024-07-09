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
    'nuxt-aos',
  ],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: "/fovIcon.jpg" }
      ]
    }
  },
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  primevue: {
    usePrimeVue: true,
    autoImport: true,
    options: {
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: '.dark-mode',
          cssLayer: {
            name: 'primevue',
            order: 'tailwind-base, primevue, tailwind-utilities'
          }
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