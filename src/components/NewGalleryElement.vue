<script setup>
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'
import placeHolder from './icons/placeHolder.vue'
import ToastElement from '@/components/ToastElement.vue'
import { useToastStore } from '@/stores/toast'
const toast = useToastStore()
import pocketWatch from './icons/pocketWatch.vue'
const newPost = ref({
  title: '',
  bodyText: '',
  titleImageUrl: [],
  extraImagesUrl: [],
})

const posts = ref([])
function insertNew() {
  if (!newPost.value.title || newPost.value.titleImageUrl.length === 0) {
    console.warn('Post must have a title and a title image.')
    return
  }

  const post = {
    title: newPost.value.title,
    bodyText: newPost.value.bodyText,
    titleImageUrl: newPost.value.titleImageUrl[0],
    extraImagesUrl: [...newPost.value.extraImagesUrl],
  }

  posts.value.push(post)

  // Reset form
  newPost.value = {
    title: '',
    bodyText: '',
    titleImageUrl: [],
    extraImagesUrl: [],
  }

  console.log('Post created:', post)
}

const titleDropZoneRef = ref(null)
const extraImageDropZoneRef = ref(null)

// Title Image Drop
const { isOverDropZone } = useDropZone(titleDropZoneRef, {
  onDrop(event) {
    const file = Array.from(event)[0]
    if (!file || !file.type.startsWith('image/')) return
    const reader = new FileReader()
    reader.onload = (e) => {
      newPost.value.titleImageUrl = [e.target.result]
    }
    reader.readAsDataURL(file)
  },
  dataTypes: ['image/jpeg', 'image/png', 'image/webp'],
  multiple: false,
})

// Extra Images Drop
const { isOverDropZone: isOverExtraDropZone } = useDropZone(extraImageDropZoneRef, {
  onDrop(event) {
    Array.from(event).forEach((file) => {
      if (!file || !file.type.startsWith('image/')) return
      const reader = new FileReader()
      reader.onload = (e) => {
        newPost.value.extraImagesUrl.push(e.target.result)
      }
      reader.readAsDataURL(file)
    })
  },
  dataTypes: ['image/jpeg', 'image/png', 'image/webp'],
  multiple: true,
})

// File Upload Fallbacks
function insertNewTitleImage(event) {
  const file = event.target.files?.[0]
  if (!file) return
  const reader = new FileReader()
  reader.onload = (e) => {
    newPost.value.titleImageUrl = [e.target.result]
  }
  reader.readAsDataURL(file)
}

function handleFileChange(event) {
  Array.from(event.target.files || []).forEach((file) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      newPost.value.extraImagesUrl.push(e.target.result)
    }
    reader.readAsDataURL(file)
  })
}
</script>

<template>
  <div>
    <section
      class="mb-4 border rounded border-brdr flex flex-col w-full p-4 gap-6 bg-linear-to-br from-sec/80 to-sec text-fg2 md:max-w-2xl lg:max-w-4xl md:px-8 2xl:max-w-7xl 2xl:my-8 mx-auto"
    >
      <header class="text-center font-semibold font-sec text-2xl md:text-3xl">
        New Gallery Post
      </header>

      <!-- Image Title & Extras -->
      <section class="flex flex-col gap-8 md:flex-row md:gap-x-12">
        <!-- Title Image Section -->
        <section class="flex flex-col flex-1 space-y-4">
          <h2 class="font-semibold font-sec text-lg text-center">Title Image</h2>

          <div
            v-if="newPost.titleImageUrl.length === 0"
            ref="titleDropZoneRef"
            :class="[
              'flex flex-col items-center justify-center text-center transition rounded-xs border-dashed border-2',
              isOverDropZone ? 'border-acc bg-acc/10' : 'px-0 sm:px-4 border-brdr/80',
            ]"
          >
            <div class="flex w-full justify-around items-center py-4">
              <pocketWatch
                class="sm:size-26 size-14 -rotate-30 text-acc/80 dark:text-acc/40 stroke-5 md:hidden"
              />
              <placeHolder class="size-22 sm:size-32 text-acc dark:text-acc/60" />
              <pocketWatch
                class="sm:size-26 size-14 rotate-30 text-acc/80 dark:text-acc/40 stroke-5 md:hidden"
              />
            </div>
            <span class="hidden md:block text-sm truncate p-2">Drag and drop title image here</span>
          </div>
          <!-- Title Image Preview -->
          <div v-else class="flex justify-center items-center py-4">
            <div class="aspect-square w-40 overflow-hidden border rounded bg-muted/20">
              <img
                :src="newPost.titleImageUrl[0]"
                alt="Title Image"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <input
            type="file"
            id="title-upload"
            name="title-image"
            accept="image/jpeg,image/png,image/webp"
            class="hidden"
            @change="insertNewTitleImage"
          />
          <div class="pt-2 flex justify-center">
            <label for="title-upload" class="btn dark:bg-acc/90">Upload Title Image</label>
          </div>
        </section>

        <!-- Extra Images Section -->
        <section class="flex flex-col flex-1 space-y-4">
          <h2 class="font-semibold font-sec text-lg text-center">Extra Images</h2>

          <!-- Drop Zone -->
          <div
            v-if="newPost.extraImagesUrl.length === 0"
            ref="extraImageDropZoneRef"
            :class="[
              'border-dashed border-2 rounded-xs flex flex-col items-center justify-center text-center transition',
              isOverExtraDropZone ? 'border-acc bg-acc/10 shrink-0' : 'px-4 border-brdr/80',
            ]"
          >
            <div class="flex w-full justify-around items-center py-4">
              <pocketWatch
                class="sm:size-26 size-14 -rotate-30 text-acc/80 dark:text-acc/40 stroke-5 md:hidden"
              />
              <placeHolder class="size-22 sm:size-32 text-acc dark:text-acc/60" />
              <pocketWatch
                class="sm:size-26 size-14 rotate-30 text-acc/80 dark:text-acc/40 stroke-5 md:hidden"
              />
            </div>
            <span class="text-sm p-2">Drag and drop extra images here</span>
          </div>

          <!-- Extra Image Previews -->
          <div
            v-else
            class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-4 justify-items-center py-4"
          >
            <div
              v-for="(img, index) in newPost.extraImagesUrl"
              :key="index"
              class="aspect-square w-40 overflow-hidden border rounded bg-muted/20"
            >
              <img :src="img" class="w-full h-full object-cover" />
            </div>
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
          <div class="pt-2 flex justify-center">
            <label for="extra-upload" class="btn dark:bg-acc/90">Upload Extra Images</label>
          </div>
        </section>
      </section>

      <!-- Post Title & Body -->
      <section class="space-y-6 my-6">
        <div>
          <h2 class="font-semibold font-sec text-lg mb-1">Post Title</h2>
          <input
            v-model="newPost.title"
            type="text"
            class="input text-lg w-full placeholder:text-lg"
            placeholder="New post title..."
          />
        </div>

        <div>
          <h2 class="font-semibold font-sec text-lg mb-1">Post Body</h2>
          <textarea
            v-model="newPost.bodyText"
            rows="6"
            class="input text-lg w-full placeholder:text-lg"
            placeholder="New post body..."
          ></textarea>
        </div>

        <div class="flex justify-center">
          <button class="btn dark:bg-acc/90" @click="insertNew">Create New</button>
        </div>
      </section>
    </section>

    <hr class="mask-x-from-70% mask-x-to-98% my-8 text-brdr" />

    <!-- Preview Files List -->
    <ul
      role="list"
      class="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <li v-for="(post, i) in posts" :key="i" class="relative">
        <div
          class="group overflow-hidden rounded bg-gray-100 focus-within:ring-2 focus-within:ring-acc focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
        >
          <img
            :src="post.titleImageUrl"
            alt=""
            class="pointer-events-none aspect-10/7 object-cover group-hover:opacity-85"
          />
          <button type="button" class="absolute inset-0 focus:outline-hidden text-fg">
            <span class="sr-only">View details for {{ post.title }}</span>
          </button>
        </div>
        <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-fg">
          {{ post.title }}
        </p>
        <p class="pointer-events-none block text-sm font-medium text-fg/60">
          {{ post.bodyText }}
        </p>
      </li>
    </ul>
  </div>
</template>
