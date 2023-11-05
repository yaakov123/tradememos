// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-primevue", "@nuxtjs/tailwindcss"],
  css: ["primevue/resources/themes/bootstrap4-light-blue/theme.css"],
  primevue: {
    cssLayerOrder: "primevue",
    usePrimeVue: true,
  },
});
