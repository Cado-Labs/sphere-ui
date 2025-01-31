import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live"
import theme from "prism-react-renderer/themes/oceanicNext"
import * as UI from "@cadolabs/sphere-ui"

import { useTranslation } from "@i18n"

import { Title } from "./Title"

const I18N_PREFIX = "components.liveEditor"

const defaultScope = { UI }

LiveExample.defaultProps = {
  code: "",
  scope: defaultScope,
}

export function LiveExample ({ code, scope }) {
  const { t } = useTranslation("translation", { keyPrefix: I18N_PREFIX })

  const renderLive = () => {
    return (
      <LiveProvider code={code} scope={scope} theme={theme}>
        <LivePreview className="content-layouts p-5" />
        <br />
        <div className="live-content">
          <UI.Tooltip target=".tag">
            {t("hover.description")}
          </UI.Tooltip>
          <span>
            <UI.Tag className="border-noround tag" icon="pi pi-info-circle" severity="info">
              {t("hover.title")}
            </UI.Tag>
          </span>
          <LiveEditor />
        </div>
        <LiveError />
      </LiveProvider>
    )
  }

  const renderTitle = () => {
    return (
      <Title>{t("title")}</Title>
    )
  }

  return (
    <div className="block-content">
      {renderTitle()}
      {renderLive()}
    </div>
  )
}
