import React from "react"
import { linkTo } from "@storybook/addon-links"
import { useTranslation } from "react-i18next"

import { Highlighter } from "@components/Highlighter"

import { code, I18N_PREFIX } from "./constants"

export function Installation () {
  const { t } = useTranslation("translation", { keyPrefix: I18N_PREFIX })

  return (
    <div>
      <h2>{t("title")}</h2>
      <p>
        {t("about.title")}
        &nbsp;
        <a onClick={linkTo("Getting started", "Concept")}>
          {t("about.link")}
        </a>
      </p>
      <h4>{t("installation")}</h4>
      <Highlighter
        code={code.installation}
        language="bash"
      />
      <h4>{t("import.title")}</h4>
      <Highlighter
        code={code.import}
        language="bash"
      />
      <h4>{t("import.styleTitle")}</h4>
      <p>{t("import.rules")}</p>
      <p>{t("import.connectJs")}</p>
      <Highlighter
        code={code.styles}
        language="bash"
      />
      <h2>{t("storybook.title")}</h2>
      {t("storybook.run")}
      <Highlighter
        code={code.storybook}
        language="bash"
      />
    </div>
  )
}
