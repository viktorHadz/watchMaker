<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div
    class="bg-primary text-fg flex flex-col min-h-screen h-full w-full overflow-x-hidden transition-colors duration-500"
  >
    <div class="flex flex-1 h-full">
      <NavigationBar />
      <main class="flex-1 flex flex-col">
        <div class="px-4 sm:px-8 md:px-12 xl:px-24 flex-1 flex flex-col">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
