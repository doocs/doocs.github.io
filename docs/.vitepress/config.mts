import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Doocs",
  description: "Doocs open souce organization",
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: '主页', link: '/' },
          { text: '介绍', link: '/intro' }
        ],
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
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
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
