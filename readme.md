<h1><img src="https://icns.ml/nuxtdotjs.svg" alt="" width="32" align="left"> <code>nuxt-timeline-component</code></h1>

Simple Timeline Component for Nuxt 3. Shown here is an example implementation: a chronological list of some personal projects of mine, ordered by newest item first.

The component source is located in `./components/timeline.vue`. `header.vue` and `footer.vue` are just for the purposes of the example app. I've included some (opinionated) styling by default, inside the component file itself, but it is easily customizable thanks to the WindiCSS integration.

To get started, just pass an array of `TimelinePoint` elements to the `<Timeline />` component! The only required property for each point is `title`, the rest are optional and will only render their subcomponent elements if their value is non-null.

```ts
declare interface TimelinePoint {
  title: string;
  url?: string | URL;
  date?: string | Date;
  description?: string;
  tags?: Array<string>;
}
```

<a href="https://stackblitz.com/edit/nuxt-timeline" target="_blank" rel="noopener noreferer" title="Edit on StackBlitz ⚡️"><img src="https://cdn.berlette.com/svg/open-in-stackblitz.svg" alt="Edit on Stackblitz" height="32"></a> <a href="https://codesandbox.io/s/github/nberlette/nuxt-timeline/tree/main" target="_blank" rel="noopener noreferer" title="Open in CodeSandbox ⚡️"><img src="https://cdn.berlette.com/svg/open-in-codesandbox.svg?123" alt="Edit on CodeSandbox" height="32"></a> <a href="https://gitpod.io/#https://github.com/nberlette/nuxt-timeline" target="_blank" rel="noopener noreferrer" title="Open in Gitpod"><img src="https://cdn.berlette.com/svg/open-in-gitpod.svg?" alt="Open in Gitpod" height="32"></a>

---

MIT © Nicholas Berlette
