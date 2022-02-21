import { useTranslation } from "@i18n"

const I18N_PREFIX = "stories.layouts"

export function Description () {
  const { t } = useTranslation("translation", { keyPrefix: I18N_PREFIX })

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>{t("description")}</p>
      <p>{t("rules")}</p>
      <p>{t("future")}</p>
    </div>
  )
}
