import { h } from 'vue'
import BlogLayout from '../components/BlogLayout.vue'
import ReloadPrompt from '../components/ReloadPrompt.vue'

// 自定义样式重载
import './style.scss'

// 自定义主题色
import './user-theme.css'

export default {
  Layout: h(BlogLayout, undefined, {
    'layout-bottom': () => (ReloadPrompt) ,
  }),
}
