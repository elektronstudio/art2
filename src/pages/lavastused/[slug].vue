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
    <ETitle size="lg">
      {{ festival.title }}
    </ETitle>
    <EContent
      v-if="festival.description_estonian"
      :content="formatMarkdown(festival.description_estonian)"
    />
    <EContent
      v-if="festival.description_english"
      :content="formatMarkdown(festival.description_english)"
    />
  </div>
</template>
