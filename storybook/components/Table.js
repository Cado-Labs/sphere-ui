import React from "react"
import * as UI from "@cadolabs/sphere-ui"

import { Title } from "./Title"

Table.defaultProps = {
  description: [],
}

export function Table ({ description }) {
  const renderTable = () => {
    return (
      <div className="card">
        <UI.DataTable value={description}>
          <UI.Column field="name" header="Название" />
          <UI.Column field="type" header="Тип" />
          <UI.Column field="description" header="Описание" />
        </UI.DataTable>
      </div>
    )
  }

  const renderTitle = () => {
    return (
      <Title>Описание используемых свойств</Title>
    )
  }

  return (
    <div className="block-content">
      {renderTitle()}
      {renderTable()}
    </div>
  )
}
