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
  <main class="flex w-full flex-col items-center">
    <section class="grid grid-cols-1 items-center gap-8 py-8 lg:grid-cols-3">
      <!-- Left brands (hidden on mobile) -->
      <div class="text-fg/80 hidden grid-rows-3 place-items-center gap-6 lg:grid">
        <OmegaLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <CasioLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <LonginesLogo class="size-16 transition-transform duration-200 hover:scale-110" />
      </div>

      <!-- Center title + logo -->
      <div class="text-fg flex flex-col items-center gap-6">
        <h1 class="font-sec text-center text-2xl font-normal tracking-wide text-nowrap sm:text-3xl">
          Veselin Hadzhiyski
        </h1>
        <TheLogo class="w-48 sm:w-64" />
        <h2 class="font-sec text-center text-2xl font-normal tracking-wide text-nowrap">
          Watchmaker & Repairs
        </h2>
        <blockquote
          class="text-fg relative max-w-md px-4 text-center text-lg leading-relaxed tracking-wide italic"
        >
          <span class="text-acc absolute top-0 left-0 text-5xl opacity-70">“ </span>
          <p class="text-fg relative z-10">Time is the wisest counselor of all.</p>

          <footer class="text-fg/80 mt-2 flex items-center justify-center text-base/tight">
            — Pericles
          </footer>
        </blockquote>
      </div>

      <!-- Right brands (hidden on mobile) -->
      <div class="text-fg/80 hidden grid-rows-3 place-items-center gap-6 lg:grid">
        <RolexLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <SeikoLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <VostokLogo class="size-14 transition-transform duration-200 hover:scale-110" />
      </div>
    </section>

    <hr class="text-fg/40 w-full mask-x-from-40%" />

    <section class="max-w-4xl p-4 text-center sm:p-8">
      <h1 class="font-sec text-center text-2xl font-normal tracking-wide text-nowrap">
        Big boy title
      </h1>
      <p class="mt-6 px-2 text-base leading-relaxed sm:px-6 sm:text-lg">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. ...
      </p>
    </section>

    <section
      class="grid w-full grid-cols-1 gap-6 pb-32 sm:pb-8 md:grid-cols-2 md:p-6 lg:px-24 2xl:max-w-1/2"
    >
      <!-- Get in Touch -->
      <div
        class="border-fg/20 hover:border-acc relative min-h-[200px] cursor-pointer overflow-hidden rounded border shadow-md hover:brightness-125"
        @click="goToRoute('repairs')"
      >
        <div
          class="bg-acc/20 absolute inset-0 bg-[url(../assets/pictures/get-in-touch.webp)] bg-cover bg-center bg-blend-soft-light brightness-50 transition-all"
        ></div>
        <div
          class="hover:text-acc font-sec relative z-10 flex h-full items-center justify-center text-2xl font-normal text-white duration-75 transform-stroke hover:font-semibold"
        >
          Get in touch
        </div>
      </div>
      <!-- My Work -->
      <div
        class="border-fg/20 hover:border-acc relative min-h-[200px] cursor-pointer overflow-hidden rounded border shadow-md hover:brightness-125"
        @click="goToRoute('my-work')"
      >
        <div
          class="bg-acc/20 absolute inset-0 bg-[url(../assets/pictures/my-work.webp)] bg-cover bg-center bg-blend-soft-light brightness-50 transition-all"
        ></div>
        <div
          class="hover:text-acc font-sec relative z-10 flex h-full items-center justify-center text-2xl font-normal text-white duration-75 transform-stroke hover:font-semibold"
        >
          Explore my work
        </div>
      </div>
    </section>
  </main>
</template>
