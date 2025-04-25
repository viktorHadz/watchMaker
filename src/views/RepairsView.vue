<template>
  <div class="relative isolate bg-sec">
    <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
      <div class="relative px-6 pt-24 pb-20 sm:pt-32 lg:static lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
          <div
            class="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gray-100 dark:bg-sec ring-1 ring-brdr lg:w-1/2"
          >
            <svg
              class="absolute inset-0 size-full stroke-gray-200 dark:stroke-neutral-900 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                  width="200"
                  height="200"
                  x="100%"
                  y="-1"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M130 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" stroke-width="0" fill="acc" />
              <svg x="100%" y="-1" class="overflow-visible fill-acc/40">
                <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
              </svg>
              <rect
                width="100%"
                height="100%"
                stroke-width="0"
                fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
              />
            </svg>
          </div>
          <section class="max-w-2xl">
            <h2 class="text-4xl font-semibold tracking-tight text-pretty text-fg sm:text-5xl">
              Get in touch
            </h2>
            <h3 class="mt-6 text-xl/8 text-fg/80">
              If it's about watches, you're in the right place
            </h3>
            <ul class="list-disc">
              <li class="mt-4 text-base/7 text-fg/70">
                I'm happy to take on repair work of all kinds — vintage, modern, quartz,
                automatic... if it's built to be fixed, I’m happy to take a look. Just drop me a
                message and we’ll figure out what it needs.
              </li>
              <li class="mt-4 text-base/7 text-fg/70">
                If you're a watchmaker yourself and stuck on something, feel free to reach out. I’m
                always up for problem-solving, sharing ideas, or just trading notes on the bench.
              </li>
              <li class="mt-4 text-base/7 text-fg/70">
                And if you just love watches and want to chat — that’s welcome too. Always good to
                hear from fellow enthusiasts.
              </li>
            </ul>
          </section>

          <dl class="mt-10 space-y-4 text-base/7 text-fg/80">
            <div class="flex gap-x-4 cursor-pointer" @click="showModal = true">
              <dt class="flex-none">
                <span class="sr-only">Price list</span>
                <CurrencyPoundIcon class="h-7 w-6 text-fg/70" aria-hidden="true" />
              </dt>
              <dd>Price list</dd>
            </div>
          </dl>
        </div>
      </div>
      <form action="#" method="POST" class="px-6 pt-20 pb-24 sm:pb-32 lg:px-8 lg:py-48">
        <div class="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label for="first-name" class="block text-sm/6 font-semibold text-fg2 dark:text-fg"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="input"
                />
              </div>
            </div>
            <div>
              <label for="last-name" class="block text-sm/6 font-semibold text-fg2 dark:text-fg"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="input"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="email" class="block text-sm/6 font-semibold text-fg2 dark:text-fg"
                >Email</label
              >
              <div class="mt-2.5">
                <input type="email" name="email" id="email" autocomplete="email" class="input" />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="phone-number" class="block text-sm/6 font-semibold text-fg2 dark:text-fg"
                >Phone number</label
              >
              <div class="mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="tel"
                  class="input"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block text-sm/6 font-semibold text-fg2 dark:text-fg"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea name="message" id="message" rows="4" class="input" />
              </div>
            </div>
          </div>
          <div class="mt-8 flex justify-end">
            <button type="submit" class="btn">Send message</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  <template>
    <button @click="showModal = true">Open Modal</button>

    <ModalBase v-model="showModal">
      <template #header>
        <h2 class="text-xl font-bold">Watch Talk</h2>
      </template>

      <p>Send repairs, ask questions, or just chat horology.</p>

      <template #footer>
        <button class="btn" @click="showModal = false">Close</button>
      </template>
    </ModalBase>
  </template>
</template>

<script setup>
import { ref } from 'vue'
import { CurrencyPoundIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import ModalBase from '@/components/ModalBase.vue'

const showModal = ref(false)
</script>
