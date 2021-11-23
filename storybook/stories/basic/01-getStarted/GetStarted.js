import React from "react"
import { useTranslation } from "react-i18next"

export function GetStarted () {
  const { t } = useTranslation()

  return (
    <div>
      <h3>Sphere-UI</h3>
      <hr />
      <p>{t("base.about")}</p>
      <h3>{t("base.installation")}</h3>
      <code>
        npm i @cadolabs/sphere-ui
      </code>
      <br />
      <code>
        yarn add @cadolabs/sphere-ui
      </code>

      <h3>{t("base.import")}</h3>
      <code>
        import UI from @cadolabs/sphere-ui
      </code>
    </div>
  )
}
