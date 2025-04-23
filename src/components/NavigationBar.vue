<script setup>
import { RouterLink } from 'vue-router'
import DarkMode from '@/components/DarkMode.vue'
</script>
<template>
  <header class="bg-sec dark:text-fg text-fg2 flex flex-col justify-between text-xl font-semibold">
    <nav class="navigation flex flex-col items-center p-4 gap-y-4">
      <RouterLink to="/" class="link hover:text-acc"> Home </RouterLink>
      <RouterLink to="/repairs" class="link hover:text-acc"> Repairs </RouterLink>
      <RouterLink to="/my-work" class="link hover:text-acc"> My Work</RouterLink>
    </nav>
    <DarkMode></DarkMode>
  </header>
</template>
<style></style>
