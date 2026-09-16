// @ts-check
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// Keep this in step with `astro`. Astro pins its own copy of the satteri processor,
// and a version skew here would put two markdown pipelines in the build.
import { satteri } from '@astrojs/markdown-satteri';
import rehypeImageDimensions from './src/lib/rehype-image-dimensions.mjs';
import datasheetLight from './src/lib/code-theme.mjs';

// https://astro.build/config
export default defineConfig({
  site: 'https://muyo.dev',
  integrations: [solidJs(), sitemap()],
  devToolbar: { enabled: false },

  markdown: {
    shikiConfig: {
      themes: { light: datasheetLight, dark: 'github-dark-default' },
      defaultColor: false,
      langAlias: { vba: 'vb' }
    },
    processor: satteri({
      hastPlugins: [rehypeImageDimensions]
    })
  },

  vite: {
    plugins: [tailwindcss()]
  }
});