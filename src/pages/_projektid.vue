<script setup lang="ts">
import { ref } from "vue";
import { getProjectsPage } from "@/logic";
const cards = ref<any>(null);
try {
  const data = await getProjectsPage();
  cards.value = data.data.attributes.cards;
} catch {}
</script>

<template>
  <main class="Page About">
    <ContentBlocks :cards="cards" />
  </main>
</template>
