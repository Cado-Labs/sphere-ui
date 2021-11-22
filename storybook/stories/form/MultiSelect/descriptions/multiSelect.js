/* eslint-disable max-len */
import { MultiSelect } from "@cadolabs/sphere-ui"

const PREFIX_NAME_LOCALE = "stories.form.multiselect"

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
  content: `${PREFIX_NAME_LOCALE}.content`,
  code,
  scope: { MultiSelect },
  descriptionProps: [
    { name: "id", type: "string", description: `${PREFIX_NAME_LOCALE}.props.id` },
    { name: "ref", type: "string", description: `${PREFIX_NAME_LOCALE}.props.ref` },
    { name: "name", type: "string", description: `${PREFIX_NAME_LOCALE}.props.name` },
    { name: "value", type: "string", description: `${PREFIX_NAME_LOCALE}.props.value` },
    { name: "placeholder", type: "string", description: `${PREFIX_NAME_LOCALE}.props.placeholder` },
    { name: "onChange", type: "function", description: `${PREFIX_NAME_LOCALE}.props.on_change` },
    { name: "disabled", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.disabled` },
    { name: "options", type: "array", description: `${PREFIX_NAME_LOCALE}.props.options` },
    { name: "filter", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.filter` },
    { name: "filterBy", type: "string", description: `${PREFIX_NAME_LOCALE}.props.filter_by` },
    { name: "optionDisabled", type: "string/function", description: `${PREFIX_NAME_LOCALE}.props.option_disabled` },
    { name: "optionLabel", type: "string", description: `${PREFIX_NAME_LOCALE}.props.option_label` },
    { name: "optionValue", type: "string", description: `${PREFIX_NAME_LOCALE}.props.option_value` },
    { name: "optionGroupLabel", type: "string", description: `${PREFIX_NAME_LOCALE}.props.option_group_label` },
    { name: "optionGroupChildren", type: "string", description: `${PREFIX_NAME_LOCALE}.props.option_group_children` },
    { name: "inputId", type: "string", description: `${PREFIX_NAME_LOCALE}.props.input_id` },
    { name: "dropdownIcon", type: "string", description: `${PREFIX_NAME_LOCALE}.props.dropdown_icon` },
    { name: "maxSelectedLabels", type: "number", description: `${PREFIX_NAME_LOCALE}.props.max_selected_labels` },
    { name: "panelClassName", type: "string", description: `${PREFIX_NAME_LOCALE}.props.panel_classname` },
    { name: "panelStyle", type: "string", description: `${PREFIX_NAME_LOCALE}.props.panel_style` },
    { name: "style", type: "string", description: `${PREFIX_NAME_LOCALE}.props.style` },
    { name: "selectedItemsLabel", type: "string", description: `${PREFIX_NAME_LOCALE}.props.selected_items_label` },
    { name: "showClear", type: "boolean", description: `${PREFIX_NAME_LOCALE}.props.show_clear` },
    { name: "display", type: "string", description: `${PREFIX_NAME_LOCALE}.props.display` },
  ],
}
