<template>
  <section class="bg-white pb-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-2">
          {{ title }}
        </h2>
        <p v-if="description" class="text-gray-700 mb-8">
          {{ description }}
        </p>

        <div v-if="sent" class="rounded-xl bg-primary/10 border border-primary/20 p-8 text-center">
          <span class="material-icons text-5xl text-primary mb-4 block" aria-hidden="true"
            >check_circle</span
          >
          <h3 class="text-xl font-bold text-gray-900 mb-2">Message sent</h3>
          <p class="text-gray-700">Thanks for getting in touch. We'll respond as soon as we can.</p>
        </div>

        <form v-else :action="formAction" method="POST" class="space-y-6" @submit="onSubmit">
          <input type="hidden" name="_next" :value="successRedirectUrl" />
          <input type="hidden" name="_subject" :value="emailSubject" />
          <input type="hidden" name="_captcha" value="true" />
          <input
            type="text"
            name="_honey"
            class="absolute opacity-0 pointer-events-none h-0 w-0"
            tabindex="-1"
            autocomplete="off"
            aria-hidden="true"
          />

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label for="contact-name" class="block text-sm font-semibold text-gray-700 mb-2"
                >Name</label
              >
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition bg-gray-50"
                placeholder="Your name"
              />
            </div>
            <div>
              <label for="contact-email" class="block text-sm font-semibold text-gray-700 mb-2"
                >Email</label
              >
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition bg-gray-50"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label for="contact-subject" class="block text-sm font-semibold text-gray-700 mb-2"
              >Subject</label
            >
            <select
              id="contact-subject"
              name="subject"
              required
              class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition bg-gray-50"
            >
              <option value="">Choose a topic</option>
              <option v-for="opt in subjectOptions" :key="opt.value" :value="opt.value">
                {{ opt.label }}
              </option>
            </select>
          </div>

          <div>
            <label for="contact-message" class="block text-sm font-semibold text-gray-700 mb-2"
              >Message</label
            >
            <textarea
              id="contact-message"
              name="message"
              required
              rows="5"
              class="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition resize-y min-h-[120px] bg-gray-50"
              placeholder="Your message..."
            />
          </div>

          <div>
            <button
              type="submit"
              class="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-white bg-primary hover:bg-primary-dark focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:outline-none transition disabled:opacity-60 disabled:cursor-not-allowed"
              :disabled="submitting"
            >
              <span v-if="submitting">Sending...</span>
              <span v-else>Send message</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps({
  /** Section heading */
  title: {
    type: String,
    default: 'Contact us',
  },
  /** Optional intro text below the heading */
  description: {
    type: String,
    default: '',
  },
  /** FormSubmit recipient email (e.g. admin@laurafolkfair.org.au) */
  recipientEmail: {
    type: String,
    required: true,
  },
  /** Default email subject line for submissions */
  emailSubject: {
    type: String,
    default: 'Laura Folk Fair website contact',
  },
  /** Path to redirect to after success (e.g. /contact?sent=1). Full URL is built from origin + this. */
  successPath: {
    type: String,
    default: '/contact?sent=1',
  },
  /** Subject dropdown options: { value, label } */
  subjectOptions: {
    type: Array,
    default: () => [
      { value: 'General enquiry', label: 'General enquiry' },
      { value: 'Stallholder', label: 'Stallholder enquiry' },
      { value: 'Volunteering', label: 'Volunteering' },
      { value: 'Sponsorship', label: 'Sponsorship' },
      { value: 'Other', label: 'Other' },
    ],
  },
})

const submitting = ref(false)
const successRedirectUrl = ref('')

const sent = computed(() => route.query.sent === '1')

const formAction = computed(
  () => `https://formsubmit.co/${encodeURIComponent(props.recipientEmail)}`,
)

onMounted(() => {
  successRedirectUrl.value =
    typeof window !== 'undefined' ? `${window.location.origin}${props.successPath}` : ''
})

function onSubmit() {
  submitting.value = true
}
</script>
