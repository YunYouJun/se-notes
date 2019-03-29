module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/note.png' }]
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
      { 
        text: '指南',
        items: [
          { text: '关于', link: '/guide/' },
          { text: '风格指南', link: '/guide/style.html' }
        ]
      },
      {
        text: '笔记',
        items: [
          { text: '单项选择题', link: '/notes/one-choice/' },
          { text: '判断题', link: '/notes/true-or-false/' },
          { text: '填空题', link: '/notes/gap-filling/' },
          { text: '名词解释', link: '/notes/explanation-of-nouns/' },
          { text: '简答题', link: '/notes/short-answer/' },
          { text: '应用题', link: '/notes/applied-problems/' }
        ]
      },
      { 
        text: '历年真题', 
        items: [
          { text: 'CUC 软件工程', link: '/past-exam-papers/cuc/'}
        ]
      },
      { text: '博客', link: 'https://yunyoujun.cn' },
    ],
    repo: 'YunYouJun/software-engineering-notes',
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