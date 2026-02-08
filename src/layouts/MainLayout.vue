<template>
  <div class="bg-white min-h-screen">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter :curve-fill="footerFillColor" />
  </div>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

defineProps({
  /** Fill color for the footer's top curve. Key from @/theme/segmentColors (e.g. 'white', 'primary-dark'). */
  footerFillColor: {
    type: String,
    default: 'white',
  },
})
</script>
