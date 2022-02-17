<script setup lang="ts">
import { computed, ref } from "vue";
import { ETitle, EFormText, EButton } from "elektro";

const url = new URLSearchParams(window.location.search);
const urlCode = url.get("code");

const redirect = (code: string) =>
  (window.location.href = `https://live.elektron.art/fienta?code=${code}`);

if (urlCode) {
  redirect(urlCode);
}

const code = ref(urlCode || "");

const onSubmit = () => {
  if (code.value) {
    redirect(code.value);
  }
};
</script>

<template>
  <div class="Fienta">
    <div>
      <ETitle size="lg">Validate your ticket</ETitle>
      <EContent>
        There is a <b>ticket code</b> in your Fienta email, just below the
        "Sisene üritusele / Enter event" blue button. Copy-paste it to the box
        below:
      </EContent>
      <EFormText v-model="code" label="Ticket code" />
      <EButton color="accent" size="sm" @click="onSubmit"
        >Submit ticket code</EButton
      >
    </div>
  </div>
</template>
