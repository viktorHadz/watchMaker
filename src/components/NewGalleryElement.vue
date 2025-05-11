<script setup>
import { ref } from 'vue'
import placeHolder from './icons/placeHolder.vue'
const newFile = ref({
  title: '',
  bodyText: '',
  titleImageUrl: '',
  extraImagesUrl: [],
})
const files = [
  {
    title: 'IMG_4985.HEIC',
    text: '3.9 MB',
    source:
      'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
  },
  // More files...
]
const insertNew = () => {
  console.log('new element inserted')
}
</script>
<template>
  <div class="">
    <div class="mb-4 border rounded border-brdr flex flex-col w-full p-4 gap-4">
      <div class="text-center font-semibold font-sec text-2xl">New Gallery Element</div>
      <div class="flex gap-4 justify-between">
        <div>
          <div class="text-start font-semibold font-sec text-lg">Title Image</div>
          <div
            v-if="newFile.titleImageUrl === ''"
            class="px-4 border-brdr/80 border-2 mb-4 rounded-xs"
          >
            <placeHolder class="size-32 text-acc"></placeHolder>
          </div>
          <input
            type="file"
            name="images"
            accept="image/jpeg,image/png,image/webp"
            multiple
            class="hidden"
            id="new-file-upload"
            @change="handleFileChange"
          />
          <label for="new-file-upload" class="btn p-1"> Upload Title Image </label>
        </div>
        <div class="w-full">
          <div class="text-start font-semibold font-sec text-lg">Extra Images</div>
          <div
            class="px-4 py-2 flex justify-around items-center border-brdr/80 border-2 mb-4 rounded-xs"
          >
            <placeHolder
              v-if="newFile.extraImagesUrl.length === 0"
              class="size-28 text-brdr/80"
            ></placeHolder>
            <placeHolder
              v-if="newFile.extraImagesUrl.length === 0"
              class="size-28 text-brdr/80"
            ></placeHolder>
            <placeHolder
              v-if="newFile.extraImagesUrl.length === 0"
              class="size-28 text-brdr/80"
            ></placeHolder>
            <placeHolder
              v-if="newFile.extraImagesUrl.length === 0"
              class="size-28 text-brdr/80"
            ></placeHolder>
          </div>
          <input
            type="file"
            name="images"
            accept="image/jpeg,image/png,image/webp"
            multiple
            class="hidden"
            id="new-file-upload"
            @change="handleFileChange"
          />
          <label for="new-file-upload" class="btn p-1"> Upload Extra Images </label>
        </div>
      </div>
      <div>
        <input
          v-model="newFile.title"
          type="text"
          class="input"
          spellcheck="true"
          placeholder="New post title..."
          id="new-element-text"
        />
      </div>
      <div>
        <textarea
          v-model="newFile.bodyText"
          type="text"
          class="input"
          spellcheck="true"
          rows="4"
          placeholder="New post body..."
          id="new-element-title"
        ></textarea>
      </div>
      <div class="flex w-full justify-center mb-2">
        <button class="btn text-base p-1" @click="insertNew">Create New</button>
      </div>
    </div>
    <hr class="mask-x-from-70% mask-x-to-98% my-8 text-brdr" />
    <ul
      role="list"
      class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      <li v-for="file in files" :key="file.source" class="relative">
        <div
          class="group overflow-hidden rounded bg-gray-100 focus-within:ring-2 focus-within:ring-acc focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
        >
          <img
            :src="file.source"
            alt=""
            class="pointer-events-none aspect-10/7 object-cover group-hover:opacity-85"
          />
          <button type="button" class="absolute inset-0 focus:outline-hidden text-fg">
            <span class="sr-only">View details for {{ file.title }}</span>
          </button>
        </div>
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-fg">
          {{ file.title }}
        </p>
        <p class="pointer-events-none block text-sm font-medium text-fg/60">{{ file.text }}</p>
      </li>
    </ul>
  </div>
</template>
