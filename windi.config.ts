import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'media',
  theme: {
    extend: {
      // ...
    },
  },
  attributify: {
    prefix: '',
    separator: '-',
    disable: [],
  },
  shortcuts: {
    'underline-wavy-blue':
      'underline decoration-1 decoration-wavy decoration-blue-300',
  },
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,svelte,astro}'],
    exclude: ['node_modules', '.git'],
  },
});
