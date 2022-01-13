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
    <div className="card">
      <div className="fluid grid formgrid">
        <div className="field col">
          <label htmlFor="city">MultiSelect</label>
          <div style={{ width: "200px" }}>
            <MultiSelect
              name="city"
              value={value}
              onChange={(e) => setValue(e.value)}
              options={citySelectItems}
            />
          </div>
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
    { name: "onChange", type: "function", description: `${I18N_PREFIX}.props.on_change` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "options", type: "array", description: `${I18N_PREFIX}.props.options` },
    { name: "filter", type: "boolean", description: `${I18N_PREFIX}.props.filter` },
    { name: "filterBy", type: "string", description: `${I18N_PREFIX}.props.filter_by` },
    { name: "optionDisabled", type: "string/function", description: `${I18N_PREFIX}.props.option_disabled` },
    { name: "optionLabel", type: "string", description: `${I18N_PREFIX}.props.option_label` },
    { name: "optionValue", type: "string", description: `${I18N_PREFIX}.props.option_value` },
    { name: "optionGroupLabel", type: "string", description: `${I18N_PREFIX}.props.option_group_label` },
    { name: "optionGroupChildren", type: "string", description: `${I18N_PREFIX}.props.option_group_children` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.input_id` },
    { name: "dropdownIcon", type: "string", description: `${I18N_PREFIX}.props.dropdown_icon` },
    { name: "maxSelectedLabels", type: "number", description: `${I18N_PREFIX}.props.max_selected_labels` },
    { name: "panelClassName", type: "string", description: `${I18N_PREFIX}.props.panel_classname` },
    { name: "panelStyle", type: "string", description: `${I18N_PREFIX}.props.panel_style` },
    { name: "style", type: "string", description: `${I18N_PREFIX}.props.style` },
    { name: "selectedItemsLabel", type: "string", description: `${I18N_PREFIX}.props.selected_items_label` },
    { name: "showClear", type: "boolean", default: false, description: `${I18N_PREFIX}.props.show_clear` },
    { name: "display", type: "string", description: `${I18N_PREFIX}.props.display` },
  ],
}
