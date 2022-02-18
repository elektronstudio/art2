import { $fetch } from "ohmyfetch";

export async function getEvents() {
  return $fetch("https://strapi.elektron.art/events");
}

export const sortPinnedFirst = (a, b) => {
  return Number(b.pinned) - Number(a.pinned);
};

export async function getFestivals() {
  return $fetch(
    "https://strapi.elektron.art/festivals?_sort=created_at:DESC&_limit=-1",
  ).then((f) =>
    f.sort(sortPinnedFirst).filter((f: any) => f.slug !== "signal"),
  );
}

// TODO: Bring back actual API call

// export async function getAboutPage() {
//   return $fetch(
//     "https://strapi-v4-ee9v.onrender.com/api/about?populate%5Bcards%5D%5Bpopulate%5D=*",
//   );
// }

import about from "../data/about.json";

export async function getAboutPage() {
  return new Promise((resolve) => resolve(about));
}

// TODO: Not needed?

export async function getProjectsPage() {
  return $fetch(
    "https://strapi-v4-ee9v.onrender.com/api/project?populate%5Bcards%5D%5Bpopulate%5D=*",
  );
}
