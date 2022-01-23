import { defineConfig } from "iles";

export default defineConfig({
  name: "elektron",
  siteUrl: "https://elektron.art",
  components: {
    resolvers: [
      (name) => {
        console.log(name);
        if (name.startsWith("E")) return { importName: name, path: "elektro" };
      },
    ],
  },
});
