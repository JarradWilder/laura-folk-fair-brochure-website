<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import SegmentHero from '@/components/SegmentHero.vue'
import SegmentLocation from '@/components/SegmentLocation.vue'
import DividerConvexBottom from '@/components/DividerConvexBottom.vue'
import images from '@/assets/images'
import DividerConvexTop from '@/components/DividerConvexTop.vue'
</script>

<template>
  <MainLayout>
    <SegmentHero
      variant="default"
      title="Getting there"
      description="The Laura Folk Fair is held on Herbert Street in the heart of Laura. Plan your trip and join us for two days of fun and entertainment."
      segmentBgColor="bg-primary"
      :image-background="images.birds_eye_view"
    />
    <DividerConvexBottom fill="white" position="0" />
    <SegmentLocation
      backgroundColor="white"
      title="Location & parking"
      :paragraphs="[
        'Parking is available in and around the town centre. We recommend arriving early on both days to secure a spot close to the action.',
      ]"
      address="Herbert Street, Laura SA 5480"
    />
  </MainLayout>
</template>
