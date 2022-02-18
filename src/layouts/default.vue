<script setup lang="ts">
import Nav from "../components/Nav.vue";

const navItems = [
  {
    name: "elektron (TODO)",
    path: "/",
  },
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
  {
    name: "Live (TODO)",
    path: "/",
  },
];
</script>
<template>
  <div>
    <Nav :navItems="navItems" />
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
