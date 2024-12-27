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
        },
    },
    plugins: [react()],
});
