<script setup>
import { RouterLink } from 'vue-router'
import DarkMode from '@/components/DarkMode.vue'
</script>
<template>
  <header class="bg-sec dark:text-fg text-fg2 flex flex-col justify-between">
    <nav class="navigation flex flex-col items-center p-4 gap-y-4">
      <RouterLink to="/" class="link"> Home </RouterLink>
      <RouterLink to="/repairs" class="link"> Repairs </RouterLink>
      <RouterLink to="/my-work" class="link"> My Work</RouterLink>
    </nav>
    <DarkMode></DarkMode>
  </header>
</template>
<style></style>
