<script lang="ts" setup>
  useHead({
    title: 'Timeline Component for Vue and Nuxt',
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
- [x] Developed with zero-config as a core principle
- [x] Written in TypeScript, using Vue 3's Composition API
- [x] Styled with WindiCSS, easily customizable for whatever your use case is.
- [x] Automatic step numbers, in pure CSS. Disable with \`noNumbers\` prop.
- [x] **Supports Markdown out-of-the-box.** Disable it with the \`noMarkdown\` prop.
- [x] Includes syntax highlighting with \`highlight.js\`.

\`\`\`json
{
  "name": "nuxt-timeline",
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

[**See the TimelinePoint typedefs below ›››**](#timelinepoint)  

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

### Then add it to \`app.vue\`, or any page, or component...

[**See the TimelineProps typedefs below ›››**](#timelineprops)

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
