<script setup lang="ts">
import { ref } from "vue";
import { getAboutPage } from "@/logic";

const cards = ref<any>(null);
try {
  const data = await getAboutPage();
  cards.value = data.data.attributes.cards;
} catch {}
</script>

<template>
  <main class="Page About">
    <ContentBlocks v-if="cards" :cards="cards" />
  </main>
</template>
