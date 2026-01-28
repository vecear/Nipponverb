import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translations - only Traditional Chinese
import zhTWTranslations from './locales/zh-TW.json'

const resources = {
  'zh-TW': { translation: zhTWTranslations },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh-TW', // Fixed language
    fallbackLng: 'zh-TW',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
