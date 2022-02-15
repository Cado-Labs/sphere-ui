import * as UI from "@cadolabs/sphere-ui"
import { useTranslation } from "react-i18next"

import { Title } from "./Title"

Table.defaultProps = {
  description: [],
}

export function Table ({ description }) {
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
          <UI.Column field="name" header={t("components.table.columns.name")} style={{ fontWeight: "400" }} />
          <UI.Column field="type" header={t("components.table.columns.type")} style={{ fontWeight: "300" }} />
          <UI.Column body={renderDefault} header={t("components.table.columns.default")} style={{ fontWeight: "300" }} />
          <UI.Column field="description" header={t("components.table.columns.description")} style={{ fontWeight: "300" }} />
        </UI.DataTable>
      </div>
    )
  }

  const renderTitle = () => {
    return (
      <Title>{t("components.table.title")}</Title>
    )
  }

  return (
    <div className="block-content">
      {renderTitle()}
      {renderTable()}
    </div>
  )
}
