import { h } from 'vue'
import BlogLayout from '../components/BlogLayout.vue'
import ReloadPrompt from '../components/ReloadPrompt.vue'

import Logger from '../../utils/logger'
import BUILD_INFO from '../../utils/buildConsoleInfo'

import 'element-plus/dist/index.css'
// 自定义样式重载
import './style.scss'


// 自定义主题色
import './user-theme.css'

for (const key in BUILD_INFO) {
  Logger.capsule(key, BUILD_INFO[key as keyof typeof BUILD_INFO], key === 'Environment' ? 'success' : 'warning')
}

export default {
  Layout: h(BlogLayout, null, {
    'layout-bottom': () => h(ReloadPrompt)
  }),
}
