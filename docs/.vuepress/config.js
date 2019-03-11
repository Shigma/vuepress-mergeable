const name = 'vuepress-mergeable'

const getEcosystem = (locale, ecosystem, plugins, themes, others) => ({
  text: ecosystem,
  items: [{
    text: plugins,
    items: [{
      text: 'vuepress-plugin-mathjax',
      link: `https://Shigma.github.io/vuepress-plugin-mathjax/${locale}`,
    }, {
      text: 'vuepress-plugin-migrate',
      link: `https://Shigma.github.io/vuepress-plugin-migrate/${locale}`,
    }, {
      text: 'vuepress-plugin-pangu',
      link: 'https://Shigma.github.io/markdown-it-pangu/',
    }]
  }],
})

module.exports = ({ isProd }) => ({
  base: `/${name}/`,

  plugins: [
    '@vuepress/medium-zoom',
    '@vuepress/back-to-top',
  ],
  
  locales: {
    '/': {
      lang: 'en-US',
      title: name,
      description: 'Customize how a VuePress plugin merges its options.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: name,
      description: '定制化 VuePress 插件选项合并的方式',
    },
  },
  
  themeConfig: {
    repo: `Shigma/${name}`,
    editLinks: true,
    docsDir: 'docs',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: [
          getEcosystem('', 'Ecosystem', 'Plugins')
        ],
      },
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          getEcosystem('zh', '生态系统', '插件')
        ],
      },
    },
  },

  evergreen: !isProd,
})
