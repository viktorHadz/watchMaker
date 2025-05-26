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
  <main class="flex flex-col items-center">
    <!-- TOP SECTION -->
    <section
      class="md:border-brdr/50 grad-container mb-12 grid grid-cols-1 items-center p-12 drop-shadow-xl md:mx-6 md:my-8 md:w-fit md:grid-cols-3 md:rounded md:border md:py-6 lg:gap-24"
    >
      <!-- Left brands - hidden on mobile -->
      <div class="text-fg/80 hidden grid-rows-3 place-items-center gap-6 md:grid">
        <OmegaLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <CasioLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <LonginesLogo class="size-16 transition-transform duration-200 hover:scale-110" />
      </div>

      <!-- Center title + logo -->
      <div class="text-fg flex flex-col items-center gap-12 lg:gap-24">
        <h1
          class="font-sec text-fg md:4xl text-center text-2xl font-semibold tracking-wide text-nowrap sm:text-3xl"
        >
          Veselin Hadzhiyski
        </h1>
        <TheLogo />
        <h1
          class="font-sec md:4xl text-center text-2xl font-semibold tracking-wide text-nowrap sm:text-3xl"
        >
          Watchmaker & Repairs
        </h1>
      </div>

      <!-- Right brands - hidden on mobile -->
      <div class="text-fg/80 hidden grid-rows-3 place-items-center gap-6 md:grid">
        <RolexLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <SeikoLogo class="size-14 transition-transform duration-200 hover:scale-110" />
        <VostokLogo class="size-14 transition-transform duration-200 hover:scale-110" />
      </div>
    </section>

    <blockquote
      class="text-fg relative max-w-md px-4 text-center text-2xl leading-relaxed tracking-tight italic sm:text-3xl"
    >
      <span class="text-acc/80 absolute top-0 left-0 text-5xl">" </span>
      <p class="text-fg relative z-10 line-clamp-1">Time is the wisest counselor of all.</p>

      <footer class="text-fg/80 flex items-center justify-center text-base/tight">
        — Pericles
      </footer>
    </blockquote>

    <!-- SERVICES SECTION -->
    <section class="mt-16 w-full max-w-7xl px-6">
      <div class="mb-12 text-center">
        <h2 class="font-sec text-fg mb-4 text-4xl font-semibold">Expert Services</h2>
        <p class="text-fg/70 mx-auto max-w-2xl text-lg">
          Comprehensive watch repair and restoration services with decades of experience in
          precision timekeeping
        </p>
      </div>

      <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Service 1: Movement Restoration -->
        <div
          class="group bg-primary border-brdr/30 hover:border-acc/50 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div
            class="bg-acc/10 group-hover:bg-acc/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300"
          >
            <svg class="text-acc h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <h3 class="font-sec text-fg mb-3 text-xl font-semibold">Movement Restoration</h3>
          <p class="text-fg/70 leading-relaxed">
            Complete mechanical movement servicing, cleaning, and calibration to restore your
            timepiece to factory precision.
          </p>
        </div>

        <!-- Service 2: Dial Refinishing -->
        <div
          class="group bg-primary border-brdr/30 hover:border-acc/50 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div
            class="bg-acc/10 group-hover:bg-acc/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300"
          >
            <svg class="text-acc h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              ></path>
            </svg>
          </div>
          <h3 class="font-sec text-fg mb-3 text-xl font-semibold">Dial Refinishing</h3>
          <p class="text-fg/70 leading-relaxed">
            Expert restoration of watch dials, hands, and indices to bring back the original beauty
            and legibility.
          </p>
        </div>

        <!-- Service 3: Case Polishing -->
        <div
          class="group bg-primary border-brdr/30 hover:border-acc/50 rounded-xl border p-6 transition-all duration-300 hover:shadow-lg"
        >
          <div
            class="bg-acc/10 group-hover:bg-acc/20 mb-4 flex h-12 w-12 items-center justify-center rounded-lg transition-colors duration-300"
          >
            <svg class="text-acc h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              ></path>
            </svg>
          </div>
          <h3 class="font-sec text-fg mb-3 text-xl font-semibold">Case Polishing</h3>
          <p class="text-fg/70 leading-relaxed">
            Professional case refinishing and bracelet restoration to eliminate scratches and
            restore original luster.
          </p>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS SECTION -->
    <section class="bg-sec/5 mt-20 w-full py-16">
      <div class="mx-auto max-w-7xl px-6">
        <div class="mb-12 text-center">
          <h2 class="font-sec text-fg mb-4 text-4xl font-semibold">What Clients Say</h2>
          <p class="text-fg/70 text-lg">Trusted by watch enthusiasts and collectors worldwide</p>
        </div>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Testimonial 1 -->
          <div
            class="bg-primary border-brdr/20 rounded-xl border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div class="mb-4 flex items-center">
              <div class="text-acc flex">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <p class="text-fg/80 mb-4 leading-relaxed italic">
              "Veselin brought my grandfather's Omega back to life. The attention to detail and
              craftsmanship is absolutely incredible. It runs better than when it was new!"
            </p>
            <div class="flex items-center">
              <div class="bg-acc/20 flex h-10 w-10 items-center justify-center rounded-full">
                <span class="text-acc text-sm font-semibold">MR</span>
              </div>
              <div class="ml-3">
                <p class="text-fg font-medium">Michael Rodriguez</p>
                <p class="text-fg/60 text-sm">Watch Collector</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 2 -->
          <div
            class="bg-primary border-brdr/20 rounded-xl border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div class="mb-4 flex items-center">
              <div class="text-acc flex">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <p class="text-fg/80 mb-4 leading-relaxed italic">
              "Professional service and fair pricing. My vintage Seiko looks and performs like new.
              Veselin's expertise with mechanical movements is truly exceptional."
            </p>
            <div class="flex items-center">
              <div class="bg-acc/20 flex h-10 w-10 items-center justify-center rounded-full">
                <span class="text-acc text-sm font-semibold">SL</span>
              </div>
              <div class="ml-3">
                <p class="text-fg font-medium">Sarah Liu</p>
                <p class="text-fg/60 text-sm">Antique Dealer</p>
              </div>
            </div>
          </div>

          <!-- Testimonial 3 -->
          <div
            class="bg-primary border-brdr/20 rounded-xl border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div class="mb-4 flex items-center">
              <div class="text-acc flex">
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
                <svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  ></path>
                </svg>
              </div>
            </div>
            <p class="text-fg/80 mb-4 leading-relaxed italic">
              "Outstanding work on my Rolex restoration. Veselin's knowledge of vintage movements is
              remarkable, and the turnaround time was excellent."
            </p>
            <div class="flex items-center">
              <div class="bg-acc/20 flex h-10 w-10 items-center justify-center rounded-full">
                <span class="text-acc text-sm font-semibold">DJ</span>
              </div>
              <div class="ml-3">
                <p class="text-fg font-medium">David Johnson</p>
                <p class="text-fg/60 text-sm">Estate Attorney</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- LOWER SECTION -->
    <section class="mt-20 mb-20 w-full max-w-7xl px-6">
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
        <!-- Get in Touch Card -->
        <div
          class="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl dark:from-slate-800 dark:to-slate-900"
          @click="goToRoute('repairs')"
        >
          <!-- Background Image with Overlay -->
          <div
            class="absolute inset-0 bg-[url(../assets/pictures/get-in-touch.webp)] bg-cover bg-center"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 transition-all duration-500 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/60"
            ></div>
          </div>

          <!-- Glass Morphism Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 backdrop-blur-[1px] transition-all duration-500 group-hover:backdrop-blur-[2px]"
          ></div>

          <!-- Content -->
          <div class="relative z-10 flex h-80 flex-col justify-between p-8">
            <div class="flex items-start justify-between">
              <div
                class="group-hover:bg-acc/30 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.862 9.862 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  ></path>
                </svg>
              </div>
              <div class="bg-acc h-2 w-2 animate-pulse rounded-full"></div>
            </div>

            <div class="space-y-4">
              <h3
                class="font-sec group-hover:text-acc text-3xl font-semibold text-white transition-colors duration-300"
              >
                Get in Touch
              </h3>
              <p class="text-lg leading-relaxed text-white/80">
                Ready to restore your timepiece? Let's discuss your watch repair needs and bring
                your cherished watches back to life.
              </p>
              <div
                class="flex items-center space-x-2 text-white/60 transition-colors duration-300 group-hover:text-white/80"
              >
                <span class="text-sm font-medium">Schedule consultation</span>
                <svg
                  class="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <!-- My Work Card -->
        <div
          class="group relative cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl dark:from-slate-800 dark:to-slate-900"
          @click="goToRoute('my-work')"
        >
          <!-- Background Image with Overlay -->
          <div
            class="absolute inset-0 bg-[url(../assets/pictures/my-work.webp)] bg-cover bg-center"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 transition-all duration-500 group-hover:from-black/60 group-hover:via-black/40 group-hover:to-black/60"
            ></div>
          </div>

          <!-- Glass Morphism Overlay -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 backdrop-blur-[1px] transition-all duration-500 group-hover:backdrop-blur-[2px]"
          ></div>

          <!-- Content -->
          <div class="relative z-10 flex h-80 flex-col justify-between p-8">
            <div class="flex items-start justify-between">
              <div
                class="group-hover:bg-acc/30 flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300"
              >
                <svg
                  class="h-6 w-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  ></path>
                </svg>
              </div>
              <div class="flex space-x-1">
                <div class="bg-acc h-2 w-2 animate-pulse rounded-full"></div>
                <div
                  class="bg-acc/60 h-2 w-2 animate-pulse rounded-full"
                  style="animation-delay: 0.2s"
                ></div>
                <div
                  class="bg-acc/40 h-2 w-2 animate-pulse rounded-full"
                  style="animation-delay: 0.4s"
                ></div>
              </div>
            </div>

            <div class="space-y-4">
              <h3
                class="font-sec group-hover:text-acc text-3xl font-semibold text-white transition-colors duration-300"
              >
                Explore My Work
              </h3>
              <p class="text-lg leading-relaxed text-white/80">
                Discover a gallery of meticulously restored timepieces. Each watch tells a story of
                precision, craftsmanship, and dedication to horological excellence.
              </p>
              <div
                class="flex items-center space-x-2 text-white/60 transition-colors duration-300 group-hover:text-white/80"
              >
                <span class="text-sm font-medium">View portfolio</span>
                <svg
                  class="h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
