const { $fetch } = require("ohmyfetch");

async function getFestivals() {
  const data = await $fetch("https://strapi.elektron.art/festivals");
  console.log(data);
}

getFestivals();
