export default defineNuxtConfig({
  css: ["~/assets/stylesheets/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
