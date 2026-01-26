<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import SegmentHero from '@/components/SegmentHero.vue'
import SegmentInfoBar from '@/components/SegmentInfoBar.vue'
</script>

<template>
  <MainLayout>
    <SegmentHero
      variant="home"
      title="Welcome to the Laura Folk Fair"
      subtitle="Two days of fun & entertainment"
      description="Something for everyone!"
      eventDates="Saturday 18th and Sunday 19th April 2026"
      location="Herbert Street, Laura SA 5480"
      :ctaPrimary="{ text: 'PLAN YOUR VISIT', to: '/getting-there' }"
      :ctaSecondary="{ text: 'BECOME A STALLHOLDER', to: '/contact', query: { subject: 'Stallholder' } }"
    />
    <SegmentInfoBar
      :items="[
        { label: 'Admission Prices', value: 'Family: $20 | Adults: $10 | Children (5-12): $5 | Under 5: Free' },
        { label: 'Event Times', value: '10:00 AM - 5:00 PM (Both Days)' },
        { label: 'Location', value: 'Herbert Street, Laura SA 5480' }
      ]"
      :columns="3"
      bgColor="white"
    />
  </MainLayout>
</template>