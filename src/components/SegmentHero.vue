<template>
  <!-- reduce the top padding for mobile only -->
  <section
    class="text-white relative flex overflow-visible bg-cover bg-center"
    :class="[segmentBgClass, variant === 'default' && 'h-[640px] md:h-[700px]']"
    :style="sectionStyle"
  >
    <!-- Teal tint overlay when using image background -->
    <div
      v-if="imageBackground"
      class="absolute inset-0 bg-primary/60 pointer-events-none z-[1]"
      aria-hidden
    />
    <div
      class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full"
      :class="variant === 'default' && 'flex-1 flex flex-col justify-center py-8 md:py-12'"
    >
      <template v-if="variant === 'home'">
        <AppImage
          :src="logoUrl"
          alt="Laura Folk Fair"
          class="mx-auto mb-8 h-28 w-28 md:h-80 md:w-80 object-contain"
        />
        <h1 class="mb-8">
          WELCOME TO THE<br /><span class="text-accent-yellow">LAURA FOLK FAIR</span>
        </h1>
        <p v-if="subtitle" class="text-2xl md:text-3xl font-bold mb-6">{{ subtitle }}</p>
        <p v-if="description" class="text-xl md:text-2xl mb-4">{{ description }}</p>
      </template>
      <template v-else>
        <h1 class="mb-6">{{ title }}</h1>
        <p v-if="description" class="text-xl md:text-2xl max-w-3xl mx-auto">{{ description }}</p>
      </template>

      <template v-if="variant === 'home'">
        <p v-if="eventDates" class="text-xl md:text-2xl mb-8 font-semibold">{{ eventDates }}</p>
        <p v-if="location" class="text-lg md:text-xl mb-12 opacity-90">{{ location }}</p>
      </template>

      <div
        v-if="ctaPrimary || ctaSecondary"
        class="flex flex-col sm:flex-row gap-6 justify-center pb-10"
      >
        <router-link
          v-if="ctaPrimary"
          :to="ctaPrimary.to"
          class="inline-block font-extrabold py-5 px-12 rounded-full uppercase tracking-wide text-lg no-underline text-white bg-accent shadow-[0_6px_20px_rgba(225,105,0,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(225,105,0,0.6)] hover:bg-[#c55a00]"
          @click="handleCTAClick(ctaPrimary)"
        >
          {{ ctaPrimary.text }}
        </router-link>
        <router-link
          v-if="ctaSecondary"
          :to="ctaSecondary.to"
          class="inline-block font-extrabold py-5 px-12 rounded-full uppercase tracking-wide text-lg no-underline text-primary bg-white shadow-[0_6px_20px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:bg-gray-50"
          @click="handleCTAClick(ctaSecondary)"
        >
          {{ ctaSecondary.text }}
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import AppImage from '@/components/AppImage.vue'
import images from '@/assets/images'

const logoUrl = images.logo

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  eventDates: {
    type: String,
    default: '',
  },
  location: {
    type: String,
    default: '',
  },
  ctaPrimary: {
    type: Object,
    default: null,
  },
  ctaSecondary: {
    type: Object,
    default: null,
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'home'].includes(value),
  },
  /** Tailwind background class (e.g. 'bg-primary'). Fallback when imageBackground is set. */
  segmentBgColor: {
    type: String,
    default: 'bg-primary',
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

const router = useRouter()

const handleCTAClick = (cta) => {
  if (cta.query) {
    router.push({
      path: cta.to,
      query: cta.query,
    })
  }
}
</script>
