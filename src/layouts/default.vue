<script setup lang="ts">
import { ENav } from "elektro";

const navItems = [
  {
    name: "Lavastused",
    path: "/lavastused",
  },
  {
    name: "Projektid",
    path: "/projektid",
  },
  {
    name: "Kava",
    path: "/kava",
  },
  {
    name: "Meist",
    path: "/meist",
  },
  {
    name: "ENG",
    path: "/en",
  },
  {
    name: "LIVE",
    path: "/live",
  },
];
</script>
<template>
  <div>
    <ENav :navItems="navItems" showLogo />
    <main class="Layout">
      <slot />
    </main>
  </div>
</template>

<style>
.Layout {
  padding: var(--p-4);
}
.ENav {
  grid-auto-columns: 1fr !important;
  grid-auto-flow: column !important;
}
</style>
