<script setup>
import Timeline from './timeline.vue';
const points = [
  {
    title: 'supacolors.ml',
    url: 'https://supacolors.ml',
    date: '2022-05-01',
    description: 'Supabase UI color palettes as a package.',
    tags: ['website', 'project', 'css'],
    archived: false,
  },
  {
    title: 'plugwind.com',
    url: 'https://plugwind.com',
    date: '2022-04-01',
    description: 'Modern plugins and presets for Tailwind and WindiCSS.',
    tags: ['website', 'project', 'css'],
    archived: false,
  },
  {
    title: 'typehaus.org',
    url: 'https://typehaus.org',
    date: '2022-04-04',
    description: `Beautiful open source typefaces and typography resources.`,
    tags: ['website', 'project', 'fonts'],
    archived: false,
  },
  {
    title: 'tutorialfeed.com',
    url: 'https://tutorialfeed.com',
    date: '2022-01-01',
    description: 'Feed your head.',
    tags: ['website', 'project', 'dev'],
    archived: false,
  },
  {
    title: 'canbus.app',
    url: 'https://canbus.app',
    date: '2021-10-10',
    description:
      'Wiki and resources for learning about the automotive Controller Area Network.',
    tags: ['website', 'project', 'CAN'],
    archived: false,
  },
  {
    title: 'icns.ml',
    url: 'https://icns.ml',
    date: '2021-10-01',
    description:
      'SimpleIcons as a Service - SVG icons rendered on the Edge. Generate dynamically colored icons with lightning-fast response time.',
    tags: ['website', 'project', 'vercel', 'svg'],
    archived: false,
  },
  {
    title: 'gitapi.ml',
    url: 'https://gitapi.ml',
    date: '2021-10-01',
    description:
      'GitHub Discussions API endpoint, parses GraphQL requests to a RESTful HTTP endpoint.',
    tags: ['website', 'project', 'api'],
    archived: false,
  },
  {
    title: 'discms',
    url: 'https://discms.ml',
    date: '2022-04-01',
    description:
      'Discussions Content Management System - manage your website content and user interactions all with GitHub Discussions.',
    tags: ['microservice', 'api', 'github'],
    archived: false,
  },
  {
    title: 'flotion',
    url: 'https://flotion.cf',
    date: '2022-03-01',
    description:
      'CloudFLare + nOtion = Flotion. Parse and render your Notion content through a cutting-edge, blazing fast, Edge-rendered API.',
    tags: ['microservice', 'api', 'notion', 'cloudflare'],
    archived: false,
  },
  {
    title: '@brlt/n',
    date: '2022-04-20',
    description: 'Use the right package manager.',
    tags: ['package', 'npm', 'cli'],
    archived: false,
  },
  {
    title: 'dotfiles',
    url: 'https://dotfiles.ml',
    date: '2022-04-20',
    description:
      'My personal bash environment and other config files (dotfiles). Setup for zero-config usage with Gitpod Workspaces.',
    tags: ['package', 'gitpod'],
    archived: false,
  },
  {
    title: 'berlette.net',
    url: 'https://berlette.net',
    date: '2022-04-20',
    description:
      'Landing page for various sites, services, and apps in my network that are currently available to the public. Check em out!',
    tags: ['website', 'personal'],
    archived: false,
  },
  {
    title: 'harx',
    url: 'https://github.com/nberlette/harx',
    date: '2021-03-20',
    description:
      'Extract and restore website date from HAR files (HTTP Archives).',
    tags: ['package', 'npm', 'cli'],
    archived: true,
  },
  {
    title: 'malanna.page',
    date: '07-09-2021',
    description:
      'A memorial microsite for a fur-covered family member who passed away in 2021. Powered by Vercel and Prismic.',
    tags: ['website', 'personal'],
    archived: false,
  },
  {
    title: 'rememberjimmy.com',
    url: 'https://rememberjimmy.com',
    date: '2022-05-27',
    description: 'Memorial website for my late brother James Contino.',
    tags: ['website', 'personal'],
    archived: false,
  },
  {
    title: 'berlette.com',
    url: 'https://berlette.com',
    date: '2020-06-20',
    description:
      'My personal site for my development and other professional tech services.',
    tags: ['website', 'personal'],
    archived: false,
  },
];
</script>

<template>
  <div class="max-w-3xl w-auto mx-auto my-10">
    <div
      class="
        w-12
        h-12
        mx-auto
        bg-black
        px-0.5
        ring-4 ring-gray-300
        rounded-full
      "
    >
      <img
        src="https://cdn.berlette.com/brand/logo.svg"
        alt=""
        align="left"
        width="48"
        height="48"
        class="w-12 h-12 mr-3"
      />
    </div>
    <h1
      class="
        text-center
        place-items-center
        justify-center
        mx-4
        my-5
        text-3xl
        md:text-5xl
        font-thin
        tracking-tight
        flex
        gap-x-3
      "
    >
      <span class="underline decoration-1 decoration-wavy decoration-blue-300"
        >projects</span
      >
      ·
      <span class="underline decoration-1 decoration-wavy decoration-blue-300"
        >apps</span
      >
      ·
      <span class="underline decoration-1 decoration-wavy decoration-blue-300"
        >websites</span
      >
    </h1>
    <h2
      class="
        w-full
        text-center
        font-light
        text-xs
        md:text-base
        xl:text-lg
        text-gray-500
        mb-20
      "
    >
      <strong class="font-medium">Free Open Source Software</strong> by
      <a
        href="https://github.com/nberlette"
        target="_blank"
        rel="noopener noreferer"
        class="underline font-medium"
        >Nicholas Berlette</a
      >
    </h2>
    <div>
      <Timeline :timelinePoints="points" />
    </div>
    <div
      class="
        text-center
        py-4
        my-10
        border-t border-gray-300 border-dashed
        text-xs
        md:text-sm
        lg:text-base
        text-gray-400
        hover:text-gray-700
        duration-400
        transition-colors
        ease-in
        cursor-help
      "
    >
      MIT &copy; Nicholas Berlette
    </div>
  </div>
</template>
