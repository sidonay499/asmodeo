import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import axios from 'axios';
import partytown from '@astrojs/partytown';

const pages = async () => {
  try {
    const res = await axios.get('https://asmodeo-back.onrender.com/escort')

    if (!Array.isArray(res.data)) return []

    return res.data.map((escort) => 
      `https://asmodeo.net/${escort.name}/${escort.id}`
    )
  } catch (error) {
    console.error("Error fetching sitemap pages:", error)
    return []
  }
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
    partytown({
      config: {
        forward: ['dataLayer.push', 'gtag'],
      },
    }),
  ],
    redirects:{
      '/publica': '/publicar-perfil-escort-argentina',
      '/blog/escorts-vip.md': '/blog/Cómo-llevar-un-buen-trato-con-una-Escort-VIP.md'
    }
});