import { $fetch } from "ohmyfetch";

export async function getEvents() {
  return $fetch("https://strapi.elektron.art/events");
}

export async function getFestivals() {
  return $fetch("https://strapi.elektron.art/festivals");
}
