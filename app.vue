<script setup>
const points = [
  {
    title: 'supacolors.ml',
    url: 'https://supacolors.ml',
    date: '2022-05-01',
    description: 'Supabase UI color palettes as a package.',
    tags: ['website', 'project', 'css'],
  },
  {
    title: 'plugwind.com',
    url: 'https://plugwind.com',
    date: '2022-04-01',
    description: 'Modern plugins and presets for Tailwind and WindiCSS.',
    tags: ['website', 'project', 'css'],
  },
  {
    title: 'typehaus.org',
    url: 'https://typehaus.org',
    date: '2022-04-04',
    description: `Beautiful open source typefaces and typography resources.`,
    tags: ['website', 'project', 'fonts'],
  },
  {
    title: 'tutorialfeed.com',
    url: 'https://tutorialfeed.com',
    date: '2022-01-01',
    description: 'Feed your head.',
    tags: ['website', 'project', 'dev'],
  },
  {
    title: 'canbus.app',
    url: 'https://canbus.app',
    date: '2021-10-10',
    description:
      'Wiki and resources for learning about the automotive Controller Area Network.',
    tags: ['website', 'project', 'CAN'],
  },
  {
    title: 'icns.ml',
    url: 'https://icns.ml',
    date: '2021-10-01',
    description:
      'SimpleIcons as a Service - SVG icons rendered on the Edge. Generate dynamically colored icons with lightning-fast response time.',
    tags: ['website', 'project', 'vercel', 'svg'],
  },
  {
    title: 'gitapi.ml',
    url: 'https://gitapi.ml',
    date: '2021-10-01',
    description:
      'GitHub Discussions API endpoint, parses GraphQL requests to a RESTful HTTP endpoint.',
    tags: ['website', 'project', 'api'],
  },
  {
    title: 'discms',
    url: 'https://discms.ml',
    date: '2022-04-01',
    description:
      'Discussions Content Management System - manage your website content and user interactions all with GitHub Discussions.',
    tags: ['microservice', 'api', 'github'],
  },
  {
    title: 'flotion',
    url: 'https://flotion.cf',
    date: '2022-03-01',
    description:
      'CloudFLare + nOtion = Flotion. Parse and render your Notion content through a cutting-edge, blazing fast, Edge-rendered API.',
    tags: ['microservice', 'api', 'notion', 'cloudflare'],
  },
  {
    title: '@brlt/n',
    date: '2022-04-20',
    description: 'Use the right package manager.',
    tags: ['package', 'npm', 'cli'],
  },
  {
    title: 'dotfiles',
    url: 'https://dotfiles.ml',
    date: '2022-04-20',
    description:
      'My personal bash environment and other config files (dotfiles). Setup for zero-config usage with Gitpod Workspaces.',
    tags: ['package', 'gitpod'],
  },
  {
    title: 'berlette.net',
    url: 'https://berlette.net',
    date: '2022-04-20',
    description:
      'Landing page for various sites, services, and apps in my network that are currently available to the public. Check em out!',
    tags: ['website', 'personal'],
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
  },
  {
    title: 'rememberjimmy.com',
    url: 'https://rememberjimmy.com',
    date: '2022-05-27',
    description: 'Memorial website for my late brother James Contino.',
    tags: ['website', 'personal'],
  },
  {
    title: 'berlette.com',
    url: 'https://berlette.com',
    date: '2020-06-20',
    description:
      'My personal site for my development and other professional tech services.',
    tags: ['website', 'personal'],
  },
];
</script>

<template>
  <div class="max-w-3xl w-auto mx-auto my-10">
    <Header />
    <div>
      <Timeline :points="points" />
    </div>
    <Footer />
  </div>
</template>
