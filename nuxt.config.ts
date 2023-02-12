// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  routeRules: {
    // Static page generated on-demand once
    "/static": { static: true },
  },
});
