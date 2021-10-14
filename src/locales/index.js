import { addLocale, locale } from "primereact/api"

import { translations } from "./translations"

const initLocales = () => {
  addLocale("ru", translations.ru)
}

const changeLocale = language => {
  locale(language)
}

export {
  initLocales,
  changeLocale,
}
