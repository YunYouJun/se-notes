module.exports = {
  title: '软件工程笔记',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
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