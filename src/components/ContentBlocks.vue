<script setup lang="ts">
import { formatMarkdown } from "../logic";

type Card = {
  id: number;
  __component:
    | "content.title"
    | "content.about-card"
    | "content.related-page"
    | "content.person-card"
    | "content.external-link";
  title: string;
  content: string;
  name?: string;
  url?: string;
  layout?: "columns1" | "columns2" | "columns3" | "columns4";
  page?: {
    data: {
      attributes: {
        title: string;
        slug: string;
      };
    };
  };
};

type Props = {
  cards: Card[];
};

const { cards } = defineProps<Props>();
</script>

<template>
  <section class="ContentBlocks">
    <template v-for="item in cards">
      <ETitle
        v-if="item.__component === 'content.title'"
        el="h2"
        size="lg"
        :title="item.title"
      />
      <EAboutPageCard
        v-else-if="item.__component === 'content.about-card'"
        :layout="item.layout"
        :title="item.title"
        :content="formatMarkdown(item.content)"
      />
      <ERelatedPageCard
        v-else-if="item.__component === 'content.related-page'"
        :title="item.title"
        :content="formatMarkdown(item.content)"
      />
      <!-- <EExternallinkCard
      v-else-if="item.__component === 'content.external-link'"
      :title="item.title"
      :url="item.url"
    /> -->
      <ETeamCard
        v-else-if="item.__component === 'content.person-card'"
        :name="item.name"
        :content="formatMarkdown(item.content)"
      />
    </template>
  </section>
</template>

<style scoped>
.ContentBlocks {
  display: flex;
  flex-direction: column;
  gap: var(--gap-5);
  margin-bottom: var(--m-12);
  padding: var(--p-5);
}
.ContentBlocks > h2 {
  grid-column: 1 / -1;
  margin-top: var(--m-8);
}
/* @TODO: Add breakpoints system */
@media only screen and (min-width: 600px) {
  .ContentBlocks {
    display: grid;
    grid-gap: var(--gap-5);
    grid-template-columns: repeat(2, 1fr);
  }
}
/* @TODO: Add breakpoints system */
@media only screen and (min-width: 1240px) {
  .ContentBlocks {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
