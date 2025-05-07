<script setup>
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
    class="fixed top-5 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded shadow-md text-white"
    :class="{
      'bg-green-600': type === 'success',
      'bg-red-500': type === 'error',
      'bg-amber-500': type === 'warning',
    }"
  >
    {{ message }}
  </div>
</template>
