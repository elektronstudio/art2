<script setup lang="ts">
import { ENav, ETitle } from "elektro";
const navItems = [
  {
    name: "eˉlektron",
    path: "/",
  },
  {
    name: "Lavastused",
    path: "/lavastused",
  },
  {
    name: "Festivalid",
    path: "/festivalid",
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
    name: "En",
    path: "/en",
  },
  {
    name: "Live",
    path: "/live",
  },
];
</script>
<template>
  <div>
    <ENav :navItems="navItems" />
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
