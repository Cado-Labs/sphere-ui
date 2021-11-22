import { Fragment } from "react"
import { useTranslation } from "react-i18next"

import { Table } from "./Table"
import { Content } from "./Content"
import { Header } from "./Header"
import { LiveExample } from "./LiveExample"

export function StoryPage ({ content, header, descriptionProps, code, scope }) {
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
      <Table description={descriptionProps} />
    )
  }

  const renderLive = () => {
    return (
      <LiveExample code={code} scope={scope} />
    )
  }

  return (
    <Fragment>
      {header && renderHeader()}
      {content && renderContent()}
      {code && renderLive()}
      {descriptionProps && renderTable()}
    </Fragment>
  )
}
