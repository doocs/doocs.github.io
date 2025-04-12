import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Doocs",
  description: "Doocs open souce organization",
  locales: {
    root: {
      label: '简体中文',
      lang: 'cn',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '主页', link: '/' },
          { text: '介绍', link: '/intro' }
        ],
        search: {
          provider: 'local'
        },
        logo: '/favicon-32x32.png',
        footer: {
          message: 'Released under the CC-BY-SA-4.0 license.',
          copyright: 'Copyright © 2018-present Doocs'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/doocs' }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/en' },
          { text: 'Introduction', link: '/en/intro' }
        ],
        search: {
          provider: 'local'
        },
        logo: '/favicon-32x32.png',
        footer: {
          message: 'Released under the CC-BY-SA-4.0 license.',
          copyright: 'Copyright © 2018-present Doocs'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/doocs' }
        ]
      }
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-0L5LCSTV6G' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-0L5LCSTV6G');`
    ]
  ],
  cleanUrls: true,
  sitemap: {
    hostname: 'https://doocs.org'
  }
})
