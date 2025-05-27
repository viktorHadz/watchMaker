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
    <section class="relative flex min-h-[85vh] items-center justify-center px-6 py-12">
      <!-- Glass morphism container -->
      <div class="relative w-full max-w-6xl">
        <!-- Main hero card -->
        <div
          class="bg-primary/60 border-brdr/20 relative overflow-hidden rounded-3xl border shadow-2xl backdrop-blur-xl"
        >
          <!-- Subtle inner glow -->
          <div
            class="from-acc/5 to-sec/5 absolute inset-0 rounded-3xl bg-gradient-to-br via-transparent"
          ></div>

          <!-- Content grid -->
          <div class="relative z-10 grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-5 lg:p-12">
            <!-- Left brand column - enhanced -->
            <div class="hidden lg:col-span-1 lg:block">
              <div class="flex flex-col items-center space-y-8">
                <div class="group">
                  <OmegaLogo
                    class="text-fg/60 hover:text-acc size-12 cursor-pointer transition-all duration-300 hover:scale-110"
                  />
                  <div
                    class="via-brdr/30 mt-4 h-px w-full bg-gradient-to-r from-transparent to-transparent"
                  ></div>
                </div>
                <div class="group">
                  <CasioLogo
                    class="text-fg/60 hover:text-acc size-12 cursor-pointer transition-all duration-300 hover:scale-110"
                  />
                  <div
                    class="via-brdr/30 mt-4 h-px w-full bg-gradient-to-r from-transparent to-transparent"
                  ></div>
                </div>
                <div class="group">
                  <LonginesLogo
                    class="text-fg/60 hover:text-acc size-14 cursor-pointer transition-all duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>

            <!-- Center content - redesigned -->
            <div class="space-y-8 text-center lg:col-span-3">
              <!-- Main title with elegant styling -->
              <div class="space-y-4">
                <h1
                  class="font-sec text-fg text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl"
                >
                  Veselin Hadzhiyski
                </h1>
                <div class="flex items-center justify-center space-x-4">
                  <div class="to-acc h-px w-12 bg-gradient-to-r from-transparent"></div>
                  <div class="bg-acc h-2 w-2 animate-pulse rounded-full"></div>
                  <div class="to-acc h-px w-12 bg-gradient-to-l from-transparent"></div>
                </div>
              </div>

              <!-- Logo with elegant frame -->
              <div class="flex justify-center">
                <div class="group relative">
                  <div
                    class="from-acc/20 to-sec/20 absolute inset-0 rounded-full bg-gradient-to-br opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                  ></div>
                  <div
                    class="bg-primary/80 border-brdr/30 relative rounded-full border p-6 shadow-lg backdrop-blur-sm"
                  >
                    <TheLogo class="transition-transform duration-300 group-hover:scale-105" />
                  </div>
                </div>
              </div>

              <!-- Subtitle with refined typography -->
              <div class="space-y-2">
                <h2 class="font-sec text-fg text-2xl font-medium tracking-wide md:text-3xl">
                  Watchmaker & Repairs
                </h2>
                <p class="text-fg/70 mx-auto max-w-2xl text-lg leading-relaxed">
                  Precision craftsmanship meets timeless tradition in the art of horological
                  restoration
                </p>
              </div>

              <!-- Call to action -->
              <div class="pt-4">
                <button
                  @click="goToRoute('repairs')"
                  class="group bg-acc hover:bg-acc/90 text-fg2 relative overflow-hidden rounded-xl px-8 py-4 font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <span class="relative z-10">Start Your Restoration</span>
                  <div
                    class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                  ></div>
                </button>
              </div>
            </div>

            <!-- Right brand column - enhanced -->
            <div class="hidden lg:col-span-1 lg:block">
              <div class="flex flex-col items-center space-y-8">
                <div class="group">
                  <RolexLogo
                    class="text-fg/60 hover:text-acc size-12 cursor-pointer transition-all duration-300 hover:scale-110"
                  />
                  <div
                    class="via-brdr/30 mt-4 h-px w-full bg-gradient-to-r from-transparent to-transparent"
                  ></div>
                </div>
                <div class="group">
                  <SeikoLogo
                    class="text-fg/60 hover:text-acc size-12 cursor-pointer transition-all duration-300 hover:scale-110"
                  />
                  <div
                    class="via-brdr/30 mt-4 h-px w-full bg-gradient-to-r from-transparent to-transparent"
                  ></div>
                </div>
                <div class="group">
                  <VostokLogo
                    class="text-fg/60 hover:text-acc size-12 cursor-pointer transition-all duration-300 hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile brand showcase -->
          <div class="border-brdr/20 border-t p-6 lg:hidden">
            <div class="flex items-center justify-center space-x-8 opacity-60">
              <OmegaLogo class="hover:text-acc size-8 transition-colors duration-300" />
              <CasioLogo class="hover:text-acc size-8 transition-colors duration-300" />
              <LonginesLogo class="hover:text-acc size-9 transition-colors duration-300" />
              <RolexLogo class="hover:text-acc size-8 transition-colors duration-300" />
              <SeikoLogo class="hover:text-acc size-8 transition-colors duration-300" />
              <VostokLogo class="hover:text-acc size-8 transition-colors duration-300" />
            </div>
          </div>
        </div>

        <!-- Floating quote card -->
        <div class="relative mx-auto mt-12 max-w-2xl">
          <div
            class="bg-primary/40 border-brdr/20 rounded-2xl border p-8 shadow-xl backdrop-blur-lg"
          >
            <blockquote class="text-center">
              <div class="relative">
                <span class="text-acc/60 absolute -top-4 -left-2 font-serif text-6xl">"</span>
                <p class="text-fg px-6 text-xl leading-relaxed font-light italic md:text-2xl">
                  Time is the wisest counselor of all.
                </p>
                <span class="text-acc/60 absolute -right-2 -bottom-8 rotate-180 font-serif text-6xl"
                  >"</span
                >
              </div>
              <footer class="border-brdr/20 mt-6 border-t pt-4">
                <cite class="text-fg/70 text-lg font-medium not-italic">— Pericles</cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>

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
