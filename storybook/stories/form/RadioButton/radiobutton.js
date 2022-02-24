/* eslint-disable max-len */
import { RadioButton } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.radiobutton"

const code = `
function RadioButtonExample () {
  const categories = [
    { name: 'Accounting', key: 'A' },
    { name: 'Marketing', key: 'M' },
    { name: 'Production', key: 'P' },
    { name: 'Research', key: 'R' },
  ];
  const [city, setCity] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState(categories[1]);

  return (
    <div className="p-card s-container">
      <h5>Basic</h5>
      <div className="field-radiobutton">
        <RadioButton
          inputId="city1"
          name="city"
          value="Chicago" onChange={e => setCity(e.value)}
          checked={city === "Chicago"}
        />
        <label htmlFor="city1">Chicago</label>
      </div>
      <div className="field-radiobutton">
        <RadioButton
          inputId="city2"
          name="city"
          value="Los Angeles"
          onChange={e => setCity(e.value)}
          checked={city === "Los Angeles"}
        />
        <label htmlFor="city2">Los Angeles</label>
      </div>
      <div className="field-radiobutton">
        <RadioButton
          inputId="city3"
          name="city"
          value="New York"
          onChange={e => setCity(e.value)}
          checked={city === "New York"}
        />
        <label htmlFor="city3">New York</label>
      </div>
      <div className="field-radiobutton">
        <RadioButton
          inputId="city4"
          name="city"
          value="San Francisco"
          onChange={e => setCity(e.value)}
          checked={city === "San Francisco"}
        />
        <label htmlFor="city4">San Francisco</label>
      </div>

      <h5>Dynamic Values, Preselection, Value Binding and Disabled Option</h5>
      {
        categories.map(category => {
          return (
            <div key={category.key} className="field-radiobutton">
              <RadioButton
                inputId={category.key}
                name="category"
                value={category}
                onChange={e => setSelectedCategory(e.value)}
                checked={selectedCategory.key === category.key}
                disabled={category.key === "R"}
              />
              <label htmlFor={category.key}>{category.name}</label>
            </div>
          )
        })
      }
    </div>
  )
}
`

const onChangeParams = [
  { name: "event.originalEvent", description: "Original event" },
  { name: "event.value", description: "Value of the radiobutton" },
  { name: "event.checked", description: "Checked state as a boolean" },
]

export const radiobutton = {
  header: "RadioButton",
  content: i18n.t(`${I18N_PREFIX}.content`),
  code,
  scope: { RadioButton },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.inputId` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "value", type: "any", description: `${I18N_PREFIX}.props.value` },
    { name: "checked", type: "boolean", default: false, description: `${I18N_PREFIX}.props.checked` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "required", type: "boolean", default: false, description: `${I18N_PREFIX}.props.required` },
    { name: "tabIndex", type: "number", description: `${I18N_PREFIX}.props.tabIndex` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "ariaLabelledBy", type: "string", description: `${I18N_PREFIX}.props.ariaLabelledBy` },
  ],
  eventDescriptionProps: [
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
  ],
}
