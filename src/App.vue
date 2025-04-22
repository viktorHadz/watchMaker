<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
</script>

<template>
  <div
    class="bg-primary text-fg flex min-h-[100vh] w-[100%] transition duration-500 will-change-transform"
  >
    <NavigationBar></NavigationBar>
    <div class="main-content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.main-content {
  flex-grow: 1;
  min-width: 0;
}
</style>
