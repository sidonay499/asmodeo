// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react"
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap';


export default defineConfig ({
  site: 'https://asmodeo.net',
  output: 'server',
  integrations: [
    react(),
    vercel(),
    sitemap({
      lastmod:new Date(),
      priority:1
    })
  ]
})