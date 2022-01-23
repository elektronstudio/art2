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
        <EBox style="height: 100%">
          <ETitle v-html="festival.title" />
        </EBox>
      </router-link>
    </div>
  </div>
</template>
