<script setup lang="ts">
import ArtNav from "../components/ArtNav.vue";

const navItems = [
  {
    name: "Kava",
    path: "/kava",
  },
  {
    name: "Projektid",
    path: "/projektid",
  },
  {
    name: "Meist",
    path: "/meist",
  },
  {
    name: "Signal podcast",
    path: "/signal",
  },
];
</script>
<template>
  <div>
    <ArtNav :navItems="navItems" />
    <main class="Layout">
      <slot />
    </main>
  </div>
</template>

<style>
.Layout {
  /* padding: var(--p-4); */
}
.ENav {
  grid-auto-columns: 1fr !important;
  grid-auto-flow: column !important;
}
</style>
