<template>
  <footer class="bg-primary-dark text-white pb-12 pt-[7.5rem] relative">
    <!-- Convex curve on top (from CURVED_DIVS.md) -->
    <div class="absolute -top-[50px] left-0 w-full overflow-hidden leading-none rotate-180 z-[1]">
      <svg
        class="relative block w-[calc(300%+1.3px)] h-[242px]"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
          :class="curveFillClass"
        ></path>
      </svg>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
      <div class="flex flex-col items-center text-center mb-10">
        <AppImage :src="logoUrl" alt="Laura Folk Fair Logo" class="h-40 w-40 mb-4" />
        <p class="text-gray-400 text-sm max-w-md">
          Celebrating community, culture, and connection for over four decades.
        </p>
        <div class="mt-4 flex items-center justify-center gap-2">
          <a
            href="https://www.facebook.com/thelaurafair/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition"
            aria-label="Laura Folk Fair on Facebook"
          >
            <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/laurafolkfair/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center w-10 h-10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition shrink-0"
            aria-label="Laura Folk Fair on Instagram"
          >
            <svg
              class="w-10 h-10 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div
        class="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8 w-full max-w-xl justify-items-center sm:justify-items-stretch"
      >
        <div class="text-center sm:text-left">
          <h3 class="font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-white transition"
                >Home</router-link
              >
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-white transition"
                >About</router-link
              >
            </li>
            <li>
              <router-link to="/attractions" class="text-gray-400 hover:text-white transition"
                >Attractions</router-link
              >
            </li>
            <li>
              <router-link to="/getting-there" class="text-gray-400 hover:text-white transition"
                >Getting There</router-link
              >
            </li>
            <li>
              <router-link to="/contact" class="text-gray-400 hover:text-white transition"
                >Contact</router-link
              >
            </li>
          </ul>
        </div>
        <div class="text-center sm:text-left">
          <h3 class="font-semibold mb-4">Contact</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>
              <a href="mailto:admin@laurafolkfair.org.au" class="hover:text-white transition"
                >admin@laurafolkfair.org.au</a
              >
            </li>
            <li>Herbert Street, Laura SA 5480</li>
          </ul>
        </div>
      </div>
      <div class="mt-10 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2026 Laura Folk Fair. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import AppImage from '@/components/AppImage.vue'
import { segmentColorClasses } from '@/theme/segmentColors'
import images from '@/assets/images'

const logoUrl = images.logo

const props = defineProps({
  /** Fill color for the top curve. Key from @/theme/segmentColors (e.g. 'white', 'primary-dark'). */
  curveFill: {
    type: String,
    default: 'white',
  },
})

const curveFillClass = computed(() => segmentColorClasses[props.curveFill]?.fill ?? 'fill-white')
</script>
