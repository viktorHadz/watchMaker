<script setup>
import { RouterLink } from 'vue-router'
import { watch, ref } from 'vue'
import DarkMode from '@/components/DarkMode.vue'
import { useStorage } from '@vueuse/core'
import {
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  HomeIcon,
  WrenchIcon,
  PhotoIcon,
} from '@heroicons/vue/24/outline'

const expanded = useStorage('navigation-expanded', true)
const dynamicName = ref('')

watch(expanded, () => {
  dynamicName.value = expanded.value ? 'not-expanded' : 'expanded'
  console.log('Dynamic name: ', dynamicName.value)
})
</script>

<template>
  <!-- Desktop sidebar -->
  <header
    class="hidden sm:flex flex-col justify-between bg-sec dark:text-fg text-fg2 text-lg font-medium transition-[width] duration-500 ease-in-out overflow-hidden min-h-[100%] flex-shrink-0 font-sec z-50"
    :style="{ width: expanded ? '150px' : '60px' }"
  >
    <div class="sticky top-0">
      <Transition name="fade-slide" mode="out-in">
        <nav v-if="expanded" key="expanded" class="flex flex-col items-center p-4 gap-y-4">
          <RouterLink to="/" class="hover:text-acc">Home</RouterLink>
          <RouterLink to="/repairs" class="hover:text-acc">Repairs</RouterLink>
          <RouterLink to="/my-work" class="hover:text-acc whitespace-nowrap">My Work</RouterLink>
        </nav>
        <nav v-else key="collapsed" class="flex flex-col items-center p-4 gap-y-6">
          <RouterLink to="/" class="hover:text-acc">
            <HomeIcon class="size-7" />
          </RouterLink>
          <RouterLink to="/repairs" class="hover:text-acc">
            <WrenchIcon class="size-7" />
          </RouterLink>
          <RouterLink to="/my-work" class="hover:text-acc">
            <PhotoIcon class="size-7" />
          </RouterLink>
        </nav>
      </Transition>
    </div>

    <div class="sticky bottom-4 flex flex-col items-center justify-center gap-12">
      <button
        @click="expanded = !expanded"
        class="relative flex items-center justify-center hover:text-acc cursor-pointer"
      >
        <div class="absolute">
          <Transition :name="dynamicName" mode="out-in">
            <component
              :is="expanded ? ChevronDoubleLeftIcon : ChevronDoubleRightIcon"
              class="size-8"
            />
          </Transition>
        </div>
      </button>
      <DarkMode class="hover:text-acc" />
    </div>
  </header>

  <!-- Mobile bottom nav -->
  <nav
    class="fixed bottom-0 left-0 right-0 flex sm:hidden justify-around items-center bg-sec dark:text-fg text-fg2 py-3 border-t border-fg/20 z-50"
  >
    <RouterLink to="/" class="flex flex-col items-center text-sm hover:text-acc">
      <HomeIcon class="size-6" />
      <span>Home</span>
    </RouterLink>
    <RouterLink to="/repairs" class="flex flex-col items-center text-sm hover:text-acc">
      <WrenchIcon class="size-6" />
      <span>Repairs</span>
    </RouterLink>
    <RouterLink to="/my-work" class="flex flex-col items-center text-sm hover:text-acc">
      <PhotoIcon class="size-6" />
      <span>My Work</span>
    </RouterLink>
    <div class="flex flex-col items-center text-sm hover:text-acc">
      <DarkMode class="size-6"></DarkMode>
      <span class="text-sm">Theme</span>
    </div>
  </nav>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.not-expanded-enter-active,
.expanded-enter-active {
  transition: all 0.4s ease-in-out;
  transform-style: preserve-3d;
  transform-origin: center center;
}

.not-expanded-enter-from,
.expanded-enter-from {
  transform: rotateY(180deg) scale(0.9);
  opacity: 0.8;
}

.not-expanded-enter-to,
.expanded-enter-to {
  transform: rotateY(0deg) scale(1);
  opacity: 1;
}
</style>
