import { defineConfig } from 'vitepress'
// 导入主题的配置
import { blogTheme } from './blog-theme'
import { pwa } from '../scripts/pwa.mts'
import { buildEnd } from '../scripts/build.mts'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: blogTheme,
  lang: 'zh-cn',
  title: 'xkfe·blog',
  description: 'vitepress博客;xkfe·blog 记录随笔与学习笔记;前端学习/资源分享;',
  lastUpdated: true,
  appearance: 'dark',
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    // 展示 2,3 级标题在目录中
    outline: {
      level: [2, 3],
      label: '目录'
    },
    // 默认文案修改
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '相关文章',
    lastUpdatedText: '上次更新于',

    // 设置logo
    // logo: 'https://qn.kaife.cn/blog/20240301213255-logo.webp',
    logo: 'https://qn.kaife.cn/blog/20240310151748-logo.svg',
    editLink: {
      pattern:
        'https://github.com/xkfe/blog/tree/master/docs/:path',
      text: '在 GitHub 打开'
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '前端',
        items: [
          { text: 'HTML', link: '/frontend/html/' },
          { text: 'CSS', link: '/frontend/css/' },
          { text: 'JavaScript', link: '/frontend/js/' },
          { text: 'Vue', link: '/frontend/vue/' },
          { text: 'React', link: '/frontend/react/' },
          { text: 'Node', link: '/frontend/node/' },
          { text: 'TypeScript', link: '/frontend/typescript/' },
        ]
      },
      { text: '后端',
        items: [
          { text: 'Java', link: '/backend/java/' },
          { text: 'Spring', link: '/backend/spring/' },
          { text: 'SpringBoot', link: '/backend/springboot/'},
          { text: 'MyBatis', link: '/backend/mybatis/' },
          { text: 'MySql', link: '/backend/mysql/' },
          { text: 'Redis', link: '/backend/redis/' },
        ]
      },
      { text: '关于', link: '/about.html' },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/xkfe/blog'
      }
    ]
  },
  vite: {
    plugins: [
      pwa()
    ]
  },
  buildEnd
})
