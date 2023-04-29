// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['assets/css/style.css'],
  ssr: false,
  app: {
    head: {
      title: "Nuxt 3 demo",
      meta: [{ name: "description", content: "nuxt3"}],
      // link: [{ rel: 'icon', href: "/favicon.ico"}],
    },
    pageTransition: { name: 'page', mode: 'out-in' }, 
    baseURL: '/nuxt3-sample/'
  },
  modules: [
    // '@nuxtjs/tailwindcss',
    '@nuxt/content',
  ],
  content: {
    highlight: {
      theme: 'github-dark-dimmed'
    }
  }
})
