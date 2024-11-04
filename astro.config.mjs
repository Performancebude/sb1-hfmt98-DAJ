import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://dr-jensen-forensics.de',
  integrations: [
    tailwind(),
    react(),
    sitemap(),
  ],
  output: 'hybrid',
  adapter: netlify(),
});