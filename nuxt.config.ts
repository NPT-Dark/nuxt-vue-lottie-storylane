// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  plugins: ["~/plugins/lottie.client"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => ["lottie-player"].includes(tag),
    },
  },
});
