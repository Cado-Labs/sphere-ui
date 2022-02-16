import * as UI from "@cadolabs/sphere-ui"
import { useTranslation } from "react-i18next"

import { Title } from "./Title"

const I18N_PREFIX = "components.eventTable"

EventTable.defaultProps = {
  description: [],
}

export function EventTable ({ description }) {
  const { t } = useTranslation('translation', { keyPrefix: I18N_PREFIX })


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
          <UI.Column body={renderDefault} header={t("columns.name")} className="font-light" />
          <UI.Column body={renderDefault} header={t("columns.params")} className="font-light" />
          <UI.Column field="description" header={t("columns.description")} className="font-light" />
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
