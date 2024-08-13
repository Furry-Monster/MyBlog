import SvgIcon from '@/components/SvgIcon/index.vue' // svg component
import { App } from 'vue'

// register globally
export const registerSvgIcon = (app: App): void => {
  // 注册 svg-icon 组件
  app.component('svg-icon', SvgIcon)
  const req = require.context('./svg', false, /\.svg$/)
  // eslint-disable-next-line，加载上下文中的所有svg文件
  const requireAll = (requireContext: any) =>
    requireContext.keys().map(requireContext)
  requireAll(req)
}
