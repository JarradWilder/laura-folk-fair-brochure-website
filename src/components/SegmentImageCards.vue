<template>
  <section class="relative bg-cover bg-center" :class="segmentBgColor" :style="sectionStyle">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(card, index) in cards"
          :key="index"
          class="rounded-xl overflow-hidden shadow-lg flex flex-col max-w-md mx-auto lg:max-w-none"
          :class="card.bgColor"
        >
          <div class="aspect-square w-full rounded-t-xl overflow-hidden shrink-0">
            <AppImage :src="card.imagePath" :alt="card.title" class="w-full h-full object-cover" />
          </div>
          <div class="p-6 flex flex-col flex-1">
            <h3 class="text-xl font-bold mb-2 text-gray-900">
              {{ card.title }}
            </h3>
            <p class="text-gray-700 leading-relaxed flex-1">
              {{ card.text }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import AppImage from '@/components/AppImage.vue'

const props = defineProps({
  /** Tailwind background class for the segment (e.g. 'bg-accent-yellow', 'bg-white'). Used as fallback when imageBackground is set. */
  segmentBgColor: {
    type: String,
    default: 'bg-white',
  },
  /** Optional image URL for section background. When set, used as background-image (cover/center); segmentBgColor remains fallback. */
  imageBackground: {
    type: String,
    default: '',
  },
  /** Cards: { imagePath, title, text, bgColor } – bgColor is a Tailwind bg class (e.g. 'bg-white') */
  cards: {
    type: Array,
    required: true,
    validator: (arr) =>
      arr.every(
        (c) =>
          c &&
          typeof c.imagePath === 'string' &&
          typeof c.title === 'string' &&
          typeof c.text === 'string' &&
          typeof c.bgColor === 'string',
      ),
  },
})

const sectionStyle = computed(() =>
  props.imageBackground
    ? {
        backgroundImage: `url(${props.imageBackground})`,
      }
    : {},
)
</script>
