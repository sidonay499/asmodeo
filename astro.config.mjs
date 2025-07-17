// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react"
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap';
import getAllEscorts from './src/adapters/escorts/getAllEscorts';

export default defineConfig({
  site: 'https://asmodeo.net',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    sitemap({
      serialize: async (item) => {
        const data = await getAllEscorts()
        return data.escorts.map(escort => {
          return {
            url: `/${escort.name}/${escort.id}`,
            lastmod: new Date(escort.updatedAt).toISOString(),
            changefreq: 'weekly',
            priority: 0.8
          }
        })
      }
    })
  ]
})