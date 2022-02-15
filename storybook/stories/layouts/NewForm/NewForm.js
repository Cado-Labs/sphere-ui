import React from "react"
import { useTranslation } from "react-i18next"
import * as UI from "@cadolabs/sphere-ui"

import { LiveExample } from "@components"

const code = `
function PanelExample () {
  const [value, setValue] = React.useState("")

  const renderTitle = () => {
    return (
      <div className="p-card sh-container">
        <span style={{ fontSize: "1.2rem" }}>Title</span>
      </div>
    )
  }

  const actionButtons = () => {
    const classNames = "p-button-danger p-button-text"

    return (
      <div className="sh-field-col-12">
        <UI.Button type="submit">
          save
        </UI.Button>
        <UI.Button type="button" className={classNames}>
          cancel
        </UI.Button>
      </div>
    )
  }

  const multiSelectField = () => {
    return (
      <div className="sh-field-col-12">
        <label htmlFor="multiselect">MultiSelect</label>
        <UI.MultiSelect
          id="multiselect"
          options={options}
          value={value}
          onChange={e => setValue(e.value)}
          display="chip"
        />
      </div>
    )
  }

  const inputField = () => {
    return (
      <div className="sh-field-col-12">
        <label htmlFor="input">InputText</label>
        <UI.InputText id="input" />
      </div>
    )
  }

  const renderForms = () => {
    return (
      <div className="p-card sh-container">
        <div className="sh-grid">
          {multiSelectField()}
          {inputField()}
          {inputField()}
          {inputField()}
          {inputField()}
          {inputField()}
        </div>
        <div className="sh-grid">
          {actionButtons()}
        </div>
      </div>
    )
  }

  return (
    <div className="sh-field-col-5">
      {renderTitle()}
      {renderForms()}
    </div>
  )
}
`

export function NewForm () {
  const { t } = useTranslation()
  const tableData = [{
    name: "Bamboo Watch",
    type: "Product Description",
    default: "-",
    description: "Accessories",
  },
  {
    name: "Bamboo Watch",
    type: "Product Description",
    default: "-",
    description: "Accessories",
  },
  {
    name: "Bamboo Watch",
    type: "Product Description",
    default: "-",
    description: "Accessories",
  }]

  const options = [
    { label: "label1", value: "value1" },
    { label: "label2", value: "value2" },
    { label: "label3", value: "value3" },
    { label: "label4", value: "value4" },
    { label: "label5", value: "value5" },
  ]

  return <LiveExample code={code} scope={{ UI, t, tableData, options }} />
}
