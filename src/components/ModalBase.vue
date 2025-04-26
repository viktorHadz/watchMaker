<template>
  <teleport to="body">
    <transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
        @click.self="close"
        @keydown.esc="close"
        tabindex="0"
        ref="modalRoot"
      >
        <div
          class="bg-primary rounded-xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div class="p-4">
            <header v-if="$slots.header" class="mb-4 sticky top-0 bg-primary z-10 py-2">
              <slot name="header" />
            </header>
            <main class="space-y-4">
              <slot />
            </main>
            <footer v-if="$slots.footer" class="mt-6 sticky bottom-0 bg-primary py-2">
              <slot name="footer" />
            </footer>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['update:modelValue'])

const isOpen = ref(props.modelValue)

watch(
  () => props.modelValue,
  (val) => {
    isOpen.value = val
    if (val) {
      nextTick(() => {
        modalRoot.value?.focus()
      })
    }
  },
)

const modalRoot = ref(null)

function close() {
  emit('update:modelValue', false)
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
