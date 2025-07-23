<template>
  <div style="width: 100%">
    <div
      class="sl-embed"
      :style="{
        position: 'relative',
        paddingBottom: 'calc(49.84% + 25px)',
        width: '100%',
        height: 0,
        transform: 'scale(1)',
      }"
    >
      <iframe
        loading="lazy"
        class="sl-demo"
        src="https://app.storylane.io/share/fi5eljlmarbh?embed=inline"
        name="sl-embed"
        allow="fullscreen"
        allowfullscreen
        :style="{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          border: '1px solid rgba(63,95,172,0.35)',
          boxShadow: '0px 0px 18px rgba(26, 19, 72, 0.15)',
          borderRadius: '10px',
          boxSizing: 'border-box',
        }"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";

onMounted(() => {
  const script = document.createElement("script");
  script.src = "https://js.storylane.io/js/v2/storylane.js";
  script.async = true;
  document.body.appendChild(script);
});

onBeforeUnmount(() => {
  // Optional cleanup if bạn muốn xoá script
});
</script>

<style scoped>
/* Tailwind hoặc tuỳ chỉnh thêm */
</style>
