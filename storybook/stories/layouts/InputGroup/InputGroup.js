import React from "react"
import { InputText, InputNumber, Button, Checkbox, RadioButton } from "@cadolabs/sphere-ui"

import { LiveExample } from "@components"

const code = `
function InputGroupExample () {
  const [checked1, setChecked1] = React.useState(false)
  const [checked2, setChecked2] = React.useState(false)
  const [radioValue1, setRadioValue1] = React.useState("")
  const [radioValue2, setRadioValue2] = React.useState("")

  return (
    <div className="p-card s-container">
      <h3>Addons</h3>
      <div className="grid p-fluid">
        <div className="col-12 md:col-4">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-user" />
            </span>
            <InputText placeholder="Username" />
          </div>
        </div>

        <div className="col-12 md:col-4">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">$</span>
            <InputNumber placeholder="Price" />
            <span className="p-inputgroup-addon">.00</span>
          </div>
        </div>

        <div className="col-12 md:col-4">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">www</span>
            <InputText placeholder="Website" />
          </div>
        </div>
      </div>

      <h3>Multiple Addons</h3>
      <div className="grid">
        <div className="col-12">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <i className="pi pi-clock" />
            </span>
            <span className="p-inputgroup-addon">
              <i className="pi pi-star-fill" />
            </span>
            <InputNumber placeholder="Price" />
            <span className="p-inputgroup-addon">$</span>
            <span className="p-inputgroup-addon">.00</span>
          </div>
        </div>
      </div>

      <h3>Button Addons</h3>
      <div className="grid p-fluid">
        <div className="col-12 md:col-4">
          <div className="p-inputgroup">
            <Button label="Search" />
            <InputText placeholder="Keyword" />
          </div>
        </div>

        <div className="col-12 md:col-4">
          <div className="p-inputgroup">
            <InputText placeholder="Keyword" />
            <Button icon="pi pi-search" className="p-button-warning" />
          </div>
        </div>

        <div className="col-12 md:col-4">
          <div className="p-inputgroup">
            <Button icon="pi pi-check" className="p-button-success" />
            <InputText placeholder="Vote" />
            <Button icon="pi pi-times" className="p-button-danger" />
          </div>
        </div>
      </div>

      <h3>Checkbox and RadioButton</h3>
      <div className="grid p-fluid">
        <div className="col-12">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <Checkbox checked={checked1} onChange={e => setChecked1(!checked1)} />
            </span>
            <InputText placeholder="Username" />
          </div>
        </div>

        <div className="col-12">
          <div className="p-inputgroup">
            <InputText placeholder="Price" />
            <span className="p-inputgroup-addon">
              <RadioButton
                name="rb1"
                value="rb1"
                checked={radioValue1 === "rb1"}
                onChange={e => setRadioValue1(e.value)}
              />
            </span>
          </div>
        </div>

        <div className="col-12">
          <div className="p-inputgroup">
            <span className="p-inputgroup-addon">
              <Checkbox checked={checked2} onChange={e => setChecked2(!checked2)} />
            </span>
            <InputText placeholder="Website" />
            <span className="p-inputgroup-addon">
              <RadioButton
                name="rb2"
                value="rb2"
                checked={radioValue2 === "rb2"}
                onChange={e => setRadioValue2(e.value)}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
`

export function InputGroup () {
  return (
    <LiveExample
      code={code}
      scope={{ InputText, InputNumber, Button, Checkbox, RadioButton }}
    />
  )
}
