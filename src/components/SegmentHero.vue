<template>
  <section class="hero-gradient text-white relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h1 v-if="variant === 'home'" class="mb-8">
        WELCOME TO THE<br><span class="text-lff-yellow">LAURA FOLK FAIR</span>
      </h1>
      <h1 v-else class="mb-6">
        {{ title }}
      </h1>
      
      <p v-if="subtitle" class="text-2xl md:text-3xl font-bold mb-6">{{ subtitle }}</p>
      <p v-if="description" class="text-xl md:text-2xl mb-4">{{ description }}</p>
      
      <template v-if="variant === 'home'">
        <p v-if="eventDates" class="text-xl md:text-2xl mb-8 font-semibold">{{ eventDates }}</p>
        <p v-if="location" class="text-lg md:text-xl mb-12 opacity-90">{{ location }}</p>
      </template>
      
      <div v-if="ctaPrimary || ctaSecondary" class="flex flex-col sm:flex-row gap-6 justify-center">
        <router-link
          v-if="ctaPrimary"
          :to="ctaPrimary.to"
          class="btn-primary"
          @click="handleCTAClick(ctaPrimary)"
        >
          {{ ctaPrimary.text }}
        </router-link>
        <router-link
          v-if="ctaSecondary"
          :to="ctaSecondary.to"
          class="btn-secondary"
          @click="handleCTAClick(ctaSecondary)"
        >
          {{ ctaSecondary.text }}
        </router-link>
      </div>
    </div>
    <!-- Convex curve on bottom -->
    <div class="custom-shape-divider-bottom-hero">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  eventDates: {
    type: String,
    default: ''
  },
  location: {
    type: String,
    default: ''
  },
  ctaPrimary: {
    type: Object,
    default: null
  },
  ctaSecondary: {
    type: Object,
    default: null
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'home'].includes(value)
  }
})

const router = useRouter()

const handleCTAClick = (cta) => {
  if (cta.query) {
    router.push({
      path: cta.to,
      query: cta.query
    })
  }
}
</script>

<style scoped>
.hero-gradient {
  background: #2596BE;
  position: relative;
  overflow: visible;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-primary {
  background: #E16900;
  color: white;
  font-weight: 800;
  padding: 1.25rem 3rem;
  border-radius: 50px;
  box-shadow: 0 6px 20px rgba(225, 105, 0, 0.4);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.1rem;
  display: inline-block;
  text-decoration: none;
}

.btn-primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(225, 105, 0, 0.6);
  background: #C55A00;
}

.btn-secondary {
  background: white;
  color: #2596BE;
  font-weight: 800;
  padding: 1.25rem 3rem;
  border-radius: 50px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.1rem;
  display: inline-block;
  text-decoration: none;
}

.btn-secondary:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  background: #f8f9fa;
}

.custom-shape-divider-bottom-hero {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 1;
}

.custom-shape-divider-bottom-hero svg {
  position: relative;
  display: block;
  width: calc(300% + 1.3px);
  height: 242px;
}

.custom-shape-divider-bottom-hero .shape-fill {
  fill: #ffffff;
}
</style>
