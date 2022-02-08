import { defineApp } from "iles";
import "elektro/style.css";
import { initMessages, config } from "elektro";

export default defineApp({
  enhanceApp() {
    config.wsUrl = import.meta.env.VITE_WS_URL | "";
    config.messagesUrl = import.meta.env.VITE_MESSAGES_URL || "";
    initMessages();
  },
});
