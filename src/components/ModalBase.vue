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
          class="bg-primary p-6 rounded-xl shadow-xl w-full max-w-lg"
          role="dialog"
          aria-modal="true"
        >
          <header v-if="$slots.header" class="mb-4">
            <slot name="header" />
          </header>

          <main>
            <slot />
          </main>

          <footer v-if="$slots.footer" class="mt-6">
            <slot name="footer" />
          </footer>
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
