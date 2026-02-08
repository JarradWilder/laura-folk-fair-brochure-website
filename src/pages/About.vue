<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import SegmentHero from '@/components/SegmentHero.vue'
import SegmentTwoColumnImageAndText from '@/components/SegmentTwoColumnImageAndText.vue'
import SegmentTextCards from '@/components/SegmentTextCards.vue'
import DividerConvexBottom from '@/components/DividerConvexBottom.vue'
import DividerConvexTop from '@/components/DividerConvexTop.vue'

const humbleBeginnings =
  "The Laura Folk Fair was originally conceived by well known and respected local artist Richard 'Dick' Biles, who was also the founding President of the Rocky River Historic and Art Society (RRHAS) as well as teaching Art at the nearby Gladstone High School. His vision was to promote art and culture in the local area and the first event included the unveiling of the bust of author CJ Dennis, which was commissioned by the RRHAS. After the resounding success of the first event, the Laura Folk Fair saw tremendous growth and the event has since grown into one of the region's most beloved annual events, attracting visitors from far and wide."

const modernTradition =
  "Today, the Laura Folk Fair welcomes over 15,000 visitors annually, features more than 100 stallholders, and has become the cornerstone of our community's cultural calendar. We continue to evolve while staying true to our roots of celebrating local talent, fostering community connections, and creating lasting memories for families."

const missionItems = [
  'To celebrate and preserve local culture, support community artisans and businesses, and create an inclusive space where people of all ages can come together to enjoy authentic experiences, build lasting connections, and strengthen the bonds that make our community special.',
  'Play a key role in sustaining a healthy, resilient community, while raising morale and supporting mental health. Encourage community cohesion, as well as a sense of pride in our town and district.',
  'Promote Laura to all who visit the area and increase tourism to our beautiful region.',
  'Raise funds, increase donations, create partnerships and continue to support other community groups and charitable organisations with their fundraising efforts.',
  'Grow the event and win awards for our efforts.',
  'Create memories that last a lifetime.',
]
</script>

<template>
  <MainLayout>
    <SegmentHero
      variant="default"
      title="Our Story"
      description="For over four decades, the Laura Folk Fair has been the heart of our community, bringing together families, friends, and neighbors in celebration of local culture, craftsmanship, and the enduring spirit of togetherness."
      segmentBgColor="bg-primary"
      imageBackground="/images/birds_eye_view.jpg"
      class="pt-20 md:pt-40 pb-60"
    />
    <DividerConvexBottom fill="white" position="0" />
    <SegmentTwoColumnImageAndText
      title="Humble Beginnings"
      :paragraphs="[humbleBeginnings]"
      image-src="/images/news.jpg"
      image-alt="Richard Biles Photo"
      :image-on-left="true"
      segmentBgColor="bg-white"
    />
    <DividerConvexTop fill="white" position="60" />
    <SegmentTwoColumnImageAndText
      title="A Modern Tradition"
      :paragraphs="[modernTradition]"
      image-src="/images/welcome_to_laura.jpg"
      image-alt="Laura Folk Fair today"
      :image-on-left="false"
      segmentBgColor="bg-accent-yellow"
      class="py-60 md:py-60"
    />
    <DividerConvexBottom fill="white" position="100" />
    <SegmentTextCards
      title="Our Mission"
      :items="missionItems"
      segmentBgColor="bg-white"
      cardBgColor="bg-white"
    />
  </MainLayout>
</template>
