<h1><img src="https://icns.ml/nuxtdotjs.svg" alt="" width="32" align="left"> <code>nuxt-timeline-component</code></h1>

<a href="https://stackblitz.com/edit/nuxt-timeline" target="_blank" rel="noopener noreferer" title="Open in StackBlitz ⚡️" class="inline-flex"><img src="https://cdn.berlette.com/svg/open-in-stackblitz.svg" alt="Open in StackBlitz ⚡️" height="32"></a>
<a href="https://codesandbox.io/s/github/nberlette/nuxt-timeline/tree/main" target="_blank" rel="noopener noreferer" title="Open in CodeSandbox 📦" class="inline-flex"><img src="https://cdn.berlette.com/svg/open-in-codesandbox.svg?123" alt="Open in CodeSandbox 📦" height="32"></a>
<a href="https://gitpod.io/#https://github.com/nberlette/nuxt-timeline" target="_blank" rel="noopener noreferrer" title="Open in Gitpod 👨🏽‍💻" class="inline-flex"><img src="https://cdn.berlette.com/svg/open-in-gitpod.svg?" alt="Open in Gitpod 👨🏽‍💻" height="32"></a>

<h4 align=center>Timeline Component built with Vue 3 and Nuxt 3 in mind. <a href="https://nuxt.ml" target="_blank" rel="noopener noreferer">See it live on nuxt.ml!</a></h4>

## Zero-config: Zip. Zilch. Nada.

No configuration is needed to integrate a Timeline into your project. Just provide a list of timeline points in the `points` prop.

## Features

- [x] Developed with zero-config as a core principle
- [x] Written in TypeScript, using Vue 3's Composition API
- [x] Styled with WindiCSS, easily customizable for whatever your use case is.
- [x] **Supports markdown out of the box.** Or disable it with the `noMarkdown` prop.
- [x] Includes syntax highlighting with `highlight.js`. Disable it with `noSyntax`.
- [x] Auto-incrementing step numbers, in pure CSS. Disable them with the `noNumbers` prop.

## Installation

To get started, just pass an array of `TimelinePoint` elements to the `<Timeline />` component! The
only required property for each point is `title`, the rest are optional and will only render their
subcomponent elements if their value is non-null.

### First, define a list of TimelinePoint objects

[**See the TimelinePoint typedefs below ›››**](#timelinepoint)

```ts
// <script setup>
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
    description: '\`lint\`it, \`commit\` it, and repeat.'
  }
]
// </script>
```

### Then add it to `app.vue`, or any page, or component...

[**See the TimelineProps typedefs below ›››**](#timelineprops)

```vue
<template>
  <Timeline :points="points" />
</template>
```

## TypeScript Definitions

Included in the component file are full TypeScript definitions, with JSDoc annotations.

### `TimelineProps`

```ts
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
```

### `TimelinePoint`

```ts
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
```

The component source is located in `./components/timeline.vue` - `header.vue` and `footer.vue` are
just for the demo. I've included some (opinionated) styling by default, inside the component file itself, 
but it is easily customizable thanks to the WindiCSS integration.

---

MIT © Nicholas Berlette
