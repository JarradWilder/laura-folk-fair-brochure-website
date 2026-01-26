<template>
  <nav class="nav-enhanced sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20" style="min-height: 80px;">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center -ml-6" style="margin-bottom: -80px;">
            <img src="/images/logo.png" alt="Laura Folk Fair Logo" class="h-40 w-auto">
          </router-link>
        </div>
        <div class="hidden md:flex space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link text-gray-700 hover:text-lff-blue transition"
            :class="{ 'text-lff-blue font-semibold': isActive(link.to) }"
          >
            {{ link.label }}
          </router-link>
        </div>
        <button
          class="md:hidden text-gray-700"
          @click="toggleMobileMenu"
          aria-label="Toggle mobile menu"
        >
          <span class="material-icons text-3xl">menu</span>
        </button>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div
      v-show="mobileMenuOpen"
      class="md:hidden bg-white border-t"
    >
      <div class="px-4 pt-2 pb-4 space-y-2">
        <router-link
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="block py-2 text-gray-700 hover:text-lff-blue transition"
          :class="{ 'text-lff-blue font-semibold': isActive(link.to) }"
          @click="closeMobileMenu"
        >
          {{ link.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/attractions', label: 'Attractions' },
  { to: '/getting-there', label: 'Getting There' },
  { to: '/accommodation', label: 'Accommodation' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/volunteers', label: 'Volunteers' },
  { to: '/contact', label: 'Contact' }
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

<style scoped>
.nav-enhanced {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  overflow: visible;
  min-height: 80px;
}

.nav-link {
  position: relative;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 3px;
  background: #E16900;
  transition: width 0.3s ease;
}

.nav-link:hover::after,
.nav-link.text-lff-blue::after {
  width: 100%;
}
</style>
