<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import SegmentHero from '@/components/SegmentHero.vue'
import SegmentContactForm from '@/components/SegmentContactForm.vue'
import DividerConvexBottom from '@/components/DividerConvexBottom.vue'
import images from '@/assets/images'
</script>

<template>
  <MainLayout>
    <SegmentHero
      variant="default"
      title="Get in touch"
      description="Have a question or want to get involved? Send us a message and we'll get back to you."
      segmentBgColor="bg-primary"
      :image-background="images.welcome_to_laura"
    />
    <DividerConvexBottom fill="white" position="0" />
    <SegmentContactForm
      title="Send a message"
      description=""
      recipient-email="admin@laurafolkfair.org.au"
      email-subject="Laura Folk Fair – website contact"
      success-path="/contact?sent=1"
    />
  </MainLayout>
</template>
