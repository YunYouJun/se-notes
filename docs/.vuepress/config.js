module.exports = {
  base: '/software-engineering-note/',
  head: [
    ['link', { rel: 'icon', href: '/note.png' }],
    ['meta', { name: 'theme-color', content: '#000000' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '软件工程笔记',
      description: '软件工程应试笔记',
    },
  },
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: '历年真题', link: '/past-exam-papers/' },
      { text: '博客', link: 'https://yunyoujun.cn' },
    ],
    repo: 'YunYouJun/software-engineering-note',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页',
    sidebar: 'auto',
    lastUpdated: '上次更新'
  },
  plugins: {
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        message: '发现新内容可用',
        buttonText: '刷新'
      }
    },
    '@vuepress/google-analytics': {
      ga: 'UA-121354150-7'
    }
  }
}