<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import SegmentLocation from '@/components/SegmentLocation.vue'
</script>

<template>
  <MainLayout>
    <SegmentLocation
      title="Getting there"
      :paragraphs="[
        'The Laura Folk Fair is held on Herbert Street in the heart of Laura. Plan your trip and join us for two days of fun and entertainment.',
        'Parking is available in and around the town centre. We recommend arriving early on both days to secure a spot close to the action.',
      ]"
      address="Herbert Street, Laura SA 5480"
    />
  </MainLayout>
</template>
