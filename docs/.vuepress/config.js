const dayjs = require("dayjs");

module.exports = {
  head: [
    ["link", { rel: "icon", href: "/note.png" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["meta", { name: "theme-color", content: "#6200ee" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "#6200ee" },
    ],
    ["link", { rel: "apple-touch-icon", href: "/note.png" }],
    ["link", { rel: "mask-icon", href: "/note.png", color: "#6200ee" }],
    ["meta", { name: "msapplication-TileImage", content: "/note.png" }],
    ["meta", { name: "msapplication-TileColor", content: "#6200ee" }],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "软件工程笔记",
      description: "软件工程应试笔记",
    },
  },
  themeConfig: {
    nav: [
      {
        text: "指南",
        items: [
          { text: "关于", link: "/guide/" },
          { text: "风格指南", link: "/guide/style.html" },
        ],
      },
      {
        text: "笔记",
        items: [
          { text: "单项选择题", link: "/notes/one-choice/" },
          { text: "判断题", link: "/notes/true-or-false/" },
          { text: "填空题", link: "/notes/gap-filling/" },
          { text: "名词解释", link: "/notes/explanation-of-nouns/" },
          { text: "简答题", link: "/notes/short-answer/" },
          { text: "应用题", link: "/notes/applied-problems/" },
        ],
      },
      {
        text: "历年真题",
        items: [{ text: "CUC 软件工程", link: "/past-exam-papers/cuc/" }],
      },
      { text: "博客", link: "https://yunyoujun.cn" },
    ],
    repo: "YunYouJun/se-notes",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    sidebar: "auto",
    lastUpdated: "上次更新",
  },
  plugins: {
    "@vuepress/back-to-top": true,
    "@vuepress/medium-zoom": true,
    "@vuepress/pwa": {
      serviceWorker: true,
      updatePopup: true,
    },
    "@vuepress/google-analytics": {
      ga: "UA-121354150-7",
    },
    "vuepress-plugin-google-adsense": {
      ad_client: "ca-pub-2245427233262012",
    },
    "@vuepress/last-updated": {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss");
      },
    },
  },
};
