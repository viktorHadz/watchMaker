<script setup>
import { ref } from 'vue'
import { useDropZone } from '@vueuse/core'
import placeHolder from './icons/placeHolder.vue'
import { useToastStore } from '@/stores/toast'
const toast = useToastStore()
import pocketWatch from './icons/pocketWatch.vue'
import { useDateFormat, useNow } from '@vueuse/core'

const newPost = ref({
  title: '',
  bodyText: '',
  titleImageUrl: [],
  extraImagesUrl: [],
})

const posts = ref([])
function insertNew() {
  if (!newPost.value.title) {
    toast.showToast('Post title is required', 'error')
    return
  }
  if (newPost.value.titleImageUrl.length === 0) {
    toast.showToast('Title image is required', 'error')
    return
  }
  if (!newPost.value.bodyText) {
    toast.showToast('Post body is required', 'error')
    return
  }
  const date = captureDate()
  const post = {
    title: newPost.value.title,
    bodyText: newPost.value.bodyText,
    titleImageUrl: newPost.value.titleImageUrl[0],
    extraImagesUrl: [...newPost.value.extraImagesUrl],
    date: date,
  }

  posts.value.push(post)

  // Reset form
  newPost.value = {
    title: '',
    bodyText: '',
    titleImageUrl: [],
    extraImagesUrl: [],
    date: null,
  }

  console.log('Post created:', post)
  toast.showToast('Post created!', 'success')
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
const formatedCurrentDate = useDateFormat(useNow(), 'DD-MM-YYYY HH:mm:ss')
const date = ref(null)
function captureDate() {
  const toCapture = formatedCurrentDate.value
  toast.showToast(date.value)
  return (date.value = toCapture)
}
</script>

<template>
  <div>
    <section
      class="border-brdr from-sec/80 to-sec text-fg2 mx-auto mb-4 flex w-full flex-col gap-6 rounded border bg-linear-to-br p-4 md:max-w-2xl md:px-8 lg:max-w-4xl 2xl:my-8 2xl:max-w-7xl"
    >
      <button class="btn" @click="toast.showToast('TOasting', 'error')">Toast</button>

      <header class="font-sec text-center text-2xl font-semibold md:text-3xl">
        New Gallery Post
      </header>

      <!-- Image Title & Extras -->
      <section class="flex flex-col gap-8 md:flex-row md:gap-x-12">
        <!-- Title Image Section -->
        <section class="flex flex-1 flex-col space-y-4">
          <h2 class="font-sec text-center text-lg font-semibold">Title Image</h2>
          <div
            v-if="newPost.titleImageUrl.length === 0"
            ref="titleDropZoneRef"
            :class="[
              'flex flex-col items-center justify-center rounded-xs border-2 border-dashed text-center transition md:min-h-[250px]',
              isOverDropZone ? 'border-acc bg-acc/10' : 'border-brdr/80 px-0 sm:px-4',
            ]"
          >
            <div class="flex w-full items-center justify-around py-4">
              <pocketWatch
                class="text-acc/80 dark:text-acc/40 size-14 -rotate-30 stroke-5 sm:size-26 md:hidden"
              />
              <placeHolder class="text-acc dark:text-acc/60 size-22 sm:size-32" />
              <pocketWatch
                class="text-acc/80 dark:text-acc/40 size-14 rotate-30 stroke-5 sm:size-26 md:hidden"
              />
            </div>
            <span class="hidden truncate p-2 text-sm md:block">Drag and drop title image here</span>
          </div>
          <!-- Title Image Preview -->
          <div v-else class="flex items-center justify-center py-4">
            <div class="border-brdr bg-muted/20 aspect-square w-40 overflow-hidden rounded border">
              <img
                :src="newPost.titleImageUrl[0]"
                alt="Title Image"
                class="h-full w-full object-cover"
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
          <div class="flex justify-center pt-2">
            <label for="title-upload" class="btn">Upload Title Image</label>
          </div>
        </section>

        <!-- Extra Images Section -->
        <section class="flex flex-1 flex-col space-y-4">
          <h2 class="font-sec text-center text-lg font-semibold">Extra Images</h2>
          <!-- Drop Zone Extras -->
          <div
            ref="extraImageDropZoneRef"
            :class="[
              'flex flex-col items-center justify-center rounded-xs border-2 border-dashed text-center transition md:min-h-[250px]',
              isOverExtraDropZone ? 'border-acc bg-acc/10 shrink-0' : 'border-brdr/80 px-4',
            ]"
          >
            <div
              v-if="newPost.extraImagesUrl.length === 0"
              class="flex flex-col items-center justify-around py-4"
            >
              <div>
                <pocketWatch
                  class="text-acc/80 dark:text-acc/40 size-14 -rotate-30 stroke-5 sm:size-26 md:hidden"
                />
                <placeHolder class="text-acc dark:text-acc/60 size-22 sm:size-32" />
                <pocketWatch
                  class="text-acc/80 dark:text-acc/40 size-14 rotate-30 stroke-5 sm:size-26 md:hidden"
                />
              </div>
              <span class="text-sm">Drag and drop extra images here</span>
            </div>

            <!-- Extra Image Previews -->
            <div
              v-else
              class="grid grid-cols-2 justify-items-center gap-4 py-4 sm:grid-cols-3 lg:grid-cols-2"
            >
              <div
                v-for="(img, index) in newPost.extraImagesUrl"
                :key="index"
                class="border-brdr bg-muted/20 aspect-square w-40 overflow-hidden rounded border"
              >
                <img :src="img" class="h-full w-full object-cover" />
              </div>
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
          <div class="flex justify-center pt-2">
            <label for="extra-upload" class="btn">Upload Extra Images</label>
          </div>
        </section>
      </section>

      <!-- Post Title & Body -->
      <section class="my-6 space-y-6">
        <div>
          <h2 class="font-sec mb-1 text-lg font-semibold">Post Title</h2>
          <input
            v-model="newPost.title"
            type="text"
            class="input w-full text-lg placeholder:text-lg"
            placeholder="New post title..."
          />
        </div>

        <div>
          <h2 class="font-sec mb-1 text-lg font-semibold">Post Body</h2>
          <textarea
            v-model="newPost.bodyText"
            rows="6"
            class="input w-full text-lg placeholder:text-lg"
            placeholder="New post body..."
          ></textarea>
        </div>

        <div class="flex justify-center">
          <button class="btn" @click="insertNew">Create New</button>
        </div>
      </section>
    </section>

    <hr class="text-brdr my-8 mask-x-from-70% mask-x-to-98%" />

    <!-- Preview Files List -->
    <ul
      role="list"
      class="mb-24 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <li v-for="(post, i) in posts" :key="i" class="relative">
        <div
          class="group focus-within:ring-acc bg-sec/90 overflow-hidden rounded focus-within:ring-2 md:max-h-[350px]"
        >
          <div class="flex justify-center p-2">
            <img
              :src="post.titleImageUrl"
              alt=""
              class="pointer-events-none aspect-10/7 object-cover group-hover:opacity-85 md:max-h-[200px]"
            />
            <button type="button" class="text-fg absolute inset-0 focus:outline-hidden">
              <span class="sr-only">View details for {{ post.title }}</span>
            </button>
          </div>
          <div class="mx-2 flex justify-between p-2">
            <div>
              <p class="text-fg2 pointer-events-none block truncate text-xl font-medium">
                {{ post.title }}
              </p>
              <p class="text-fg2/80 pointer-events-none line-clamp-2 block text-base font-medium">
                {{ post.bodyText }}
              </p>
            </div>
            <p class="text-fg2">Date</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
