/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string
  // Add other env vars here if needed
  VITE_API_KEY:string = "abc";
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
