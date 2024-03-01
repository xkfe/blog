// 主题独有配置
import { getThemeConfig } from '@sugarat/theme/node'

// 所有配置项，详见文档: https://theme.sugarat.top/
const blogTheme = getThemeConfig({
  // 页脚
  footer: [
    {
      message: `xkfe © 2024-${new Date().getFullYear()} Created by 小凯同学`,
    },
    {
      version: true,
      copyright: {
        icon: `<svg t="1695543755857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="89399" width="200" height="200"><path d="M512 16C238.066 16 16 238.066 16 512s222.066 496 496 496 496-222.066 496-496S785.934 16 512 16z m234.268 693.506c-3.184 3.734-79.552 91.462-219.702 91.462-169.384 0-288.968-126.52-288.968-291.134 0-162.606 124.008-286.802 287.524-286.802 133.914 0 203.93 74.63 206.844 77.808a24 24 0 0 1 2.476 29.246l-44.76 69.31c-8.098 12.534-25.548 14.702-36.468 4.59-0.466-0.428-53.058-47.76-123.76-47.76-92.232 0-147.832 67.15-147.832 152.164 0 79.204 51.028 159.384 148.554 159.384 77.394 0 130.56-56.676 131.088-57.25 10.264-11.13 28.118-10.066 37.016 2.106l49.094 67.144a24.002 24.002 0 0 1-1.106 29.732z" p-id="89400"></path></svg>`,
        message: 'CC BY-NC-SA 4.0 国际许可协议',
        link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans/'
      },
    },

    {
      version: false,
      copyright: {
        icon: '<img src="https://www.upyun.com/static/favicon-16x16.png" alt="youpai ico" style="filter: grayscale(100%);width: 15px; height: 15px;"></img>',
        message: `本网站由 又拍云 提供网站CDN加速服务`,
        link: 'https://www.upyun.com/?utm_source=lianmeng&utm_medium=referral'
      },
      icpRecord: {
        name: '鄂ICP备xxx号',
        link: 'https://beian.miit.gov.cn/'
      },
      securityRecord: {
        name: '公网安备xxxxx',
        link: 'https://www.beian.gov.cn/portal/index.do'
      },
  }],

  // 主题色修改
  themeColor: 'vp-green',

  // 文章默认作者
  author: '小凯同学',

  // 友链
  friend: [
    {
      nickname: '粥里有勺糖',
      des: '你的指尖用于改变世界的力量',
      avatar:
        'https://img.cdn.sugarat.top/mdImg/MTY3NDk5NTE2NzAzMA==674995167030',
      url: 'https://sugarat.top',
    },
    {
      nickname: 'Vitepress',
      des: 'Vite & Vue Powered Static Site Generator',
      avatar:
        'https://vitepress.dev/vitepress-logo-large.webp',
      url: 'https://vitepress.dev/',
    },
  ],
})

export { blogTheme }
