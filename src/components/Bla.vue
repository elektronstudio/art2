<script setup lang="ts">
defineProps(["content"]);
</script>
<template>
  <div style="color: red">
    <slot><div v-if="content" v-html="content" /></slot>
  </div>
</template>
