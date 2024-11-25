import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import Inspect from "vite-plugin-inspect";

export default defineConfig({
    plugins: [
        Inspect(), // only applies in dev mode
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            refresh: true,
        }),
    ],
});
