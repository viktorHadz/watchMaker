<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
/*
TODO:
  1. Reconsider the brands
  2. Orient writing towards more vintage watches 
  3. Think about UI reflecting the above ideas appropriately 
*/
</script>

<template>
  <div
    class="bg-primary text-fg flex flex-col min-h-screen h-full w-full overflow-x-hidden transition-colors duration-500"
  >
    <div class="flex flex-1 h-full">
      <NavigationBar />
      <main class="flex-1 flex flex-col">
        <div class="xl:px-24 flex-1 flex flex-col min-h-full">
          <RouterView />
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped></style>
