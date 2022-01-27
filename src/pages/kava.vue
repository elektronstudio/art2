<script setup lang="ts">
import { getFestivals, formatMarkdown } from "../logic";
const festivals = await getFestivals();
</script>

<template>
  <ArtNav />
  <main class="Page Projects">
    <EScheduleEvent
      v-for="festival in festivals"
      :title="festival.title"
      description="Lavastus “Hundid” on jätk Liis Varese ja Taavet Janseni koostööle “Kõik loeb/ The Reader”, mille soe vastuvõtt on julgustanud neid digitaalse formaadiga edasi töötama."
      :events="festival.events"
    >
      <EEventInstance
        v-if="festival.events"
        v-for="item in festival.events"
        :start-at="item.start_at"
        :end-at="item.end_at"
        :ticket-url="item.ticketUrl"
      />
    </EScheduleEvent>
  </main>
</template>

<style scoped>
.Page.Projects {
  display: grid;
  grid-template-columns: 1fr;
}
.Page.Projects > section {
  margin-bottom: var(--m-12);
}
/* @TODO: Add breakpoints system */
@media only screen and (min-width: 1240px) {
  .Page.Projects {
    grid-template-columns: repeat(8, 1fr);
  }
  .Page.Projects > section {
    grid-column: 4 / -1;
    margin-bottom: var(--m-24);
  }
}
</style>
