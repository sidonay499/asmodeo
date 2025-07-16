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
            customPages: (await getAllEscorts('1')).map(p => `/${p.name}/${p.id}`)
        }),
    ]
});