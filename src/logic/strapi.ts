import { $fetch } from "ohmyfetch";

export async function getEvents() {
  const data: any = await $fetch("https://strapi.elektron.art/events");
  return data;
}

export async function getFestivals() {
  const data: any = await $fetch("https://strapi.elektron.art/festivals");
  return data;
}
