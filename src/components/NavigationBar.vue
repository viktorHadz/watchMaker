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
    class="bg-sec dark:text-fg text-fg2 font-sec z-50 hidden min-h-[100%] flex-shrink-0 flex-col justify-between overflow-hidden text-lg font-medium transition-[width] duration-500 ease-in-out sm:flex"
    :style="{ width: expanded ? '150px' : '60px' }"
  >
    <div class="sticky top-0">
      <Transition name="fade-slide" mode="out-in">
        <nav v-if="expanded" key="expanded" class="flex flex-col items-center gap-y-4 p-4">
          <RouterLink to="/" class="hover:text-acc">Home</RouterLink>
          <RouterLink to="/repairs" class="hover:text-acc">Repairs</RouterLink>
          <RouterLink to="/my-work" class="hover:text-acc whitespace-nowrap">My Work</RouterLink>
        </nav>
        <nav v-else key="collapsed" class="flex flex-col items-center gap-y-6 p-4">
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
        class="hover:text-acc relative flex cursor-pointer items-center justify-center"
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
    class="bg-sec dark:text-fg text-fg2 border-fg/20 fixed right-0 bottom-0 left-0 z-50 flex items-center justify-around border-t py-3 sm:hidden"
  >
    <RouterLink to="/" class="hover:text-acc flex flex-col items-center text-sm">
      <HomeIcon class="size-6" />
      <span>Home</span>
    </RouterLink>
    <RouterLink to="/repairs" class="hover:text-acc flex flex-col items-center text-sm">
      <WrenchIcon class="size-6" />
      <span>Repairs</span>
    </RouterLink>
    <RouterLink to="/my-work" class="hover:text-acc flex flex-col items-center text-sm">
      <PhotoIcon class="size-6" />
      <span>My Work</span>
    </RouterLink>
    <div class="hover:text-acc flex flex-col items-center text-sm">
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
