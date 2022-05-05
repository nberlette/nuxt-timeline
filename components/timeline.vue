<script setup lang="ts">
  import Slugger from 'github-slugger'
  import hljs from 'highlight.js/lib/core'
  import bash from 'highlight.js/lib/languages/bash'
  import handlebars from 'highlight.js/lib/languages/handlebars'
  import javascript from 'highlight.js/lib/languages/javascript'
  import json from 'highlight.js/lib/languages/json'
  import typescript from 'highlight.js/lib/languages/typescript'
  import md from 'highlight.js/lib/languages/markdown'
  import xml from 'highlight.js/lib/languages/xml'
  import { marked } from 'marked'
  const slugify = new Slugger()

  hljs.registerLanguage('bash', bash)
  hljs.registerLanguage('xml', xml)
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('typescript', typescript)
  hljs.registerLanguage('json', json)
  hljs.registerLanguage('markdown', md)
  hljs.registerLanguage('hbs', handlebars)
  hljs.registerAliases(['svelte', 'astro'], { languageName: 'handlebars' })
  hljs.registerAliases(['md'], { languageName: 'markdown' })
  hljs.registerAliases(['vue', 'react', 'jsx', 'tsx'], { languageName: 'xml' })
  hljs.registerAliases(['ts', 'dts', 'types'], { languageName: 'typescript' })
  hljs.registerAliases(['js', 'module', 'mjs', 'cjs'], { languageName: 'javascript' })

  /**
   * Title is the only required property of TimelinePoint.
   * All other properties will only display their data and
   * respective sub-component elements if they are non-null.
   * @interface {TimelinePoint}
   * @property {string} title - The title of this TimelinePoint. Required.
   * @property {string} [url] - Adding a URL converts the title into a link.
   * @property {string} [date] - Adding a valid date / timestamp will render it above the title.
   * @property {string} [description] - Renders beneath the title. Markdown and syntax highlighting supported.
   * @property {string} [html] - Inject raw HTML for the description ()without any form of sanitation!)
   * @property {string[]} [tags] - Add tags for this TimelinePoint. For future use (not yet implemented!)
   */
  declare interface TimelinePoint {
    title: string
    url?: string
    date?: string
    description?: string
    html?: string
    tags?: string[]
  }

  /**
   * 
   * 
   * @interface {TimelineProps}
   * @property {TimelinePoint[]} points - Used to construct the timeline. Required.
   * @property {boolean} [noMarkdown] - Disable markdown rendering for all TimelinePoints.
   * @property {boolean} [noNumbers] - Disable the CSS-based step numbers for each TimelinePoint.
   */
  declare interface TimelineProps {
    points: TimelinePoint[]
    noMarkdown?: boolean
    noNumbers?: boolean
  }

  /**
   * We can use one of two methods for defining our component props:
   *  1. defined as a general type assertion, as seen here
   *  2. defined as the arguments of `defineProps`
   *
   * You may *not* mix the two, however. You cannot, for example, do:
   * ```ts
   * const props = defineProps<{ points: Array<any> }>({
   *    points: {
   *      type: Array
   *    }
   * })
   * ```
   */
  const props = defineProps<TimelineProps>()

  const parseMarkdown = (text: string): string => {
    if (props.noMarkdown) return text
    return marked.parse(text, {
      gfm: true,
      langPrefix: 'language-',
      highlight: (code, language) => {
        try {
          return hljs.highlight(code, { language }).value as string
        } catch {
          return code
        }
      }
    })
  }
</script>

<template>
  <div class="m-10 flex flex-col flex-auto flex-shrink-0 border-l-2 border-gray-200" style="counter-reset: point">
    <div class="flex justify-start mb-10 group">
      <div
        class="w-2.5 h-2.5 rounded-full bg-blue-200 hover:bg-blue-400 transition-colors duration-300 ease-in relative -left-1.5"
      ></div>
    </div>
    <div
      class="flex py-7 group"
      v-for="(point, index) in props.points.sort(({ date: a }, { date: b }) => +Date.parse(b) - +Date.parse(a))"
      :key="index"
      style="counter-increment: point"
    >
      <div
        :class="
          'flex-shrink-0 w-5 h-5 relative top-2 -left-2.5 p-0.5 -ml-px text-blue-900/60 font-semibold text-xs text-center transition-all duration-500 ease-in rounded-full bg-blue-50 group-hover:(bg-blue-100 ring-violet-400 text-blue-900) ring-2 ring-gray-200 ring-offset-2 ring-offset-white)' +
          (!props.noNumbers ? ' before:(content-[counter(point)] p-1 pt-[3px])' : '')
        "
      ></div>
      <div class="justify-between w-full mx-8 text-left gap-y-0.5 flex flex-col">
        <div class="text-medium text-gray-600 mt-1 mb-3 font-mono" v-if="point.date">
          <span
            class="px-2 py-0.5 border border-b-2 border-gray-300 shadow-sm cursor-default hover:shadow-sm transition-all duration-300 ease-in rounded-md bg-gray-50 text-xs font-mono uppercase lg:text-sm"
            >{{ new Date(point.date).toLocaleDateString('en-US') }}</span
          >
        </div>
        <a :name="slugify.slug(point.title)" :id="slugify.slug(point.title)"></a>
        <h2 class="font-medium text-3xl md:text-3xl font-display block w-full pb-1 mt-0">
          <a
            :href="point.url"
            class="peer underline decoration-1 decoration-wavy decoration-blue-300"
            :title="point.title"
            :aria-label="point.title"
            v-if="point.url"
          >
            <span class="cursor-pointer">{{ point.title }}</span>
          </a>
          <span class="cursor-default" v-else>{{ point.title }}</span>
        </h2>
        <div
          class="leading-7 my-0.5 transition-all duration-500 ease-in text-gray-600 group-hover:text-gray-900 cursor-default"
          v-if="point.description || point.html"
        >
          <div v-if="point.html" v-html="point.html"></div>
          <div v-if="point.description" v-html="parseMarkdown(point.description)"></div>
        </div>

        <div class="flex justify-start group p-0 m-0" v-if="index + 1 == props.points.length">
          <div class="w-2.5 h-2.5 rounded-full bg-blue-200 relative -left-14 -ml-px -bottom-9"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  @import 'highlight.js/styles/github-dark-dimmed.css';
  pre {
    @apply bg-gray-800 text-gray-200 px-3 py-2.5 rounded-md mt-5 mb-3 whitespace-pre-wrap break-words;
  }
  pre > code {
    @apply whitespace-pre-wrap break-words;
  }
  pre > code,
  pre,
  code {
    font-family: 'Operator Mono Lig', 'Dank Mono', dm, 'MonoLisa', ml, 'Fira Code', 'Fira Mono', 'Courier New', Courier, monospace !important;
  }
</style>
