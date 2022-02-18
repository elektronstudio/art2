<script setup lang="ts">
import { ref, computed, watchEffect } from "vue";
import { ETitle, EContent } from "elektro";
import Parser from "rss-parser/dist/rss-parser.js";
import ky from "ky-universal";

let feed = ref<any>([]);

// const rssUrl =
//   "https://api.allorigins.win/get?url=https://elektronsignal.captivate.fm/rssfeed";

const rssUrl =
  "https://api.allorigins.win/get?url=https://elektronsignal.captivate.fm/rssfeed";

let parser = new Parser();
const rssSource: any = await ky(rssUrl).json();
const rss = await parser.parseString(rssSource.contents);
</script>
<template>
  <div class="signal">
    <EStack>
      <ETitle size="lg">Electron Signal</ETitle>
    </EStack>
    <EStack>
      <ETitle>Latest episodes</ETitle>
      <EStack v-for="(episode, i) in rss.items" :key="i">
        <ETitle size="sm" v-html="episode.title" />
        <EContent v-html="episode['content:encoded']" />
        <audio controls :src="episode?.enclosure.url" />
      </EStack>
    </EStack>
  </div>
</template>

<style scoped>
.signal {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--gap-5);
  padding: var(--gap-5);
}
/* @TODO: Add breakpoints system */
@media only screen and (max-width: 800px) {
  .signal {
    grid-template-columns: 1fr;
  }
}
</style>
