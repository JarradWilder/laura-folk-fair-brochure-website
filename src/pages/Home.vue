<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import SegmentHero from '@/components/SegmentHero.vue'
import SegmentInfoBar from '@/components/SegmentInfoBar.vue'
import SegmentTwoColumnImageAndText from '@/components/SegmentTwoColumnImageAndText.vue'
import SegmentImageCards from '@/components/SegmentImageCards.vue'
import DividerConvexBottom from '@/components/DividerConvexBottom.vue'
import DividerConvexTop from '@/components/DividerConvexTop.vue'
import SegmentFacebookPosts from '@/components/SegmentFacebookPosts.vue'
import images from '@/assets/images'
</script>

<template>
  <MainLayout>
    <SegmentHero
      variant="home"
      :image-background="images.clouds_cirrus"
      title="Welcome to the Laura Folk Fair"
      subtitle="Two days of fun & entertainment"
      description="Something for everyone!"
      eventDates="Saturday 18th and Sunday 19th April 2026"
      class="pt-10 md:pt-10 pb-40"
    />
    <DividerConvexBottom fill="white" position="0" />

    <SegmentInfoBar
      :items="[
        {
          icon: 'confirmation_number',
          label: 'Admission',
          value: 'Family $20 · Adults $10 · Kids $5 · Under 5 free',
          accent: true,
        },
        { icon: 'schedule', label: 'Times', value: 'Saturday 10am–11pm, Sunday 10am–4pm' },
        { icon: 'place', label: 'Location', value: 'Herbert St, Laura SA 5480' },
      ]"
      :columns="3"
      bgColor="white"
    />

    <!-- About -->
    <SegmentTwoColumnImageAndText
      title="Welcome!"
      :paragraphs="[
        'Join us for our annual celebration of community spirit! Two amazing days filled with local artisans, delicious food, live music, thrilling rides, and entertainment for the whole family.',
        'The Laura Folk Fair isn\'t just about having fun—it\'s a key fundraising event for the community. Many local groups, charities, and organisations use the fair to raise funds for their projects. Come along and be part of something special!',
      ]"
      :image-src="images.fair_past2"
      image-alt="Family at town fair"
    />

    <!-- Sponsor -->
    <SegmentTwoColumnImageAndText
      title="Special Thanks To Our Sponsor"
      :paragraphs="[
        'We are grateful to Golden North for their generous support of the Laura Folk Fair. Their commitment helps make this community celebration possible year after year.',
        'Please join us in thanking our sponsor—and don\'t forget to support the businesses that support our community!',
      ]"
      :image-src="images.golden_north_cone"
      image-alt="Golden North"
      :image-on-left="false"
    />
    <DividerConvexTop fill="white" background="accent-yellow" position="30" />

    <!-- Attractions -->
    <SegmentImageCards
      segment-bg-color="bg-accent-yellow"
      class="py-60 md:py-60"
      :cards="[
        {
          imagePath: images.bagpipes,
          title: 'Enjoy the music',
          text: 'Enjoy live music, performances, children\'s shows and entertainment on multiple stages throughout the fair.',
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
          imagePath: images.show_ride,
          title: 'Sideshow rides',
          text: 'Rides to excite and be enjoyed by all ages, including the little ones, plus all the sideshow faves.',
          bgColor: 'bg-white',
        },
      ]"
    />
    <DividerConvexBottom fill="white" background="accent-yellow" position="30" />

    <!-- Facebook Posts -->
    <SegmentFacebookPosts />
  </MainLayout>
</template>
