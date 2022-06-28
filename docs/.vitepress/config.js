export default {
  title: '小豪的blog',
  description: 'razzh Razzh',
  base: '/blog/',
  lang: 'zh-CN',
  themeConfig: {
    lastUpdated: '最后更新时间',
    nav: [
      { text: '🥳前端', link: '/front/' },
      { text: '🎯算法', link: '/algorithm/' },
      { text: '📚阅读', link: '/book/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rzhAvenir/blog' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Razzh'
    },
    sidebar: {
      '/front/': [
        {
          text: '前端',
          collapsible: true,
          items: [
            { text: 'Item A', link: '/front/item-a' },
            { text: 'Item B', link: '/front/item-b' }
          ]
        }
      ]
    }
  }
}

// function sidebarGuide() {
//   return [
//     {
//       text: 'Introduction',
//       collapsible: true,
//       items: [
//         { text: 'What is VitePress?', link: '/guide/what-is-vitepress' },
//         { text: 'Getting Started', link: '/guide/getting-started' },
//         { text: 'Configuration', link: '/guide/configuration' },
//         { text: 'Deploying', link: '/guide/deploying' }
//       ]
//     },
//     {
//       text: 'Writing',
//       collapsible: true,
//       items: [
//         { text: 'Markdown', link: '/guide/markdown' },
//         { text: 'Asset Handling', link: '/guide/asset-handling' },
//         { text: 'Frontmatter', link: '/guide/frontmatter' },
//         { text: 'Using Vue in Markdown', link: '/guide/using-vue' },
//         { text: 'API Reference', link: '/guide/api' }
//       ]
//     },
//     {
//       text: 'Theme',
//       collapsible: true,
//       items: [
//         { text: 'Introduction', link: '/guide/theme-introduction' },
//         { text: 'Nav', link: '/guide/theme-nav' },
//         { text: 'Sidebar', link: '/guide/theme-sidebar' },
//         { text: 'Prev Next Link', link: '/guide/theme-prev-next-link' },
//         { text: 'Edit Link', link: '/guide/theme-edit-link' },
//         { text: 'Last Updated', link: '/guide/theme-last-updated' },
//         { text: 'Layout', link: '/guide/theme-layout' },
//         { text: 'Home Page', link: '/guide/theme-home-page' },
//         { text: 'Team Page', link: '/guide/theme-team-page' },
//         { text: 'Footer', link: '/guide/theme-footer' },
//         { text: 'Search', link: '/guide/theme-search' },
//         { text: 'Carbon Ads', link: '/guide/theme-carbon-ads' }
//       ]
//     },
//     {
//       text: 'Migrations',
//       collapsible: true,
//       items: [
//         {
//           text: 'Migration from VuePress',
//           link: '/guide/migration-from-vuepress'
//         },
//         {
//           text: 'Migration from VitePress 0.x',
//           link: '/guide/migration-from-vitepress-0'
//         }
//       ]
//     }
//   ]
// }

// function sidebarConfig() {
//   return [
//     {
//       text: 'Config',
//       items: [
//         { text: 'Introduction', link: '/config/introduction' },
//         { text: 'App Configs', link: '/config/app-configs' },
//         { text: 'Theme Configs', link: '/config/theme-configs' },
//         {
//           text: 'Frontmatter Configs',
//           link: '/config/frontmatter-configs'
//         }
//       ]
//     }
//   ]
// }
