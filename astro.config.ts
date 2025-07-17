// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import getAllEscorts from './src/adapters/escorts/getAllEscorts';

export default defineConfig(async () => {
  const data = await getAllEscorts();

  const customPages = data.escorts.map((escort) => ({
    url: `/${escort.name}/${escort.id}`,
    lastmod: new Date(escort.updatedAt).toISOString(),
    changefreq: 'weekly',
    priority: 0.8,
  }));

  return {
    site: 'https://asmodeo.net',
    output: 'server',
    adapter: vercel(),
    integrations: [
      react(),
      sitemap({
        customPages, // este reemplaza el serialize
      }),
    ],
  };
});
