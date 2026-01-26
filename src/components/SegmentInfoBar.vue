<template>
  <section
    class="text-gray-900 py-16 shadow-lg wave-divider-top wave-divider"
    :class="bgColorClass"
    style="margin-top: -1px;"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div :class="gridClass" class="gap-6 text-center">
        <div v-for="(item, index) in items" :key="index">
          <h3 class="font-bold text-xl mb-3">{{ item.label }}</h3>
          <p class="text-base font-semibold">{{ item.value }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator: (items) => {
      return items.every(item => item.label && item.value)
    }
  },
  columns: {
    type: Number,
    default: 3,
    validator: (value) => [2, 3, 4].includes(value)
  },
  bgColor: {
    type: String,
    default: 'white',
    validator: (value) => ['transparent', 'white', 'gray', 'cream', 'blue-dark'].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'compact'].includes(value)
  }
})

const bgColorClass = computed(() => {
  const colorMap = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    gray: 'bg-gray-50',
    cream: 'bg-lff-cream',
    'blue-dark': 'bg-lff-blue-dark text-white'
  }
  return colorMap[props.bgColor] || 'bg-white'
})

const gridClass = computed(() => {
  const columnMap = {
    2: 'grid grid-cols-1 md:grid-cols-2',
    3: 'grid grid-cols-1 md:grid-cols-3',
    4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  }
  return columnMap[props.columns] || 'grid grid-cols-1 md:grid-cols-3'
})
</script>

<style scoped>
/* Wave divider styles will be handled by global CSS */
</style>
