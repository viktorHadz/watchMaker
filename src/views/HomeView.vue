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
  <main class="flex flex-col items-center w-full">
    <section class="grid grid-cols-1 lg:grid-cols-3 items-center gap-8 py-8">
      <!-- Left brands (hidden on mobile) -->
      <div class="hidden lg:grid grid-rows-3 gap-6 place-items-center text-fg/80">
        <OmegaLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <CasioLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <LonginesLogo class="size-16 transition-transform duration-200 hover:scale-110" />
      </div>

      <!-- Center title + logo -->
      <div class="flex flex-col items-center gap-6">
        <h1 class="text-3xl sm:text-4xl font-semibold tracking-wide text-nowrap text-center">
          Veselin Hadzhiyski
        </h1>
        <TheLogo class="w-48 sm:w-64" />
        <h2 class="text-2xl sm:text-3xl font-semibold tracking-wider text-center">
          Watchmaker & Repairs
        </h2>
        <blockquote
          class="relative text-center max-w-md text-fg italic tracking-wide leading-relaxed text-lg px-4"
        >
          <span class="absolute left-0 top-0 text-5xl text-acc opacity-70">“ </span>
          <p class="relative z-10 text-pretty">Time is the wisest counselor of all.</p>
          <footer class="mt-2 text-base text-fg/70">— Pericles</footer>
        </blockquote>
      </div>

      <!-- Right brands (hidden on mobile) -->
      <div class="hidden lg:grid grid-rows-3 gap-6 place-items-center text-fg/80">
        <RolexLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <SeikoLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <VostokLogo class="size-14 transition-transform duration-200 hover:scale-110" />
      </div>
    </section>

    <hr class="text-fg/40 mask-x-from-40% w-full" />

    <section class="text-center p-4 sm:p-8 max-w-4xl">
      <h1 class="text-2xl sm:text-3xl font-semibold tracking-widest">Big boy title</h1>
      <p class="mt-6 text-base sm:text-lg leading-relaxed px-2 sm:px-6">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...
      </p>
    </section>

    <section
      class="w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:p-6 lg:px-24 pb-32 sm:pb-8 2xl:max-w-1/2"
    >
      <!-- Get in Touch -->
      <div
        class="relative min-h-[200px] border border-fg/20 hover:border-acc overflow-hidden hover:brightness-125 shadow-md rounded cursor-pointer"
        @click="goToRoute('repairs')"
      >
        <div
          class="absolute inset-0 bg-blend-soft-light bg-acc/20 bg-[url(../assets/pictures/get-in-touch.webp)] bg-cover bg-center brightness-50 transition-all"
        ></div>
        <div
          class="relative z-10 flex items-center justify-center h-full text-2xl sm:text-3xl font-bold text-white hover:text-acc"
        >
          Get in touch
        </div>
      </div>
      <!-- My Work -->
      <div
        class="relative min-h-[200px] border border-fg/20 hover:border-acc overflow-hidden hover:brightness-125 shadow-md rounded cursor-pointer"
        @click="goToRoute('my-work')"
      >
        <div
          class="absolute inset-0 bg-blend-soft-light bg-acc/20 bg-[url(../assets/pictures/my-work.webp)] bg-cover bg-center brightness-50 transition-all"
        ></div>
        <div
          class="relative z-10 flex items-center justify-center h-full text-2xl sm:text-3xl font-bold text-white hover:text-acc"
        >
          Explore my work
        </div>
      </div>
    </section>
  </main>
</template>
