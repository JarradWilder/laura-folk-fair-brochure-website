<template>
  <section
    class="relative bg-cover bg-center py-16 md:py-24"
    :class="segmentBgColor"
    :style="sectionStyle"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- When timeline is shown: text and iframe side-by-side on md+, stacked on small screens -->
      <template v-if="facebookPageUrl">
        <div
          ref="fbEmbedRef"
          class="flex flex-col md:flex-row md:items-start gap-8 md:gap-12 min-h-[500px]"
        >
          <header class="flex-shrink-0 text-center md:text-right md:min-w-0 md:max-w-md">
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
              {{ segmentTitle }}
            </h2>
            <p class="text-lg text-gray-700 md:max-w-sm md:ml-auto">
              {{ segmentDescription }}
            </p>
          </header>
          <div class="flex justify-center md:justify-start flex-1 min-w-0">
            <div class="w-[500px] max-w-full">
              <div
                class="fb-page"
                :data-href="facebookPageUrl"
                data-tabs="timeline"
                data-width="500"
                data-height="600"
                data-small-header="true"
                data-adapt-container-width="true"
                data-hide-cover="false"
                data-show-facepile="true"
              >
                <blockquote :cite="facebookPageUrl" class="fb-xfbml-parse-ignore">
                  <a :href="facebookPageUrl">Laura Folk Fair</a>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </template>

      <!-- When no timeline: header only (for cards or follow link below) -->
      <template v-else>
        <header class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">
            {{ segmentTitle }}
          </h2>
          <p class="text-lg text-gray-700 max-w-2xl mx-auto">
            {{ segmentDescription }}
          </p>
        </header>
      </template>

      <!-- Fallback: post cards when no timeline URL or when posts are provided -->
      <div
        v-if="!facebookPageUrl && displayPosts.length > 0"
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <article
          v-for="(post, index) in displayPosts"
          :key="index"
          class="rounded-xl overflow-hidden shadow-lg flex flex-col max-w-md mx-auto lg:max-w-none bg-white"
        >
          <div class="aspect-video w-full rounded-t-xl overflow-hidden shrink-0 bg-gray-100">
            <AppImage :src="post.imageUrl" :alt="post.title" class="w-full h-full object-cover" />
          </div>
          <div class="p-6 flex flex-col flex-1">
            <time
              v-if="post.date"
              class="text-sm font-medium text-primary mb-1"
              :datetime="post.date"
            >
              {{ formatDate(post.date) }}
            </time>
            <h3 class="text-xl font-bold mb-2 text-gray-900">
              {{ post.title }}
            </h3>
            <p class="text-gray-700 leading-relaxed flex-1 line-clamp-4">
              {{ post.excerpt }}
            </p>
            <a
              :href="post.link"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-4 inline-flex items-center font-semibold text-primary hover:text-primary-dark transition-colors"
            >
              Read on Facebook
              <span class="ml-1" aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </article>
      </div>
      <div v-else-if="!facebookPageUrl" class="text-center text-gray-500">
        <p>
          Follow us on
          <a
            href="https://www.facebook.com/thelaurafair/"
            target="_blank"
            rel="noopener noreferrer"
            class="text-primary font-semibold hover:underline"
            >Facebook</a
          >
          for the latest updates.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted, nextTick, watch } from 'vue'
import AppImage from '@/components/AppImage.vue'

const fbEmbedRef = ref(null)

const props = defineProps({
  /** Facebook Page URL for timeline embed (e.g. https://www.facebook.com/thelaurafair). When set, shows the embedded timeline. */
  facebookPageUrl: {
    type: String,
    default: 'https://www.facebook.com/thelaurafair/',
  },
  /** Section heading */
  segmentTitle: {
    type: String,
    default: 'Latest updates',
  },
  /** Short intro below the heading */
  segmentDescription: {
    type: String,
    default:
      'Stay in the loop with news, reminders and last-minute details for the Laura Folk Fair. Follow us on Facebook for the latest.',
  },
  /** Tailwind background class for the segment */
  segmentBgColor: {
    type: String,
    default: 'bg-white',
  },
  /** Optional image URL for section background */
  imageBackground: {
    type: String,
    default: '',
  },
  /** Posts: { date, title, excerpt, link, imageUrl? }. Only the last 3 are shown. */
  posts: {
    type: Array,
    default: () => [],
    validator: (arr) =>
      arr.every(
        (p) =>
          p &&
          typeof p.title === 'string' &&
          typeof p.excerpt === 'string' &&
          typeof p.link === 'string',
      ),
  },
})

const sectionStyle = computed(() =>
  props.imageBackground ? { backgroundImage: `url(${props.imageBackground})` } : {},
)

const displayPosts = computed(() => props.posts.slice(-3).reverse())

function parseFbEmbed() {
  if (!window.FB || !fbEmbedRef.value) return
  window.FB.XFBML.parse(fbEmbedRef.value)
}

onMounted(() => {
  if (!props.facebookPageUrl) return
  nextTick(() => {
    const doParse = () => {
      if (!window.FB || !fbEmbedRef.value) return
      // Let layout complete so container has width before SDK reads it (avoids 180px default)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.FB.XFBML.parse(fbEmbedRef.value)
        })
      })
    }
    if (window.FB) {
      doParse()
      return
    }
    const check = () => {
      if (window.FB) {
        doParse()
        return
      }
      setTimeout(check, 50)
    }
    setTimeout(check, 100)
  })
})

watch(
  () => props.facebookPageUrl,
  () => {
    if (props.facebookPageUrl && window.FB && fbEmbedRef.value) {
      nextTick(() => parseFbEmbed())
    }
  },
)

function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}
</script>
