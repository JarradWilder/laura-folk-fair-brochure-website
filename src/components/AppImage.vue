<template>
  <img
    v-if="effectiveSrc && !showPlaceholder"
    :src="effectiveSrc"
    :alt="alt"
    class="max-w-full h-auto object-cover"
    v-bind="$attrs"
    @error="showPlaceholder = true"
  />
  <span
    v-else
    class="block max-w-full h-auto bg-gray-100 relative"
    v-bind="$attrs"
    role="img"
    :aria-label="placeholderAriaText"
  >
    <img
      src="/images/placeholder.jpeg"
      alt=""
      class="w-full h-full object-cover"
      aria-hidden="true"
    />
    <span class="absolute inset-0 flex items-center justify-center text-gray-500 text-sm font-medium pointer-events-none">
      {{ placeholderAriaText }}
    </span>
  </span>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
})

const showPlaceholder = ref(false)

const effectiveSrc = computed(() => (props.src && props.src.trim()) || '')

const placeholderAriaText = computed(() =>
  props.alt ? `Image unavailable: ${props.alt}` : 'Image unavailable',
)

watch(
  () => props.src,
  () => {
    showPlaceholder.value = false
  },
)

defineOptions({
  inheritAttrs: false,
})
</script>
