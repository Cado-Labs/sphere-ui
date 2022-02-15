import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from "react-live"
import { useTranslation } from "react-i18next"
import theme from "prism-react-renderer/themes/oceanicNext"
import * as UI from "@cadolabs/sphere-ui"

import { Title } from "./Title"

const defaultScope = { UI }

LiveExample.defaultProps = {
  code: "",
  scope: defaultScope,
}

export function LiveExample ({ code, scope }) {
  const { t } = useTranslation()

  const renderLive = () => {
    return (
      <LiveProvider code={code} scope={scope} theme={theme}>
        <LivePreview className="content-layouts p-5" />
        <br />
        <div className="live-content">
          <UI.Tooltip target=".tag" />
          <span className="tag" data-pr-tooltip="Below you can edit the code and apply different props from the table">
            <UI.Tag className="border-noround tag" icon="pi pi-info-circle" severity="info">Hover over me</UI.Tag>
          </span>
          <LiveEditor />
        </div>
        <LiveError />
      </LiveProvider>
    )
  }

  const renderTitle = () => {
    return (
      <Title>{t("components.live_editor.title")}</Title>
    )
  }

  return (
    <div className="block-content">
      {renderTitle()}
      {renderLive()}
    </div>
  )
}
