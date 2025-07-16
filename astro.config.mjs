// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap';
import getAllEscorts from './src/adapters/escorts/getAllEscorts';

// https://astro.build/config
export default defineConfig({
    site: 'https://asmodeo.net',
    adapter: vercel(),
    output: 'server',
    integrations: [
        react(),
        sitemap({
            // customPages debe ser un array, por eso usamos una IIFE async
            customPages: await (async () => {
                const { escorts } = await getAllEscorts();
                return escorts.map(profile => `/${profile.name}/${profile.id}`);
            })(),
            serialize: (item) => ({
                url: item.url,
                lastmod: new Date(),
                priority: item.url.startsWith('/contacto') ? 0.6 : 0.8,
                changefreq: 'weekly'
            })
        })
    ]
});