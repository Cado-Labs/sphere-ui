/* eslint-disable max-len */
import { MultiSelect } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.multiselect"

const code = `
function MultiSelectExample () {
  const citySelectItems = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" }
  ]

  const [value, setValue] = React.useState(null)

  return (
    <div className="s-form">
      <div className="s-field-fixed">
        <label htmlFor="city">MultiSelect</label>
        <div className="mt-2">
          <MultiSelect
            name="city"
            value={value}
            onChange={(e) => setValue(e.value)}
            options={citySelectItems}
          />
        </div>
      </div>
    </div>
  )
}
`

export const multiSelect = {
  header: "MultiSelect",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { MultiSelect },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "ref", type: "string", description: `${I18N_PREFIX}.props.ref` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "value", type: "string", description: `${I18N_PREFIX}.props.value` },
    { name: "placeholder", type: "string", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "onChange", type: "function", description: `${I18N_PREFIX}.props.onChange` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "options", type: "array", description: `${I18N_PREFIX}.props.options` },
    { name: "filter", type: "boolean", description: `${I18N_PREFIX}.props.filter` },
    { name: "filterBy", type: "string", description: `${I18N_PREFIX}.props.filterBy` },
    { name: "optionDisabled", type: "string/function", description: `${I18N_PREFIX}.props.optionDisabled` },
    { name: "optionLabel", type: "string", description: `${I18N_PREFIX}.props.optionLabel` },
    { name: "optionValue", type: "string", description: `${I18N_PREFIX}.props.optionValue` },
    { name: "optionGroupLabel", type: "string", description: `${I18N_PREFIX}.props.optionGroupLabel` },
    { name: "optionGroupChildren", type: "string", description: `${I18N_PREFIX}.props.optionGroupChildren` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.inputId` },
    { name: "dropdownIcon", type: "string", description: `${I18N_PREFIX}.props.dropdownIcon` },
    { name: "maxSelectedLabels", type: "number", description: `${I18N_PREFIX}.props.maxSelectedLabels` },
    { name: "panelClassName", type: "string", description: `${I18N_PREFIX}.props.panelClassName` },
    { name: "panelStyle", type: "string", description: `${I18N_PREFIX}.props.panelStyle` },
    { name: "style", type: "string", description: `${I18N_PREFIX}.props.style` },
    { name: "selectedItemsLabel", type: "string", description: `${I18N_PREFIX}.props.selectedItemsLabel` },
    { name: "showClear", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showClear` },
    { name: "display", type: "string", description: `${I18N_PREFIX}.props.display` },
  ],
}
