<script setup>
import { useToastStore } from '@/stores/toast'
const toast = useToastStore()
defineProps({
  message: String,
  type: {
    type: String,
    default: 'success',
  },
})
</script>

<template>
  <div
    v-if="toast.visible"
    class="fixed bottom-5 px-4 right-12 py-2 rounded shadow-md text-white text-2xl font-bold z-[999]"
    :class="{
      'bg-green-600': type === 'success',
      'bg-red-500': type === 'error',
      'bg-amber-500': type === 'warning',
    }"
  >
    {{ message }}
  </div>
</template>
