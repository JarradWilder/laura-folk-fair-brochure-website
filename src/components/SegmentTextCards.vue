<template>
  <section
    class="relative py-16 md:py-24 bg-cover bg-center"
    :class="segmentBgColor"
    :style="sectionStyle"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 class="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
        {{ title }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(paragraph, index) in items"
          :key="index"
          class="segment-text-card rounded-xl p-6 text-start"
          :class="cardBgColor"
        >
          <p class="segment-text-card-content text-gray-700 leading-relaxed">
            <span class="segment-text-card-quote segment-text-card-quote--open" aria-hidden="true">&#8220;</span>
            {{ paragraph }}
            <span class="segment-text-card-quote segment-text-card-quote--close" aria-hidden="true">&#8221;</span>
          </p>
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
  /** Array of paragraph strings, one per card */
  items: {
    type: Array,
    required: true,
    validator: (arr) => arr.every((item) => typeof item === 'string'),
  },
  /** Tailwind background class for the segment */
  segmentBgColor: {
    type: String,
    default: 'bg-white',
  },
  /** Tailwind background class for each card (no border by default) */
  cardBgColor: {
    type: String,
    default: 'bg-white',
  },
  /** Optional image URL for section background */
  imageBackground: {
    type: String,
    default: '',
  },
})

const sectionStyle = computed(() =>
  props.imageBackground ? { backgroundImage: `url(${props.imageBackground})` } : {},
)
</script>

<style scoped>
.segment-text-card-content {
  position: relative;
  overflow: hidden;
}
.segment-text-card-content::after {
  content: '';
  display: table;
  clear: both;
}
.segment-text-card-quote {
  font-family: Georgia, 'Times New Roman', serif;
  font-size: 4rem;
  line-height: 0.85;
  color: var(--color-primary);
  opacity: 0.35;
  pointer-events: none;
}
.segment-text-card-quote--open {
  float: left;
  margin: 0 0.5rem 0.25rem 0;
}
.segment-text-card-quote--close {
  margin-left: 0.25rem;
  margin-bottom: -3.5rem;
  vertical-align: bottom;
  line-height: 0;
}
</style>
