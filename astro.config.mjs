import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import axios from 'axios';

const pages = async () => {
  const res = await axios.get('https://asmodeo-back.onrender.com/escort')
  const customPages = res.data.map((escort) => {
    return `https://asmodeo.net/${escort.name}/${escort.id}`
  });
  return customPages;
}

export default defineConfig({
  site: 'https://asmodeo.net',
  output: 'server',
  adapter: vercel(),
  integrations: [
    react(),
    sitemap({
      customPages:await pages(),
      changefreq: 'weekly',
      priority: 0.9,
    }),
  ],
  redirects:{
    '/publica': '/publicar-perfil-escort-argentina'
  }
});