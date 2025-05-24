<script setup>
import { RouterView } from 'vue-router'
import NavigationBar from './components/NavigationBar.vue'
import ToastElement from './components/ToastElement.vue'
import { useToastStore } from '@/stores/toast'
const toast = useToastStore()

/*
TODO:
  1. Reconsider the brands
  2. Orient writing towards more vintage watches 
  3. Think about UI reflecting the above ideas appropriately 
*/
</script>

<template>
  <div
    class="bg-primary text-fg flex h-full min-h-screen w-full flex-col overflow-x-hidden transition-all duration-500"
  >
    <div class="flex h-full flex-1">
      <NavigationBar />
      <main class="flex flex-1 flex-col">
        <div class="flex min-h-full flex-1 flex-col xl:px-24">
          <RouterView />
        </div>
        <Transition>
          <ToastElement v-if="toast.visible" :message="toast.message" :type="toast.type" />
        </Transition>
      </main>
    </div>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.v-enter-from {
  opacity: 0;
  transform: translateY(50px);
}

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>
