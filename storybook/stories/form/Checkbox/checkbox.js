/* eslint-disable max-len */
import { Checkbox } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.checkbox"

const code = `
function CheckboxExample () {
  const [checked, setChecked] = React.useState(false)
  const [cities, setCities] = React.useState(["San Francisco"]);

  const onCityChange = e => {
    const selectedCities = [...cities]

    if (e.checked) { selectedCities.push(e.value) }
    else { selectedCities.splice(selectedCities.indexOf(e.value), 1) }

    setCities(selectedCities)
  }

  return (
    <div className="p-card s-container">
      <h3>Basic</h3>
      <div className="field-checkbox">
        <Checkbox inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
        <label htmlFor="binary">{checked ? "true" : "false"}</label>
      </div>

      <h3>Multiple</h3>
      <div className="field-checkbox">
        <Checkbox inputId="city1" name="city" value="Chicago" onChange={onCityChange} checked={cities.indexOf("Chicago") !== -1} />
        <label htmlFor="city1">Chicago</label>
      </div>
      <div className="field-checkbox">
        <Checkbox inputId="city2" name="city" value="Los Angeles" onChange={onCityChange} checked={cities.indexOf("Los Angeles") !== -1} />
        <label htmlFor="city2">Los Angeles</label>
      </div>
      <div className="field-checkbox">
        <Checkbox inputId="city3" name="city" value="New York" onChange={onCityChange} checked={cities.indexOf("New York") !== -1} />
        <label htmlFor="city3">New York</label>
      </div>
      <div className="field-checkbox">
        <Checkbox inputId="city4" disabled name="city" value="San Francisco" onChange={onCityChange} checked={cities.indexOf("San Francisco") !== -1} />
        <label htmlFor="city4">San Francisco (disabled)</label>
      </div>
    </div>
  )
}
`

const onChangeParams = [
  { name: "event.originalEvent", description: "Original event" },
  { name: "event.value", description: "Value of the checkbox" },
  { name: "event.checked", description: "Checked state as a boolean" },
]

export const checkbox = {
  component: "Checkbox",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { Checkbox },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "inputRef", type: "React.Ref", description: `${I18N_PREFIX}.props.inputRef` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.inputId` },
    { name: "value", type: "any", description: `${I18N_PREFIX}.props.value` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "checked", type: "boolean", default: false, description: `${I18N_PREFIX}.props.checked` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "required", type: "boolean", default: false, description: `${I18N_PREFIX}.props.required` },
    { name: "readOnly", type: "boolean", default: false, description: `${I18N_PREFIX}.props.readOnly` },
    { name: "tabIndex", type: "number", description: `${I18N_PREFIX}.props.tabIndex` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "trueValue", type: "any", default: true, description: `${I18N_PREFIX}.props.trueValue` },
    { name: "falseValue", type: "any", default: false, description: `${I18N_PREFIX}.props.falseValue` },
  ],
  eventDescriptionProps: [
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
  ],
}
