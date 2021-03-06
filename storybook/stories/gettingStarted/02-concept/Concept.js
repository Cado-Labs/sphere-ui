import { Message } from "@cadolabs/sphere-ui"
import { linkTo } from "@storybook/addon-links"

import { useTranslation, Trans } from "@i18n"

import { I18N_PREFIX, links, unusedComponents } from "./constants"

export function Concept () {
  const { t } = useTranslation("translation", { keyPrefix: I18N_PREFIX })

  return (
    <div>
      <h2>{t("title")}</h2>
      <Message severity="warn" text={t("message")} />
      <p>{t("description")}</p>
      <p>{t("newComponents")}</p>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.documentation`}
          components={{ strong: <strong /> }}
        />
        <a href={links.prime}> {t("primereact")}</a>.
      </p>
      <p>{t("excluded")}</p>
      <ul>
        {unusedComponents.map((c, i) => (
          <li key={i}>
            <a href={`${links.prime}/${c.toLocaleLowerCase()}`}>{c}</a>
          </li>
        ))}
      </ul>
      <p>
        {t("sections.layouts.description")}
        <a onClick={linkTo("Layouts", "Description")}> {t("sections.layouts.title")}</a>
      </p>
      <p>
        {t("sections.contributing.description")}
        <a onClick={
          linkTo("Getting started", "Contributing")
        }
        > {t("sections.contributing.title")}</a>.
      </p>
    </div >
  )
}
