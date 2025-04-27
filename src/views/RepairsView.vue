<template>
  <div class="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 px-4 sm:px-8">
    <div class="h-full flex flex-col gap-6">
      <GetInTouch />
      <div
        class="flex gap-x-1 items-center mt-10 text-xl text-fg w-fit cursor-pointer hover:text-acc"
        @click="showModal = true"
      >
        <CurrencyPoundIcon class="size-5.5 stroke-1" />
        <p>Price list</p>
      </div>
    </div>
    <div class="h-full flex flex-col">
      <ContactForm />
      <ModalBase v-model="showModal">
        <template #header>
          <h2 class="text-2xl font-bold text-center text-fg">Service Price List</h2>
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
