<template>
  <section
    class="text-gray-900 py-16 md:py-24 bg-cover bg-center"
    :class="segmentBgClass"
    :style="sectionStyle"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Flex: column on mobile (text top, image bottom via order), row on md+ with flex-nowrap so both stay on one line -->
      <div class="flex flex-col md:flex-row md:flex-nowrap gap-12 items-center">
        <!-- Image column: 50% on md+, order controls left/right -->
        <div class="flex justify-center w-full md:w-1/2 md:min-w-0" :class="imageOrderClass">
          <div
            class="w-64 h-64 md:w-120 md:h-120 rounded-full overflow-hidden shrink-0 border-4 border-cream shadow-xl"
            aria-hidden
          >
            <AppImage :src="imageSrc" :alt="imageAlt" class="w-full h-full object-cover" />
          </div>
        </div>
        <!-- Text column: 50% on md+ -->
        <div
          class="w-full md:w-1/2 md:min-w-0 text-center"
          :class="[textOrderClass, textAlignClass]"
        >
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
            {{ title }}
          </h2>
          <p
            v-for="(paragraph, index) in paragraphs"
            :key="index"
            class="text-lg text-gray-700 leading-relaxed"
            :class="{ 'mb-4': index < paragraphs.length - 1 }"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AppImage from '@/components/AppImage.vue'
import images from '@/assets/images'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  paragraphs: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((item) => typeof item === 'string'),
  },
  imageSrc: {
    type: String,
    default: () => images.birds_eye_view,
  },
  imageAlt: {
    type: String,
    default: 'Laura Folk Fair',
  },
  /** When true, image is on the left and text on the right. When false, reversed. */
  imageOnLeft: {
    type: Boolean,
    default: true,
  },
  /** Tailwind background class (e.g. 'bg-white'). Fallback when imageBackground is set. */
  segmentBgColor: {
    type: String,
    default: 'bg-white',
  },
  /** Optional image URL for section background. When set, used as background-image (cover/center). */
  imageBackground: {
    type: String,
    default: '',
  },
})

const sectionStyle = computed(() =>
  props.imageBackground ? { backgroundImage: `url(${props.imageBackground})` } : {},
)
const segmentBgClass = computed(() => props.segmentBgColor)

// Mobile: text first (order-1), image second (order-2). Md+: swap for side-by-side placement.
const imageOrderClass = computed(() =>
  props.imageOnLeft ? 'order-2 md:order-1' : 'order-2 md:order-2',
)
const textOrderClass = computed(() =>
  props.imageOnLeft ? 'order-1 md:order-2' : 'order-1 md:order-1',
)
const textAlignClass = computed(() => (props.imageOnLeft ? 'md:text-left' : 'md:text-right'))
</script>
