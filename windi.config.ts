import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,svelte,astro}'],
    exclude: ['node_modules', '.git'],
  },
});
