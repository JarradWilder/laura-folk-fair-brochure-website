<template>
  <section
    class="pt-0 pb-12 shadow-lg -mt-px bg-cover bg-center"
    :class="[bgColorClass, textClass]"
    :style="sectionStyle"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div :class="gridClass" class="gap-8 text-center">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="flex flex-col items-center"
          :class="themeColorClass(index)"
        >
          <span
            class="segment-info-bar-icon material-icons mb-3 block leading-none"
            aria-hidden="true"
          >
            {{ itemIcon(item, index) }}
          </span>
          <h3 class="font-bold text-sm md:text-base mb-1 leading-tight">{{ item.label }}</h3>
          <p class="text-lg md:text-xl font-semibold leading-tight max-w-xs">{{ item.value }}</p>
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
      return items.every((item) => item.label && item.value)
    },
  },
  columns: {
    type: Number,
    default: 3,
    validator: (value) => [2, 3, 4].includes(value),
  },
  bgColor: {
    type: String,
    default: 'white',
    validator: (value) => ['transparent', 'white', 'gray', 'cream', 'primary-dark'].includes(value),
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'compact'].includes(value),
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

const bgColorClass = computed(() => {
  const colorMap = {
    transparent: 'bg-transparent',
    white: 'bg-white',
    gray: 'bg-gray-50',
    cream: 'bg-cream',
    'primary-dark': 'bg-primary-dark',
  }
  return colorMap[props.bgColor] || 'bg-white'
})

const textClass = computed(() =>
  props.bgColor === 'primary-dark' ? 'text-white' : 'text-gray-900',
)

const gridClass = computed(() => {
  const columnMap = {
    2: 'grid grid-cols-1 md:grid-cols-2',
    3: 'grid grid-cols-1 md:grid-cols-3',
    4: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }
  return columnMap[props.columns] || 'grid grid-cols-1 md:grid-cols-3'
})

const themeColors = ['text-primary', 'text-primary-dark', 'text-accent', 'text-accent-yellow']
const themeColorClass = (index) => themeColors[index % themeColors.length]

const defaultIcons = ['confirmation_number', 'schedule', 'place', 'info']
const itemIcon = (item, index) => item.icon || defaultIcons[index % defaultIcons.length]
</script>

<style scoped>
/* Override Google Material Icons default 24px so our icons render large */
.segment-info-bar-icon {
  font-size: 4rem !important;
  line-height: 1 !important;
}
@media (min-width: 768px) {
  .segment-info-bar-icon {
    font-size: 5.5rem !important;
  }
}
</style>
