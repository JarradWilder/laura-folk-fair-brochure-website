<template>
  <footer class="footer-enhanced text-white py-12 relative">
    <!-- Convex curve on top -->
    <div class="custom-shape-divider-top-footer">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
      </svg>
    </div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <img src="/images/logo.png" alt="Laura Folk Fair Logo" class="h-16 w-auto mb-4">
          <p class="text-gray-400 text-sm">Celebrating community, culture, and connection for over four decades.</p>
        </div>
        <div>
          <h3 class="font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/" class="text-gray-400 hover:text-white transition">Home</router-link></li>
            <li><router-link to="/about" class="text-gray-400 hover:text-white transition">About</router-link></li>
            <li><router-link to="/attractions" class="text-gray-400 hover:text-white transition">Attractions</router-link></li>
            <li><router-link to="/getting-there" class="text-gray-400 hover:text-white transition">Getting There</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-4">More Info</h3>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/accommodation" class="text-gray-400 hover:text-white transition">Accommodation</router-link></li>
            <li><router-link to="/sponsors" class="text-gray-400 hover:text-white transition">Sponsors</router-link></li>
            <li><router-link to="/volunteers" class="text-gray-400 hover:text-white transition">Volunteers</router-link></li>
            <li><router-link to="/contact" class="text-gray-400 hover:text-white transition">Contact</router-link></li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold mb-4">Contact</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="mailto:admin@laurafolkfair.org.au" class="hover:text-white transition">admin@laurafolkfair.org.au</a></li>
            <li>Herbert Street, Laura SA 5480</li>
          </ul>
        </div>
      </div>
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; 2026 Laura Folk Fair. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component - no props needed
</script>

<style scoped>
.footer-enhanced {
  background: #183552;
}

.custom-shape-divider-top-footer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
  z-index: 0;
}

.custom-shape-divider-top-footer svg {
  position: relative;
  display: block;
  width: calc(300% + 1.3px);
  height: 242px;
}

.custom-shape-divider-top-footer .shape-fill {
  fill: #183552;
}
</style>
