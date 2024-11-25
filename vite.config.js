import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import Inspect from "vite-plugin-inspect";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    plugins: [
        Inspect(), // only applies in dev mode
        laravel({
            input: ["resources/css/app.css", "resources/js/app.js"],
            // refresh: true,
            // refresh: "data/**",
            refresh: [
                {
                    paths: ["data/posts.json"],
                    config: {
                        delay: 3000,
                    },
                },
            ],
        }),

        ViteImageOptimizer({
            png: {
                // https://sharp.pixelplumbing.com/api-output#png
                quality: 50,
            },
            jpeg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 50,
            },
            jpg: {
                // https://sharp.pixelplumbing.com/api-output#jpeg
                quality: 50,
            },
            tiff: {
                // https://sharp.pixelplumbing.com/api-output#tiff
                quality: 50,
            },
            // gif does not support lossless compression
            // https://sharp.pixelplumbing.com/api-output#gif
            gif: {},
            webp: {
                // https://sharp.pixelplumbing.com/api-output#webp
                lossless: true,
            },
            avif: {
                // https://sharp.pixelplumbing.com/api-output#avif
                lossless: true,
            },
        }),
    ],

    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
