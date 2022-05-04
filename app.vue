<script lang="ts" setup>
  useHead({
    title: 'Nuxt Timeline Component',
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png'
      }
    ]
  })

  const points = [
    {
      date: new Date().toDateString(),
      title: 'Feature highlights',
      description: `
- [x] **Markdown supported** (this is using it!)
- [x] Syntax highlighting for embedded code
- [x] Works in Nuxt **and** Vue 3 (probably more, too, but I haven't tested)
- [x] Styled with WindiCSS via \`nuxt-windicss\` package

\`\`\`json
{
  "name": "nuxt-timeline-component",
  "version": "1.0.0",
  "author": "Nicholas Berlette <nick@berlette.com>",
  "license": "MIT",
  "private": false
}
\`\`\`
`
    },
    {
      title: 'Getting Started',
      description: `Inside \`app.vue\` (or one of your pages), we need to define an array of Timeline Points to render with the component. It is the only required property.
\`\`\`ts
// \<script setup\>
const points = [
  {
    title: 'First',
    date: '2022-05-01',
    description: 'We make it.'
  },
  {
    title: 'Then',
    description: '...we break it. So we can fix it.'
  },
  {
    title: 'Finally',
    description: '${'\\`'}lint${'\\`'} it, ${'\\`'}commit${'\\`'} it, and repeat.'
  }
]
\`\`\`

After that, just add \`<Timeline />\` to your template block:

\`\`\`vue
<template>
  <Timeline :points="points" />
</template>
\`\`\``
    },
    {
      title: 'TimelineProps',
      description: `\`\`\`ts
/**
 * @interface {TimelineProps}
 * @property {TimelinePoint[]} points - Used to construct the timeline. Required.
 * @property {boolean} [noMarkdown] - Disable markdown rendering for all TimelinePoints.
 * @property {boolean} [noNumbers] - Disable the CSS-based step numbers for each TimelinePoint.
 */
declare interface TimelineProps {
  points: TimelinePoint[];
  noMarkdown?: boolean;
  noNumbers?: boolean;
}
\`\`\``
    },
    {
      title: 'TimelinePoint',
      description: `
\`\`\`ts
declare interface TimelinePoint {
  // title is the only required property
  title: string;
  // adding a URL changes the title into a link
  url?: string;
  // adding a timestamp renders it just above the title
  date?: string;
  // markdown is supported in description
  description?: string;
  // ...or just **dangerously** inject HTML, raw dog
  html?: string;
  // future use (not yet implemented)
  tags?: string[];
}
\`\`\``
    },
    {
      title: 'Questions? Comments? Contributions?',
      description: `Check out the [GitHub Repository](https://github.com/nberlette/nuxt-timeline). If you've found a bug or have a feature request, please [create an issue](https://github.com/nberlette/nuxt-timeline/issues/new) and consider submitting a Pull Request!
      
  Contributions are warmly welcomed. Thank you! 😁`
    }
  ]
</script>

<template>
  <div class="max-w-3xl w-auto mx-auto my-10">
    <Header />
    <div>
      <Timeline :points="points" numbers markdown />
    </div>
    <Footer />
  </div>
</template>
