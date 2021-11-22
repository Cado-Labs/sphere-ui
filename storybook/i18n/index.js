import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import en from "./locales/en.yml"

const translations = { en }
const resources = Object.entries(translations).reduce((mem, [lang, translation]) => {
  return { ...mem, [lang]: { translation } }
}, {})

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    react: {
      useSuspense: false,
    },
  })

export default i18n
