import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import getAllEscorts from './src/adapters/escorts/getAllEscorts';

export default async function () {
  const data = await getAllEscorts();
  const slugs = data?.escorts.map((p) => `/${p.name}/${p.id}`) ?? [];

  return defineConfig({
    site: 'https://tusitio.com',
    output: 'server',
    integrations: [
      react(),
      sitemap({
        customPages: slugs
      })
    ]
  });
}