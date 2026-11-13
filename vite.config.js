import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/Taller1_React/", // 
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,jsx,css,html,ico,png,svg}"],
      },
      includeAssets: ["favicon.ico", "icons.png"],
      manifest: {
        name: "SystemCore - SENA",
        short_name: "SystemCore",
        description: "Aplicación web de tecnología y computación",
        scope: "/Taller1_React/",
        start_url: "/Taller1_React/",
        display: "standalone",
        theme_color: "#000000",

        screenshots: [
          {
            src: "/logogit_1200x581.png",
            sizes: "1200x581",
            type: "image/png",
            form_factor: "wide",
            label: "Vista de Escritorio",
          },
          {
            src: "/logogit_600x800.png",
            sizes: "600x800",
            type: "image/png",
            label: "Vista de movil",
          },
        ],

        icons: [
          {
            src: "/logosena_192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/logosena_512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
