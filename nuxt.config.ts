// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
    css: ["~/assets/css/tailwind.css"],
    modules: ['@nuxtjs/color-mode'],
    colorMode: {
        preference: 'dark',
        classSuffix: '',
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
