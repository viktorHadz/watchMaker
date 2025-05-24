<template>
  <div class="relative h-full w-full">
    <div
      class="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-0 px-4 sm:px-12 md:px-24 lg:grid-cols-2 lg:px-4"
    >
      <div
        class="bg-primary border-brdr flex h-full flex-col gap-6 rounded-b border border-t-0 lg:rounded-bl lg:border-r-0"
      >
        <GetInTouch />
        <hr class="w-full mask-x-from-0% lg:hidden" />
        <div
          class="text-fg font-sec hover:text-acc flex w-fit cursor-pointer items-center gap-x-1 pb-4 pl-2 text-lg font-medium duration-75 hover:font-semibold sm:text-xl md:pl-8"
          @click="showModal = true"
        >
          <CurrencyPoundIcon class="stroke-1.5 size-6" />
          <p>Price list</p>
        </div>
      </div>
      <div class="flex w-full flex-col items-center">
        <ContactForm />
        <ModalBase v-model="showModal">
          <template #header>
            <h2 class="text-fg font-sec text-center text-2xl font-medium tracking-wider">
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
    <div class="fixed right-0 bottom-0 max-h-full min-h-fit max-w-full min-w-full">
      <div
        class="pointer-events-none static isolate z-0 max-h-[600px] min-h-[400px] max-w-screen min-w-screen bg-[url(../assets/pictures/MechBg.webp)] bg-cover lg:min-h-[600px] dark:bg-[url(../assets/pictures/MechBg-Light.webp)] dark:brightness-50"
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
