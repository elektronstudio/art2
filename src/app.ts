import "elektro/style.css";
import { defineApp } from "iles";
import * as elektro from "elektro";
const components = ["ENav", "ETitle", "EBox"];

export default defineApp({
  enhanceApp({ app }) {
    //@ts-ignore
    components.forEach((c) => app.component(c, elektro[c]));
  },
});
