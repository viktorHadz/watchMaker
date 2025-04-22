<script setup>
import TheLogo from '@/components/TheLogo.vue'
</script>

<template>
  <main>
    <div class="grid grid-cols-3">
      <div class="p-4">brands</div>
      <div class="flex items-center flex-col gap-4 py-4">
        <!-- Title -->
        <h1 class="text-3xl track">Veselin Hadzhiyski</h1>
        <!-- Logo -->
        <TheLogo class="size-60"></TheLogo>
        <!-- Title Text -->
        <h1 class="text-3xl">Watch Maker & Repairs</h1>
      </div>
      <div class="p-4">brands O Rolex</div>
    </div>
    <div class="w-full grid grid-cols-2 gap-12 p-8">
      <div class="min-w-[260px] min-h-[180px] border">
        <div
          class="w-full h-full items-center justify-center flex text-2xl hover:text-acc cursor-pointer"
        >
          Explore my work
        </div>
      </div>
      <div class="min-w-[260px] min-h-[180px] border">
        <div
          class="w-full h-full items-center justify-center flex text-2xl hover:text-acc cursor-pointer"
        >
          Get in touch
        </div>
      </div>
    </div>
  </main>
</template>
