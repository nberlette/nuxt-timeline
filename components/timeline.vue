<script setup lang="ts">
  /**
   * Title is the only required property of TimelinePoint.
   * All other properties will only display their data and
   * respective sub-component elements if they are non-null.
   * @interface {TimelinePoint}
   * @property {string} title
   * @property {string | URL} [url]
   * @property {string | Date} [date]
   * @property {string} [description]
   */
  declare interface TimelinePoint {
    title: string
    url?: string | URL
    date?: string | Date
    description?: string
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
  const props = defineProps<{
    points: Array<TimelinePoint>
  }>()
</script>

<template>
  <div
    class="mx-10 m-10 flex flex-col flex-auto flex-shrink-0 border-l-2 border-dashed border-gray-200"
    style="counter-reset: point"
  >
    <div class="flex justify-start mb-10 group">
      <div class="w-2.5 h-2.5 rounded-full bg-blue-400 relative -left-1.5"></div>
    </div>
    <div
      class="flex my-10 group"
      v-for="(point, index) in props.points.sort(({ date: a }, { date: b }) => +Date.parse(b) - +Date.parse(a))"
      :key="index"
      style="counter-increment: point"
    >
      <div
        class="flex-shrink-0 w-4 h-4 relative top-2 left-0.5 transition-all duration-500 ease-in rounded-full bg-blue-50 group-hover:bg-blue-200 group-focus:bg-blue-400 peer-focus:bg-blue-400 ring-2 ring-gray-300 ring-offset-2 ring-offset-white group-hover:ring-gray-400 text-white text-xs text-center"
        style="margin-left: -0.66rem; content: counter(point)"
      ></div>
      <div class="justify-between w-full mx-8 text-left gap-y-0.5 flex flex-col">
        <div class="text-medium text-gray-600 my-1 font-mono" v-if="point.date">
          <span
            class="px-2 py-0.5 border border-b-2 border-gray-300 shadow-sm cursor-default hover:shadow-sm transition-all duration-300 ease-in rounded-md bg-gray-50 text-xs font-mono uppercase lg:text-sm"
            >{{ new Date(point.date).toLocaleDateString('en-US') }}</span
          >
        </div>
        <h2 class="font-medium text-3xl md:text-3xl font-display block w-full pb-1 mt-2">
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
          v-if="point.description"
        >
          {{ point.description }}
        </div>

        <div class="flex justify-start group p-0 m-0" v-if="index + 1 == points.length">
          <div class="w-2.5 h-2.5 rounded-full bg-blue-200 relative -ml-11 -bottom-11"></div>
        </div>
      </div>
    </div>
  </div>
</template>
