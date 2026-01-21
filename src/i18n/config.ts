import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// Import translations
import enTranslations from './locales/en.json'
import zhTWTranslations from './locales/zh-TW.json'
import zhCNTranslations from './locales/zh-CN.json'
import koTranslations from './locales/ko.json'
import esTranslations from './locales/es.json'
import frTranslations from './locales/fr.json'
import deTranslations from './locales/de.json'

const resources = {
  en: { translation: enTranslations },
  'zh-TW': { translation: zhTWTranslations },
  'zh-CN': { translation: zhCNTranslations },
  ko: { translation: koTranslations },
  es: { translation: esTranslations },
  fr: { translation: frTranslations },
  de: { translation: deTranslations },
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
