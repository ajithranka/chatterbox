import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'cb-',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    colors: {
      currentColor: 'currentColor',
      transparent: 'transparent',

      light: 'rgb(var(--cb-color-light) / <alpha-value>)',
      grey: {
        lightest: 'rgb(var(--cb-color-grey-lightest) / <alpha-value>)',
        lighter: 'rgb(var(--cb-color-grey-lighter) / <alpha-value>)',
        light: 'rgb(var(--cb-color-grey-light) / <alpha-value>)',
        DEFAULT: 'rgb(var(--cb-color-grey) / <alpha-value>)',
        dark: 'rgb(var(--cb-color-grey-dark) / <alpha-value>)',
        darker: 'rgb(var(--cb-color-grey-darker) / <alpha-value>)',
        darkest: 'rgb(var(--cb-color-grey-darkest) / <alpha-value>)',
      },
      dark: 'rgb(var(--cb-color-dark) / <alpha-value>)',

      blue: {
        light: 'rgb(var(--cb-color-blue-light) / <alpha-value>)',
        dark: 'rgb(var(--cb-color-blue-dark) / <alpha-value>)',
      },
      pink: {
        light: 'rgb(var(--cb-color-pink-light) / <alpha-value>)',
        dark: 'rgb(var(--cb-color-pink-dark) / <alpha-value>)',
      },
      orange: {
        light: 'rgb(var(--cb-color-orange-light) / <alpha-value>)',
        dark: 'rgb(var(--cb-color-orange-dark) / <alpha-value>)',
      },
      green: {
        light: 'rgb(var(--cb-color-green-light) / <alpha-value>)',
        dark: 'rgb(var(--cb-color-green-dark) / <alpha-value>)',
      },
    },

    fontFamily: {
      sans: ['Poppins', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      base: ['15px', { lineHeight: '1.5rem' }],
      sm: ['14px', { lineHeight: '1.5rem' }],
      xs: ['11px', { lineHeight: '1.5rem' }],
    },
    fontWeight: {
      normal: '400',
      medium: '500',
    },

    extend: {
      backgroundColor: {
        primary: 'rgb(var(--cb-color-bg-primary) / <alpha-value>)',
        secondary: 'rgb(var(--cb-color-bg-secondary) / <alpha-value>)',
      },
      textColor: {
        primary: 'rgb(var(--cb-color-text-primary) / <alpha-value>)',
        secondary: 'rgb(var(--cb-color-text-secondary) / <alpha-value>)',
      },
    },
  },
}
