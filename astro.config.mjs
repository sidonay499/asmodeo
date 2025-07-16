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
            // Define aquí las páginas personalizadas, además del resto de rutas
            customPages: async () => {
                const { escorts } = await getAllEscorts();
                return escorts.map(escort => `/` + escort.name + `/` + escort.id);
            },
            serialize: (item) => ({
                url: item.url,
                lastmod: new Date(),
                priority: item.url.includes('/') ? 0.9 : 0.8,
                changefreq: 'weekly'
            })
        })
    ]
});