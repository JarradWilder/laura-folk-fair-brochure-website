<template>
  <nav
    class="relative sticky top-0 z-50 bg-white/98 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)] min-h-14 md:min-h-16 overflow-visible px-4 md:px-20"
  >
    <div class="mx-auto px-0 sm:px-6 lg:px-8 relative">
      <!-- Bar: logo left, nav/hamburger right -->
      <div class="flex justify-between items-center h-14 md:h-20 min-h-20">
        <div class="flex items-center min-w-0 flex-shrink-0">
          <router-link to="/" class="flex items-center md:-ml-6 md:-mb-20">
            <span
              class="block h-9 w-11 md:h-[7.5rem] md:w-[7.5rem] shrink-0 flex items-center justify-center overflow-hidden"
            >
              <AppImage
                :src="logoUrl"
                alt="Laura Folk Fair Logo"
                class="h-full w-full object-contain"
              />
            </span>
          </router-link>
        </div>
        <div class="hidden md:flex items-center space-x-8 flex-shrink-0">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="relative font-semibold text-gray-700 hover:text-primary transition-colors after:content-[''] after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] after:bg-accent after:transition-[width] after:duration-300 hover:after:w-full"
            :class="isActive(link.to) ? 'text-primary after:w-full' : 'after:w-0'"
          >
            {{ link.label }}
          </router-link>
          <div class="flex items-center gap-1">
            <a
              href="https://www.facebook.com/thelaurafair/"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-primary hover:bg-primary/10 transition"
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
              class="flex items-center justify-center w-10 h-10 rounded-full text-gray-600 hover:text-primary hover:bg-primary/10 transition"
              aria-label="Laura Folk Fair on Instagram"
            >
              <svg class="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.903 4.903 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-3.205a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <button
          type="button"
          class="md:hidden flex items-center justify-center w-10 h-10 shrink-0 text-gray-700 -mr-2"
          @click="toggleMobileMenu"
          aria-label="Toggle mobile menu"
          :aria-expanded="mobileMenuOpen"
        >
          <span class="material-icons text-3xl">menu</span>
        </button>
      </div>
    </div>
    <!-- Mobile Menu: overlay, full width, below nav -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-250 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div
        v-show="mobileMenuOpen"
        class="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-200 shadow-xl z-50"
      >
        <div class="px-4 py-4 space-y-1">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="block py-3 text-gray-700 hover:text-primary transition font-medium"
            :class="{ 'text-primary font-semibold': isActive(link.to) }"
            @click="closeMobileMenu"
          >
            {{ link.label }}
          </router-link>
          <a
            href="https://www.facebook.com/thelaurafair/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 py-3 text-gray-700 hover:text-primary transition font-medium"
            aria-label="Laura Folk Fair on Facebook"
            @click="closeMobileMenu"
          >
            <svg
              class="w-5 h-5 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd"
              />
            </svg>
            Facebook
          </a>
          <a
            href="https://www.instagram.com/laurafolkfair/"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 py-3 text-gray-700 hover:text-primary transition font-medium"
            aria-label="Laura Folk Fair on Instagram"
            @click="closeMobileMenu"
          >
            <svg
              class="w-5 h-5 shrink-0"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.903 4.903 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-3.205a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z"
                clip-rule="evenodd"
              />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import AppImage from '@/components/AppImage.vue'
import images from '@/assets/images'

const logoUrl = images.logo
const route = useRoute()
const mobileMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/attractions', label: 'Attractions' },
  { to: '/getting-there', label: 'Getting There' },
  { to: '/contact', label: 'Contact' },
]

const isActive = (path) => {
  if (path === '/') {
    return route.path === '/'
  }
  return route.path.startsWith(path)
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>
