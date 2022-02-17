import { $fetch } from "ohmyfetch";

export async function getEvents() {
  return $fetch("https://strapi.elektron.art/events");
}

export async function getFestivals() {
  return $fetch("https://strapi.elektron.art/festivals");
}

export async function getAboutPage() {
  return $fetch(
    "http://localhost:1337/api/about?populate%5Bcards%5D%5Bpopulate%5D=*",
  );
}

export async function getProjectsPage() {
  return $fetch(
    "http://localhost:1337/api/project?populate%5Bcards%5D%5Bpopulate%5D=*",
  );
}
