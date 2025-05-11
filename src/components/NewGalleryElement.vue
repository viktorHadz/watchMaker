<script setup>
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'
import placeHolder from './icons/placeHolder.vue'

const newPost = ref({
  title: '',
  bodyText: '',
  titleImageUrl: [],
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

// Handle file input (upload) for title image
const insertNewTitleImage = (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  const reader = new FileReader()
  reader.onload = (e) => {
    newPost.value.titleImageUrl = [e.target.result]
  }
  reader.readAsDataURL(file)
}

// Drag and drop zone setup
const titleDropZoneRef = ref(null)
function onDrop(droppedFiles) {
  const fileArray = Array.from(droppedFiles)
  const imageFile = fileArray.find((file) =>
    ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
  )
  if (!imageFile) return

  const reader = new FileReader()
  reader.onload = (e) => {
    newPost.value.titleImageUrl = [e.target.result]
  }
  reader.readAsDataURL(imageFile)
}

const { isOverDropZone } = useDropZone(titleDropZoneRef, {
  onDrop,
  dataTypes: ['image/jpeg', 'image/png', 'image/webp'],
  multiple: false,
})

// Dummy handler for extra image input
function handleFileChange(event) {
  const fileArray = Array.from(event.target.files || [])
  fileArray.forEach((file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      newPost.value.extraImagesUrl.push(e.target.result)
    }
    reader.readAsDataURL(file)
  })
}

function insertNew() {
  console.log('Creating new post:', newPost.value)
}
</script>

<template>
  <div class="">
    <div class="mb-4 border rounded border-brdr flex flex-col w-full p-4 gap-4">
      <div class="text-center font-semibold font-sec text-2xl">New Gallery Element</div>
      <div class="flex gap-4 justify-between">
        <!-- Title Image Section -->
        <div>
          <div class="text-start font-semibold font-sec text-lg">Title Image</div>

          <div
            v-if="newPost.titleImageUrl.length === 0"
            ref="titleDropZoneRef"
            :class="[
              'h-40 w-40 flex flex-col items-center justify-center text-center transition',
              isOverDropZone
                ? 'border-acc bg-acc/10'
                : 'px-4 border-brdr/80 border-dashed border-2 mb-4 rounded-xs',
            ]"
          >
            <placeHolder class="size-32 text-acc"></placeHolder>
            <span class="text-xs">Drag and drop title image here</span>
          </div>

          <div v-else class="mb-4 border rounded overflow-hidden w-40 h-40">
            <img
              :src="newPost.titleImageUrl[0]"
              alt="Title Image"
              class="w-full h-full object-cover"
            />
          </div>

          <input
            type="file"
            id="title-upload"
            name="title-image"
            accept="image/jpeg,image/png,image/webp"
            class="hidden"
            @change="insertNewTitleImage"
          />
          <label for="title-upload" class="btn p-1"> Upload Title Image </label>
        </div>

        <!-- Extra Images Section -->
        <div class="w-full">
          <div class="text-start font-semibold font-sec text-lg">Extra Images</div>
          <div class="border-brdr/80 text-center border-dashed border-2 rounded-xs mb-4">
            <div class="px-4 py-2 flex justify-around items-center">
              <img
                v-for="(img, index) in newPost.extraImagesUrl"
                :key="index"
                :src="img"
                class="size-28 object-cover rounded"
              />
              <placeHolder
                v-if="newPost.extraImagesUrl.length === 0"
                class="size-28 text-brdr/80"
              ></placeHolder>
            </div>
            <span class="text-xs">Upload or drag extra images here (drag not implemented yet)</span>
          </div>
          <input
            type="file"
            id="extra-upload"
            name="extra-images"
            accept="image/jpeg,image/png,image/webp"
            multiple
            class="hidden"
            @change="handleFileChange"
          />
          <label for="extra-upload" class="btn p-1"> Upload Extra Images </label>
        </div>
      </div>

      <!-- Post Title -->
      <div>
        <input
          v-model="newPost.title"
          type="text"
          class="input"
          spellcheck="true"
          placeholder="New post title..."
          id="new-element-text"
        />
      </div>

      <!-- Post Body -->
      <div>
        <textarea
          v-model="newPost.bodyText"
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

    <!-- Preview Files List -->
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
