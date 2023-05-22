export default defineNuxtConfig({
  css: ['~/assets/stylesheets/main.css'],
  modules: ['@pinia/nuxt'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: false,
})
