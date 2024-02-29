import { defineConfig } from 'vitepress'

// 导入主题的配置
import { blogTheme } from './blog-theme'

// Vitepress 默认配置
// 详见文档：https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: blogTheme,
  lang: 'zh-cn',
  base: '/blog/',
  title: 'xkfe·blog',
  description: '粥里有勺糖的博客主题，基于 vitepress 实现',
  lastUpdated: true,
  appearance: 'dark',
  // 详见：https://vitepress.dev/zh/reference/site-config#head
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
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
    logo: '/logo.jpg',
    // editLink: {
    //   pattern:
    //     'https://github.com/ATQQ/sugar-blog/tree/master/packages/blogpress/:path',
    //   text: '去 GitHub 上编辑内容'
    // },
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
  }
})
