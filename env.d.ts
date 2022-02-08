/// <reference types="vite/client" />
/// <reference types="iles" />

interface ImportMetaEnv {
  readonly VITE_WS_URL: string;
  readonly VITE_MESSAGES_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
