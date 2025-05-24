<script setup>
import { reactive, ref } from 'vue'
import * as z from 'zod'
import { useToastStore } from '@/stores/toast'

const toast = useToastStore()

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
})

const formSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(3, { message: 'First name must be at least 3 characters' })
    .max(50, { message: 'First name cannot exceed 50 characters' })
    .nonempty({ message: 'First name field cannot be empty' }),

  lastName: z
    .string()
    .trim()
    .min(3, { message: 'Last name must be at least 3 characters' })
    .max(50, { message: 'Last name cannot exceed 50 characters' })
    .nonempty({ message: 'Last name field cannot be empty' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Field must be a valid email address' })
    .max(254, { message: 'Email cannot exceed 254 characters' })
    .nonempty({ message: 'Email field cannot be empty' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message is too long' })
    .nonempty({ message: 'Message field cannot be empty' }),
  phone: z
    .string()
    .trim()
    .max(25, { message: 'Phone number too long' })
    .optional()
    .or(z.literal('')),
})

const formattedError = ref(null)
const displayErrors = reactive({
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  phone: '',
})

const onSubmit = () => {
  const result = formSchema.safeParse(form)
  if (!result.success) {
    console.log('Issue logged by result error: ', result.error.issues)
    formattedError.value = result.error.format()
    displayErrors.firstName = formattedError?.value.firstName?._errors[0]
    displayErrors.lastName = formattedError?.value.lastName?._errors[0]
    displayErrors.email = formattedError?.value.email?._errors[0]
    displayErrors.message = formattedError?.value.message?._errors[0]
    displayErrors.phone = formattedError?.value.phone?._errors[0]
    toast.showToast('Please fix the errors.', 'error')

    return
  } else {
    console.log(result)
    console.log(result.data)

    const formData = result.data
    postData(formData)

    clearForm()
    toast.showToast('Your message was sent successfully!', 'success')
  }
}
const clearForm = () => {
  form.firstName = ''
  form.lastName = ''
  form.email = ''
  form.message = ''
  form.phone = ''
}
const postData = async (formData) => {
  try {
    const res = await fetch('/api/form/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const result = await res.json()
    console.log('This is the result received from the server', result)
  } catch (error) {
    console.log('Submission error =>', error)
    toast.showToast('Submission failed. Try again later.', 'error')
  }
}

const selectedFiles = ref([])

const handleFileChange = (event) => {
  const files = Array.from(event.target.files)

  // Combine old and new, limit to 5, and filter duplicates by name
  const combined = [...selectedFiles.value, ...files]
  const unique = Array.from(new Map(combined.map((f) => [f.name, f])).values())
  selectedFiles.value = unique.slice(0, 5)

  // Optional: Show toast or warning if limit exceeded
  if (combined.length > 5) {
    toast.showToast('You can only upload up to 5 images.', 'error')
  }

  // Reset the input value to allow re-selecting the same file again
  event.target.value = ''
}

// validate form on submission. If it doesnt conform return errors visually and notify
// after validation send to backend
// on backend validate again
// email to designated email
</script>
<template>
  <form
    action="#"
    method="POST"
    class="from-sec/80 to-sec rounded-x dark:border-brdr z-10 flex w-full flex-1 items-center justify-center rounded-t bg-linear-to-br px-4 pt-8 pb-24 sm:px-8 md:px-10 lg:rounded-t-none lg:rounded-b lg:pb-8 dark:border dark:border-t-0"
  >
    <div class="h-full w-full lg:max-w-lg">
      <div class="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2">
        <div>
          <div class="flex items-baseline">
            <label
              for="first-name"
              class="font-sec text-fg2 dark:text-fg block text-sm font-medium tracking-wide"
              >First name</label
            >
            <span class="mx-2 text-xl text-red-500 dark:text-red-400">*</span>
          </div>
          <div class="relative">
            <input
              type="text"
              name="first-name"
              id="first-name"
              maxlength="50"
              autocomplete="given-name"
              class="input"
              v-model="form.firstName"
            />
            <Transition>
              <div
                v-if="displayErrors.firstName"
                class="absolute mt-0.5 line-clamp-2 flex px-0.5 text-xs leading-3.5 tracking-normal text-pretty text-red-400 sm:text-sm"
              >
                {{ displayErrors.firstName }}
              </div>
            </Transition>
          </div>
        </div>
        <div>
          <div class="flex items-baseline">
            <label
              for="last-name"
              class="font-sec text-fg2 dark:text-fg block text-sm font-medium tracking-wide"
              >Last name</label
            >
            <span class="mx-2 text-xl text-red-500">*</span>
          </div>
          <div class="relative">
            <input
              type="text"
              name="last-name"
              id="last-name"
              maxlength="50"
              autocomplete="family-name"
              class="input"
              v-model="form.lastName"
            />
            <Transition>
              <div
                v-if="displayErrors.lastName"
                class="absolute mt-0.5 line-clamp-2 flex px-0.5 text-xs leading-3.5 -tracking-normal text-pretty text-red-400 sm:text-sm"
              >
                {{ displayErrors.lastName }}
              </div>
            </Transition>
          </div>
        </div>
        <div class="sm:col-span-2">
          <div class="flex items-baseline">
            <label
              for="email"
              class="font-sec text-fg2 dark:text-fg block text-sm font-medium tracking-wide"
              >Email</label
            >
            <span class="mx-2 text-xl text-red-500">*</span>
          </div>
          <div class="relative">
            <input
              type="email"
              name="email"
              id="email"
              maxlength="254"
              autocomplete="email"
              class="input"
              v-model="form.email"
            />
            <Transition>
              <div
                v-if="displayErrors.email"
                class="absolute mt-0.5 line-clamp-2 flex px-0.5 text-xs leading-3.5 -tracking-normal text-pretty text-red-400 sm:text-sm"
              >
                {{ displayErrors.email }}
              </div>
            </Transition>
          </div>
        </div>
        <div class="sm:col-span-2">
          <label
            for="phone-number"
            class="font-sec text-fg2 dark:text-fg block text-sm font-medium tracking-wide"
            >Phone number</label
          >
          <div class="relative">
            <input
              type="tel"
              name="phone-number"
              id="phone-number"
              maxlength="25"
              autocomplete="tel"
              class="input"
              v-model="form.phone"
            />
            <Transition>
              <div
                v-if="displayErrors.phone"
                class="absolute mt-0.5 line-clamp-2 flex px-0.5 text-xs leading-3.5 -tracking-normal text-pretty text-red-400 sm:text-sm"
              >
                {{ displayErrors.phone }}
              </div>
            </Transition>
          </div>
        </div>
        <div class="sm:col-span-2">
          <div class="flex items-center justify-between">
            <p class="font-sec text-fg2 dark:text-fg block text-sm font-medium tracking-wide">
              Images
            </p>
            <label for="file-upload" class="btn p-1"> Choose images </label>
          </div>
          <input
            type="file"
            name="images"
            accept="image/jpeg,image/png,image/webp"
            multiple
            class="hidden"
            id="file-upload"
            @change="handleFileChange"
          />

          <div class="mt-4 flex flex-wrap gap-2">
            <div
              v-for="(file, index) in selectedFiles"
              :key="index"
              class="bg-bg2 dark:bg-bg3 border-fg2 dark:border-fg text-fg2 dark:text-fg max-w-1/2 rounded-lg border px-3 py-2 text-xs shadow-sm"
            >
              {{ file.name }}
            </div>
          </div>
        </div>
        <div class="sm:col-span-2">
          <div class="flex items-baseline">
            <label
              for="message"
              class="font-sec text-fg2 dark:text-fg block text-sm font-medium tracking-wide"
              >Message
            </label>
            <span class="mx-2 text-xl text-red-500">*</span>
          </div>
          <div class="relative">
            <textarea
              name="message"
              id="message"
              maxlength="1000"
              v-model="form.message"
              rows="4"
              class="input"
            />
            <Transition>
              <div
                v-if="displayErrors.message"
                class="absolute mt-0.5 line-clamp-2 flex px-0.5 text-xs leading-3.5 tracking-normal text-pretty text-red-400 sm:text-sm dark:text-red-400"
              >
                {{ displayErrors.message }}
              </div>
            </Transition>
          </div>
        </div>
      </div>
      <div class="mt-8 block space-y-4 text-center sm:flex sm:justify-between">
        <p class="text-fg2 dark:text-fg text-sm">
          Fields marked with
          <span class="mx-0.5 text-red-500 sm:mx-2 sm:text-xl dark:text-red-400">*</span> are
          mandatory
        </p>
        <button type="submit" @click.prevent="onSubmit()" class="btn">Send message</button>
      </div>
    </div>
  </form>
</template>
<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
