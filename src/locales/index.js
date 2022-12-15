import { addLocale, locale, updateLocaleOptions, localeOptions } from "primereact/api"

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
  updateLocaleOptions,
  localeOptions,
}
