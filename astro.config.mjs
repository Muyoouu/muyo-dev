// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { satteri } from '@astrojs/markdown-satteri';
import rehypeImageDimensions from './src/lib/rehype-image-dimensions.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://muyo.dev',
  integrations: [solidJs(), sitemap()],
  devToolbar: { enabled: false },

  markdown: {
    processor: satteri({
      hastPlugins: [rehypeImageDimensions]
    })
  },

  vite: {
    plugins: [tailwindcss()]
  }
});