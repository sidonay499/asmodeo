// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react"
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap';
import getAllEscorts from './src/adapters/escorts/getAllEscorts';

export default defineConfig ({
  site: 'https://asmodeo.net',
  output: 'server',
  integrations: [
    react(),
    vercel(),
    sitemap({
      serialize: async (item)=>{
        const data = await getAllEscorts()
        data.escorts.map(escort => {
          return {
            url: `https://asmode.net/${escort.name}/${escort.id}`,
            lastmod: new Date(escort.updatedAt).toISOString(),
            changefreq: 'weekly',
            priority: 0.8,
          }
        })
      }
    }),
  ]
})