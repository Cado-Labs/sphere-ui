/* eslint-disable max-len */
import { MultiSelect } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

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
    <div className="p-card s-container">
      <div className="s-field-col-3">
        <label htmlFor="city">MultiSelect</label>
          <MultiSelect
            name="city"
            value={value}
            onChange={(e) => setValue(e.value)}
            options={citySelectItems}
          />
      </div>
    </div>
  )
}
`

const onChangeParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Current selected values" },
]

export const multiSelect = {
  component: "MultiSelect",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { MultiSelect },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "ref", type: "string", description: `${I18N_PREFIX}.props.ref` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "value", type: "string", description: `${I18N_PREFIX}.props.value` },
    { name: "placeholder", type: "string", description: `${I18N_PREFIX}.props.placeholder` },
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
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "dataKey", type: "string", description: `${I18N_PREFIX}.props.dataKey` },
  ],
  eventDescriptionProps: [
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
  ],
}
