<template>
  <div
    class="relative w-full overflow-hidden leading-none shrink-0 z-10 -mb-8"
    :class="backgroundClass"
    :style="positionStyle"
    aria-hidden
  >
    <div class="h-28">
      <svg
        class="relative block h-28 w-[calc(151%+1.3px)] left-1/2 -translate-x-1/2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          :class="fillClass"
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { segmentColorClasses } from '@/theme/segmentColors'

const props = defineProps({
  /** Fill color of the wave (section below). Keys from @/theme/segmentColors */
  fill: {
    type: String,
    default: 'white',
  },
  /** Background of the strip above the wave. Keys from @/theme/segmentColors */
  background: {
    type: String,
    default: 'white',
  },
  /** Vertical position in px; positive = lower, negative = raise. Use to fine-tune overlap. */
  position: {
    type: Number,
    default: 0,
  },
  /** z-index so divider paints over the section (default 10) */
  zIndex: {
    type: Number,
    default: 10,
  },
})

const fillClass = computed(() => segmentColorClasses[props.fill]?.fill ?? 'fill-white')
const backgroundClass = computed(() => segmentColorClasses[props.background]?.bg ?? 'bg-white')
const positionStyle = computed(() => {
  const style = {}
  if (props.position !== 0) style.transform = `translateY(${props.position}px)`
  if (props.zIndex != null) style.zIndex = props.zIndex
  return style
})
</script>
