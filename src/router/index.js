import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () => import('@/pages/About.vue'),
  // },
  // {
  //   path: '/attractions',
  //   name: 'Attractions',
  //   component: () => import('@/pages/Attractions.vue'),
  // },
  // {
  //   path: '/getting-there',
  //   name: 'GettingThere',
  //   component: () => import('@/pages/GettingThere.vue'),
  // },
  // {
  //   path: '/accommodation',
  //   name: 'Accommodation',
  //   component: () => import('@/pages/Accommodation.vue'),
  // },
  // {
  //   path: '/sponsors',
  //   name: 'Sponsors',
  //   component: () => import('@/pages/Sponsors.vue'),
  // },
  // {
  //   path: '/volunteers',
  //   name: 'Volunteers',
  //   component: () => import('@/pages/Volunteers.vue'),
  // },
  // {
  //   path: '/contact',
  //   name: 'Contact',
  //   component: () => import('@/pages/Contact.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router