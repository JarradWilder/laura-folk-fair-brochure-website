<template>
  <section :class="backgroundColor" class="pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-3xl mb-10">
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
      <div class="flex flex-col lg:flex-row gap-10 items-start">
        <div
          class="flex-1 w-full min-w-0 rounded-xl overflow-hidden border border-gray-200 shadow-sm aspect-video lg:aspect-[16/10]"
        >
          <iframe
            :src="mapsEmbedUrl"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Map showing fair location"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  /** Intro paragraphs above the map */
  paragraphs: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((item) => typeof item === 'string'),
  },
  /** Full address for display and map (e.g. "Herbert Street, Laura SA 5480") */
  address: {
    type: String,
    default: 'Herbert Street, Laura SA 5480',
  },
  /** Background color of the section */
  backgroundColor: {
    type: String,
    default: 'white',
  },
})

const mapsSearchUrl = computed(
  () => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(props.address)}`,
)
const mapsEmbedUrl = computed(
  () => `https://www.google.com/maps?q=${encodeURIComponent(props.address)}&output=embed`,
)
</script>
