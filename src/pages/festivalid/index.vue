<script setup lang="ts">
import { getFestivals } from "../../logic/strapi";
const festivals = await getFestivals();
</script>

<template>
  <div>
    <ETitle size="lg">Festivalid</ETitle>
    <br />
    <div
      style="
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: var(--gap-4);
      "
    >
      <router-link
        v-for="festival in festivals"
        :to="'/festivalid/' + festival.slug"
      >
        <EProductionCard>
          <ETitle :title="festival.title" :thumbnail="festival.images[0]" />
        </EProductionCard>
      </router-link>
    </div>
  </div>
</template>
