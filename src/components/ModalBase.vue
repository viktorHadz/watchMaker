<!-- ModalBase.vue -->
<template>
  <teleport to="body">
    <transition name="modal">
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center sm:items-center bg-black/50"
        @click.self="close"
        @keydown.esc="close"
        tabindex="0"
        ref="modalRoot"
      >
        <div
          class="bg-primary rounded-t-2xl sm:rounded-xl shadow-xl w-full sm:max-w-lg max-h-[90dvh] overflow-y-auto"
          role="dialog"
          aria-modal="true"
        >
          <div class="p-4 sm:p-6">
            <header
              v-if="$slots.header"
              class="mb-4 sticky top-0 bg-primary z-10 py-3 border-b border-fg/10"
            >
              <slot name="header" />
            </header>

            <main class="space-y-4">
              <slot />
            </main>

            <footer
              v-if="$slots.footer"
              class="mt-6 sticky bottom-0 bg-primary py-3 border-t border-fg/10"
            >
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
.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}
.modal-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.modal-enter-to {
  opacity: 1;
  transform: translateY(0);
}
.modal-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.modal-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
