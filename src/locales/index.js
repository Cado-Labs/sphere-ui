import { addLocale } from "primereact/api"

import { translations } from "./translations"

export const InitLocales = () => {
  addLocale("ru", translations.ru)
}
