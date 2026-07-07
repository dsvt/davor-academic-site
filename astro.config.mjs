import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.davors.com',
  trailingSlash: 'never',
  integrations: [sitemap()],
  build: {
    format: 'file'
  }
});
