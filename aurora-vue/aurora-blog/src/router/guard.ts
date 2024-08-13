import router from '@/router'
import { useAppStore } from '@/stores/app'

// 前置守卫拦截
router.beforeEach(async (to, from, next) => {
  const appStore = useAppStore()
  appStore.startLoading()
  // 继续路由，不进行重定向
  next()
})

// 后置守卫拦截
router.afterEach(() => {
  const appStore = useAppStore()
  appStore.endLoading()
  document.getElementById('App-Container')?.focus()
})
