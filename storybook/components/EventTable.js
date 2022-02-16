import * as UI from "@cadolabs/sphere-ui"
import { useTranslation } from "react-i18next"

import { Title } from "./Title"

EventTable.defaultProps = {
  description: [],
}

export function EventTable ({ description }) {
  const { t } = useTranslation()

  const translationsDescription = () => {
    return description.map(row => {
      return { ...row, description: t(row.description) }
    })
  }

  const renderDefault = row => (row.default == null ? "–" : row.default.toString())

  const renderTable = () => {
    return (
      <div className="card">
        <UI.DataTable value={translationsDescription()} showGridlines stripedRows size="small">
          <UI.Column
            body={renderDefault}
            header={t("components.eventTable.columns.name")}
            className="font-light"
          />
          <UI.Column
            body={renderDefault}
            header={t("components.eventTable.columns.params")}
            className="font-light"
          />
          <UI.Column
            field="description"
            header={t("components.eventTable.columns.description")}
            className="font-light"
          />
        </UI.DataTable>
      </div>
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
      {renderTable()}
    </div>
  )
}
