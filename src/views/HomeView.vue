<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToRoute(name) {
  router.push(`/${name}`)
}
import TheLogo from '@/components/logo/TheLogo.vue'

import OmegaLogo from '@/components/brands/OmegaLogo.vue'
import CasioLogo from '@/components/brands/CasioLogo.vue'
import LonginesLogo from '@/components/brands/LonginesLogo.vue'
import RolexLogo from '@/components/brands/RolexLogo.vue'
import SeikoLogo from '@/components/brands/SeikoLogo.vue'
import VostokLogo from '@/components/brands/VostokLogo.vue'
</script>

<template>
  <main>
    <div class="grid grid-cols-3">
      <!-- 3 Brand -->
      <div class="grid grid-rows-3 gap-y-4 place-items-center text-fg/80">
        <OmegaLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <CasioLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <LonginesLogo class="size-16 transition-transform duration-200 hover:scale-110" />
      </div>
      <!-- Main Logo -->
      <div class="flex items-center flex-col gap-6 py-8 mx-auto max-w-xl">
        <!-- Title -->
        <h1 class="text-4xl tracking-widest font-semibold cursor-default">Veselin Hadzhiyski</h1>
        <!-- Logo -->
        <TheLogo class="relative"></TheLogo>
        <!-- Title Text -->
        <h1 class="text-3xl tracking-widest font-semibold cursor-default">Watchmaker & Repairs</h1>
        <!-- Quote block -->
        <blockquote
          class="relative text-center max-w-lg text-fg italic tracking-wide leading-relaxed text-lg px-4"
        >
          <span class="absolute left-0 top-0 text-5xl text-acc opacity-40 pr-1">“ </span>
          <p class="z-10 relative">Time is the wisest counselor of all.</p>
          <footer class="not-italic text-fg/70 text-sm mt-2">— Pericles</footer>
        </blockquote>
      </div>
      <div class="grid grid-rows-3 gap-y-4 place-items-center text-fg/80">
        <RolexLogo class="size-14 transition-transform duration-200 hover:scale-110"></RolexLogo>
        <SeikoLogo class="size-14 transition-transform duration-200 hover:scale-110"></SeikoLogo>
        <VostokLogo class="size-14 transition-transform duration-200 hover:scale-110"></VostokLogo>
      </div>
    </div>
    <hr class="text-fg/40 mask-x-from-40%" />
    <div class="w-full grid grid-cols-2 gap-12 p-8">
      <!-- LEFT -->
      <div
        class="relative min-w-[260px] min-h-[180px] border border-fg/20 hover:border-acc overflow-hidden hover:brightness-125 shadow-md rounded"
      >
        <!-- Background layer -->
        <div
          class="absolute inset-0 bg-blend-soft-light bg-acc/20 bg-[url(../assets/pictures/my-work.webp)] bg-cover bg-center bg-no-repeat brightness-50 transition-all"
        ></div>
        <!-- Text layer -->
        <div
          class="relative z-10 w-full h-full flex items-center justify-center text-3xl text-white cursor-pointer hover:text-acc font-bold"
          @click="goToRoute('my-work')"
        >
          Explore my work
        </div>
      </div>
      <!-- RIGHT -->
      <div
        class="relative min-w-[260px] min-h-[180px] border border-fg/20 hover:border-acc overflow-hidden hover:brightness-125 shadow-md rounded"
      >
        <!-- Background layer -->
        <div
          class="absolute inset-0 bg-blend-soft-light bg-acc/20 bg-[url(../assets/pictures/get-in-touch.webp)] bg-cover bg-center bg-no-repeat brightness-50 transition-all"
        ></div>

        <!-- Text layer -->
        <div
          class="relative z-10 w-full h-full flex items-center justify-center text-3xl text-white cursor-pointer hover:text-acc font-bold"
          @click="goToRoute('repairs')"
        >
          Get in touch
        </div>
      </div>
    </div>
  </main>
</template>
