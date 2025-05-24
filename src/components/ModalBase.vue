<!-- ModalBase.vue -->
<template>
  <teleport to="body">
    <transition name="modal">
      <div
        v-if="isOpen"
        class="fixed top-0 left-0 z-[99] flex h-full w-full items-center justify-center bg-black/50 transition-all duration-initial sm:items-center"
        @click.self="close"
        @keydown.esc="close"
        tabindex="0"
        ref="modalRoot"
      >
        <div
          class="bg-primary max-h-[90dvh] w-full overflow-y-auto rounded-t-2xl shadow-xl sm:max-w-lg sm:rounded-xl"
          role="dialog"
          aria-modal="true"
        >
          <div class="p-4 sm:p-6">
            <header
              v-if="$slots.header"
              class="bg-primary border-fg/10 sticky top-0 z-10 mb-4 border-b py-3"
            >
              <slot name="header" />
            </header>

            <main class="space-y-4">
              <slot />
            </main>

            <footer
              v-if="$slots.footer"
              class="bg-primary border-fg/10 sticky bottom-0 mt-6 border-t py-3"
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
