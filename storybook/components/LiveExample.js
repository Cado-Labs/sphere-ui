import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview,
} from "react-live"
import { useTranslation } from "react-i18next"
import theme from "prism-react-renderer/themes/github"
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
        <LivePreview />
        <br />
        <div className="live-content">
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
