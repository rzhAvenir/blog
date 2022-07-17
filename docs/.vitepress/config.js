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
      { text: '📚阅读', link: '/book/' },
      { text: '👴关于我', link: '/me/' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/rzhAvenir/blog' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Razzh'
    },
    sidebar: {
      '/front/': frontEnd()
    }
  }
}

function frontEnd() {
  return [
    {
      text: 'Vue.js',
      collapsible: true,
      items: [
        { text: 'Item A', link: '/front/item-a' },
        { text: 'Item B', link: '/front/item-b' }
      ]
    },
    {
      text: 'Library',
      collapsible: true,
      items: [{ text: 'koa', link: '/front/library/koa' },
              { text: 'useAxios', link: '/front/library/useAxios' }]
    },
    {
      text: 'JavaScript',
      collapsible: true,
      items: [{ text: 'async-await', link: '/front/js/async-await' }]
    }
  ]
}
