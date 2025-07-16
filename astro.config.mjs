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
            serialize: async (item) => {
                // Configuración por defecto para todas las páginas
                const defaultConfig = {
                    url: item.url,
                    lastmod: new Date(),
                    priority: 0.8
                };

                // Si es una página de perfil dinámico, obtener todos los perfiles
                if (item.url.includes('[name]') || item.url.includes('[id]')) {
                    const profiles = await getAllEscorts();
                    
                    // Retornar un array con todas las URLs de perfiles
                    return profiles.map(profile => ({
                        url: `https://asmodeo.net/${profile.name}/${profile.id}`,
                        lastmod: profile.updatedAt ? new Date(profile.updatedAt) : new Date(),
                        priority: 0.9,
                        changefreq: 'weekly'
                    }));
                }

                // Para páginas estáticas, retornar configuración por defecto
                return defaultConfig;
            }
        })
    ]
});