<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import SegmentContactForm from '@/components/SegmentContactForm.vue'
</script>

<template>
  <MainLayout>
    <SegmentContactForm
      title="Get in touch"
      description="Have a question or want to get involved? Send us a message and we'll get back to you."
      recipient-email="admin@laurafolkfair.org.au"
      email-subject="Laura Folk Fair – website contact"
      success-path="/contact?sent=1"
    />
  </MainLayout>
</template>
