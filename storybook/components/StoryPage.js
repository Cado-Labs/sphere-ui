import { Fragment, useEffect } from "react"

import { useTranslation } from "@i18n"
import { updateLocaleOptions } from "@cadolabs/sphere-ui"

import { Content } from "./Content"
import { EventTable } from "./EventTable"
import { Footer } from "./Footer"
import { Header } from "./Header"
import { Highlighter } from "./Highlighter"
import { LiveExample } from "./LiveExample"
import { ParamsTable } from "./ParamsTable"

export function StoryPage ({
  content,
  header,
  component,
  descriptionProps,
  eventDescriptionProps,
  code,
  scope,
  footer,
}) {
  const renderContent = () => {
    const { t } = useTranslation()

    useEffect(() => {
      updateLocaleOptions({ firstDayOfWeek: 1 }, "en")
    }, [])

    return (
      <Content>
        <div className="mb-3">
          {content.description}
        </div>

        {component && (
          <div>
            <div className="title">{t("components.content.import")}</div>
            <Highlighter
              language="jsx"
              code={`import { ${component} } from "@cadolabs/sphere-ui"`}
            />
          </div>
        )}

        {content.extra}
      </Content>
    )
  }

  const renderHeader = () => {
    return (
      <Header>{header || component}</Header>
    )
  }

  const renderTable = () => {
    return (
      <ParamsTable description={descriptionProps} />
    )
  }

  const renderEventTable = () => {
    return (
      <EventTable description={eventDescriptionProps} />
    )
  }

  const renderLive = () => {
    return (
      <LiveExample code={code} scope={scope} />
    )
  }

  const renderFooter = () => {
    return (
      <Footer>{footer}</Footer>
    )
  }

  return (
    <Fragment>
      {renderHeader()}
      {content && renderContent()}
      {code && renderLive()}
      {descriptionProps && renderTable()}
      {eventDescriptionProps && renderEventTable()}
      {footer && renderFooter()}
    </Fragment>
  )
}
