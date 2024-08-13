import { createI18n } from 'vue-i18n'
import cookies from 'js-cookie'

function loadLocaleMessages(): {
  [key: string]: { [key: string]: { [key: string]: string } }
} {
  // 设置递归加载，用于加载方言包
  const locales = require.context('../locales/languages', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages: {
    [key: string]: { [key: string]: { [key: string]: string } }
  } = {}
  locales.keys().forEach((key) => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

export const i18n = createI18n({
  // 默认地区设置为en
  locale: cookies.get('locale') ? String(cookies.get('locale')) : 'en',
  // 回退语言设置为en，不知道是做什么的
  fallbackLocale: cookies.get('locale') ? String(cookies.get('locale')) : 'en',
  // 加载语言包
  messages: loadLocaleMessages()
})
