<template>
  <div class="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:divide-x">
    <div class="h-full">
      <GetInTouch />
      <div
        class="flex gap-x-1 items-center mt-10 text-xl/7 text-fg w-fit cursor-pointer hover:text-acc"
        @click="showModal = true"
      >
        <CurrencyPoundIcon class="size-5.5 stroke-1" aria-hidden="true" />
        <p>Price list</p>
      </div>
    </div>
    <div class="h-full">
      <ContactForm />
      <ModalBase v-model="showModal">
        <template #header>
          <h2 class="text-2xl text-fg font-semibold">Watch Repair Price Guide</h2>
        </template>
        <PriceList></PriceList>
        <template #footer>
          <button class="btn" @click="showModal = false">Close</button>
        </template>
      </ModalBase>
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
