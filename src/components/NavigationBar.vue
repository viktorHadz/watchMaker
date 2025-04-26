<script setup>
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import DarkMode from '@/components/DarkMode.vue'
import { ChevronDoubleLeftIcon, ChevronDoubleRightIcon } from '@heroicons/vue/24/outline'
const expanded = ref(false)
</script>
<template>
  <header
    class="bg-sec dark:text-fg text-fg2 flex flex-col justify-between text-lg sm:text-xl font-semibold min-w-fit"
  >
    <nav class="navigation flex flex-col items-center p-4 gap-y-4 sticky top-0">
      <transition name="rotate-element" mode="out-in">
        <ChevronDoubleLeftIcon
          v-if="!expanded"
          @click="expanded = true"
          class="size-5 transition-transform ease-in-out"
        ></ChevronDoubleLeftIcon>
        <ChevronDoubleRightIcon
          v-else
          @click="expanded = false"
          class="size-5"
        ></ChevronDoubleRightIcon>
      </transition>
      <RouterLink to="/" class="link hover:text-acc"> Home </RouterLink>
      <RouterLink to="/repairs" class="link hover:text-acc"> Repairs </RouterLink>
      <RouterLink to="/my-work" class="link hover:text-acc"> My Work</RouterLink>
    </nav>
    <DarkMode class="sticky bottom-0"></DarkMode>
  </header>
</template>
<style scoped>
.rotate-element-enter-active,
.rotate-element-leave-active {
  transition: transform 0.5s ease;
}

.rotate-element-enter-from {
  transform: rotate(0deg);
}

.rotate-element-enter-to {
  transform: rotate(60deg);
}
</style>
