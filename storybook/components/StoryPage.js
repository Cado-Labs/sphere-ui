import { Fragment } from "react"
import { useTranslation } from "react-i18next"

import { ParamsTable } from "./ParamsTable"
import { Content } from "./Content"
import { Header } from "./Header"
import { LiveExample } from "./LiveExample"
import { EventTable } from "./EventTable"
import { Footer } from "./Footer"

import "./StoryPage.scss"

export function StoryPage ({
  content,
  header,
  descriptionProps,
  eventDescriptionProps,
  code,
  scope,
  footer,
}) {
  const { t } = useTranslation()

  const renderContent = () => {
    return (
      <Content>{t(content)}</Content>
    )
  }

  const renderHeader = () => {
    return (
      <Header>{header}</Header>
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
      {header && renderHeader()}
      {content && renderContent()}
      {code && renderLive()}
      {descriptionProps && renderTable()}
      {eventDescriptionProps && renderEventTable()}
      {footer && renderFooter()}
    </Fragment>
  )
}
