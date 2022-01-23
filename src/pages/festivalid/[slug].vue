<script lang="ts">
import { getFestivals, formatMarkdown } from "../../logic";

export default definePageComponent({
  async getStaticPaths() {
    const festivals = await getFestivals();
    return festivals.map((festival: any) => ({
      params: { slug: festival.slug },
      props: { festival },
    }));
  },
});
</script>

<script setup lang="ts">
defineProps(["festival"]);
</script>

<template>
  <div>
    <Bla>{{ formatMarkdown(festival.description_estonian) }}</Bla>
    <ETitle size="lg">
      {{ festival.title }}
    </ETitle>
    <EContent v-if="festival.description_english">
      {{ festival.description_english }}
    </EContent>
  </div>
</template>
