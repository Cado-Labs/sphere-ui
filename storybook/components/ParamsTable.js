import * as UI from "@cadolabs/sphere-ui"
import { useTranslation } from "react-i18next"

import i18n from "@i18n"

import { Title } from "./Title"

ParamsTable.defaultProps = {
  description: [],
  title: i18n.t("components.table.title"),
}

export function ParamsTable ({ description, title }) {
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
            field="name"
            header={t("components.table.columns.name")}
            bodyClassName="font-light"
          />
          <UI.Column
            field="type"
            header={t("components.table.columns.type")}
            bodyClassName="font-light"
          />
          <UI.Column
            body={renderDefault}
            header={t("components.table.columns.default")}
            bodyClassName="font-light"
          />
          <UI.Column
            field="description"
            header={t("components.table.columns.description")}
            bodyClassName="font-light"
          />
        </UI.DataTable>
      </div>
    )
  }

  const renderTitle = () => {
    return (
      <Title>{title}</Title>
    )
  }

  return (
    <div className="block-content">
      {renderTitle()}
      {renderTable()}
    </div>
  )
}
