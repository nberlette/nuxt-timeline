import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        mono: [
          'Operator Mono SSm Lig',
          'Operator Mono Lig',
          'Operator Mono',
          'Dank Mono',
          'dm',
          'MonoLisa',
          'ml',
          'Fira Code',
          'ui-monospace',
          'SFMono-Regular',
        ],
      },
    },
  },
  attributify: true,
  shortcuts: {
    'underline-wavy-blue': 'underline decoration-1 decoration-wavy decoration-blue-300',
  },
  extract: {
    include: ['**/*.{vue,html,jsx,tsx,svelte,astro}'],
    exclude: ['node_modules', '.git'],
  },
})
