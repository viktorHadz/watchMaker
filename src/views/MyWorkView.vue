<script setup>
import NewGalleryElement from '@/components/NewGalleryPost.vue'
</script>
<template>
  <div class="p-4">
    <div class="relative z-10 mx-auto px-4 sm:px-12 md:px-24 lg:grid-cols-2 lg:px-4">
      <NewGalleryElement></NewGalleryElement>
    </div>
    <!-- FIXED BACKGROUND -->
    <div class="fixed right-0 bottom-0 max-h-full min-h-fit max-w-full min-w-full">
      <div
        class="pointer-events-none static isolate z-0 max-h-[600px] min-h-[400px] max-w-screen min-w-screen bg-[url(../assets/pictures/MechBg.webp)] bg-cover lg:min-h-[600px] dark:bg-[url(../assets/pictures/MechBg-Light.webp)] dark:brightness-50"
      ></div>
    </div>
  </div>
</template>
