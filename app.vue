<script setup>
  const points = [
    {
      title: 'supacolors.ml',
      url: 'https://supacolors.ml',
      date: '2022-05-01',
      description: 'Supabase UI color palettes as a package.',
      tags: ['website', 'project', 'css']
    },
    {
      title: 'typehaus.org',
      url: 'https://typehaus.org',
      date: '2022-04-04',
      description: `Beautiful open source typefaces and typography resources.`,
      tags: ['website', 'project', 'fonts']
    },
    {
      title: 'canbus.app',
      url: 'https://wiki.canbus.app',
      date: '2021-10-10',
      description: 'Wiki and resources for learning about the automotive Controller Area Network.',
      tags: ['website', 'project', 'CAN']
    },
    {
      title: 'icns.ml',
      url: 'https://icns.ml',
      date: '2021-10-01',
      description:
        'SimpleIcons as a Service - SVG icons rendered on the Edge. Generate dynamically colored icons with lightning-fast response time.',
      tags: ['website', 'project', 'vercel', 'svg']
    },
    {
      title: '@brlt/n',
      date: '2022-04-20',
      description: 'Use the right package manager.',
      tags: ['package', 'npm', 'cli']
    },
    {
      title: 'dotfiles',
      url: 'https://dotfiles.ml',
      date: '2022-04-20',
      description:
        'My personal bash environment and other config files (dotfiles). Setup for zero-config usage with Gitpod Workspaces.',
      tags: ['package', 'gitpod']
    },
    {
      title: 'berlette.net',
      url: 'https://berlette.net',
      date: '2022-04-20',
      description:
        'Landing page for various sites, services, and apps in my network that are currently available to the public. Check em out!',
      tags: ['website', 'personal']
    },
    {
      title: 'harx',
      url: 'https://github.com/nberlette/harx',
      date: '2021-03-20',
      description: 'Extract and restore website date from HAR files (HTTP Archives).',
      tags: ['package', 'npm', 'cli'],
      archived: true
    },
    {
      title: 'malanna.page',
      date: '07-09-2021',
      description:
        'A memorial microsite for a fur-covered family member who passed away in 2021. Powered by Vercel and Prismic.',
      tags: ['website', 'personal']
    }
  ]
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
