<template>
  <div class="relative w-full h-full">
    <div
      class="relative mx-auto max-w-7xl grid grid-cols-1 gap-0 lg:grid-cols-2 px-4 sm:px-12 md:px-24 lg:px-4 z-10"
    >
      <div
        class="h-full flex flex-col gap-6 bg-primary border border-brdr rounded-b border-t-0 lg:border-r-0 lg:rounded-bl"
      >
        <GetInTouch />
        <hr class="lg:hidden w-full mask-x-from-0%" />
        <div
          class="flex gap-x-1 pl-2 md:pl-8 pb-4 items-center text-xl text-fg font-sec font-medium w-fit cursor-pointer hover:text-acc hover:font-semibold duration-75"
          @click="showModal = true"
        >
          <CurrencyPoundIcon class="size-6 stroke-1.5" />
          <p>Price list</p>
        </div>
      </div>
      <div class="w-full flex flex-col items-center">
        <ContactForm />
        <ModalBase v-model="showModal">
          <template #header>
            <h2 class="text-2xl font-medium tracking-wider text-center text-fg font-sec">
              Service Price List
            </h2>
          </template>
          <PriceList />
          <template #footer>
            <div class="text-center">
              <button @click="showModal = false" class="btn">Close</button>
            </div>
          </template>
        </ModalBase>
      </div>
    </div>
    <!-- FIXED BACKGROUND -->
    <div class="fixed bottom-0 right-0 min-h-fit max-h-full min-w-full max-w-full">
      <div
        class="static bg-cover bg-[url(../assets/pictures/MechBg.webp)] dark:bg-[url(../assets/pictures/MechBg-Light.webp)] dark:brightness-50 min-w-screen min-h-[400px] lg:min-h-[600px] max-w-screen max-h-[600px] isolate pointer-events-none z-0"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { CurrencyPoundIcon } from '@heroicons/vue/24/outline'
import ModalBase from '@/components/ModalBase.vue'
import PriceList from '@/components/PriceList.vue'
import GetInTouch from '@/components/GetInTouch.vue'
import ContactForm from '@/components/ContactForm.vue'
const showModal = ref(false)
</script>
