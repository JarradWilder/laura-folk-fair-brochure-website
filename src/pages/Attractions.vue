<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import SegmentHero from '@/components/SegmentHero.vue'
import SegmentImageCards from '@/components/SegmentImageCards.vue'
import DividerConvexBottom from '@/components/DividerConvexBottom.vue'
import images from '@/assets'

const attractionCards = [
  {
    imagePath: images.bagpipes,
    title: 'Enjoy the music',
    text: "Enjoy live music, performances, children's shows and entertainment on multiple stages throughout the fair.",
    bgColor: 'bg-white',
  },
  {
    imagePath: images.fireworks,
    title: 'Fireworks are back!',
    text: 'Catch the display at a family-friendly 7pm. Explore the fair, grab a bite, enjoy the show, then stay for live music to round out the night.',
    bgColor: 'bg-white',
  },
  {
    imagePath: images.icecream_eating_comp,
    title: 'Ice cream competition',
    text: 'See who takes the crown at the Laura Folk Fair ice cream competition—local makers go head-to-head for the best cone in town.',
    bgColor: 'bg-white',
  },
  {
    imagePath: images.crafts,
    title: 'Artisan stalls',
    text: 'Browse unique crafts, artwork, and local products from talented community vendors.',
    bgColor: 'bg-white',
  },
  {
    imagePath: images.yiros,
    title: 'Food and drinks',
    text: 'Savor delicious festival favorites and sweet treats from a variety of food vendors.',
    bgColor: 'bg-white',
  },
  {
    imagePath: images.ride,
    title: 'Sideshow rides',
    text: 'Rides to excite and be enjoyed by all ages, including the little ones, plus all the sideshow faves.',
    bgColor: 'bg-white',
  },
]
</script>

<template>
  <MainLayout footerFillColor="accent-yellow">
    <SegmentHero
      variant="default"
      title="So much to see and do!"
      description="From live music and fireworks to artisan stalls, rides, and delicious food—discover everything the Laura Folk Fair has to offer."
      segmentBgColor="bg-primary"
      :image-background="images.fair_past2"
      class="pt-20 md:pt-40 pb-60"
    />
    <DividerConvexBottom fill="accent-yellow" background="accent-yellow" position="100" />
    <SegmentImageCards
      segment-bg-color="bg-accent-yellow"
      :cards="attractionCards"
      class="py-20 md:py-25"
    />
  </MainLayout>
</template>
