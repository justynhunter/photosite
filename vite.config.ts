import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src/"),
            "@pages": path.resolve(__dirname, "./src/pages/"),
            "@components": path.resolve(__dirname, "./src/components/"),
            "@lib": path.resolve(__dirname, "./src/lib/"),
        },
    },
    plugins: [react()],
    server: {
        port: 3000,
    },
});
