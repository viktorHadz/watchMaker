<!-- App.vue -->
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
  bg- 
  <!-- FIXED BACKGROUND -->
    <div class="fixed right-0 bottom-0 z-0 max-h-full min-h-fit max-w-full min-w-full">
      <div
        class="pointer-events-none static isolate z-0 max-h-[600px] min-h-[400px] max-w-screen min-w-screen bg-[url(../assets/pictures/MechBg.webp)] bg-cover lg:min-h-[600px] dark:bg-[url(../assets/pictures/MechBg-Light.webp)] dark:brightness-50"
      ></div>
    </div>
*/
</script>

<template>
  <main class="text-fg flex h-screen w-full overflow-hidden bg-white">
    <NavigationBar />
    <div class="z-10 flex flex-1 flex-col overflow-hidden">
      <div class="flex-1 overflow-y-auto">
        <RouterView />
      </div>
    </div>
    <Transition name="toast">
      <ToastElement
        v-if="toast.visible"
        :message="toast.message"
        :type="toast.type"
        class="fixed right-4 bottom-4 z-50"
      />
    </Transition>
  </main>
</template>

<style scoped>
.toast-enter-active,
.toast-leave-active {
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
}

.toast-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.toast-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.95);
}
</style>
