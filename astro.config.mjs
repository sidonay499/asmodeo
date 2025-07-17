// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import sitemap from '@astrojs/sitemap';
import getAllEscorts from './src/adapters/escorts/getAllEscorts';

export default async function () {

  return defineConfig({
    site: 'https://tusitio.com',
    output: 'server',
    integrations: [
      react(),
      sitemap({
        async serialize(item) {
          const data = await getAllEscorts()
          const slugs = data?.escorts.map((p) => `/${p.name}/${p.id}`) ?? [];
          return slugs.includes(item.url) ? {
            url: item.url,
            lastmod: new Date(),
            priority: 1
          } : null; 
        }
      })
    ]
  });
}