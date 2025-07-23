export default defineNuxtPlugin(() => {
  // Import trực tiếp trong hàm để tránh lỗi SSR
  import("@lottiefiles/lottie-player");
});
