// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site:'https://asmodeo.net',
    adapter:vercel(),
    output:'static',
    integrations:[
        react(), 
        sitemap({
            lastmod: new Date(),
            priority:1
        })
    ]
});