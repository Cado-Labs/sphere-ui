/* eslint-disable max-len */
import { AutoComplete } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.autocomplete"

const code = `
function AutoCompleteExample () {
  const cities = [
    { label: "New York", value: "NY" },
    { label: "Rome", value: "RM" },
    { label: "London", value: "LDN" },
    { label: "Istanbul", value: "IST" },
    { label: "Paris", value: "PRS" }
  ]

  const [value, setValue] = React.useState(null)
  const [filteredCities, setFilteredCities] = React.useState(null)

  const searchCities = event => {
    setFilteredCities(event.query.trim().length
      ? cities.filter(city => city.label.toLowerCase().includes(event.query.toLowerCase()))
      : cities
    )
  }

  return (
    <div className="p-card s-container">
      <div className="s-field-col-3">
        <AutoComplete
          value={value}
          suggestions={filteredCities}
          completeMethod={searchCities}
          field="label"
          onChange={e => setValue(e.value)}
        />
      </div>
    </div>
  )
}
`

const completeMethodParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.query", description: "Value to search with" },
]

const onChangeParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Value of the component" },
]

const onFocusParams = [
  { name: "event", description: "Browser event" },
]

const onBlurParams = [
  { name: "event", description: "Browser event" },
]

const onSelectParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Value of the component" },
]

const onUnselectParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Value of the component" },
]

const onDropdownClickParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.query", description: "Current value of the input field" },
]

const onClickParams = [
  { name: "event", description: "Browser event" },
]

const onDblClickParams = [
  { name: "event", description: "Browser event" },
]

const onMouseDownParams = [
  { name: "event", description: "Browser event" },
]

const onKeyUpParams = [
  { name: "event", description: "Browser event" },
]

const onKeyPressParams = [
  { name: "event", description: "Browser event" },
]

const onContextMenuParams = [
  { name: "event", description: "Browser event" },
]

const onClearParams = [
  { name: "event", description: "Browser event" },
]

export const autoComplete = {
  component: "AutoComplete",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { AutoComplete },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "value", type: "any", description: `${I18N_PREFIX}.props.value` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "type", type: "string", default: "text", description: `${I18N_PREFIX}.props.type` },
    { name: "suggestions", type: "array", description: `${I18N_PREFIX}.props.suggestions` },
    { name: "field", type: "any", description: `${I18N_PREFIX}.props.field` },
    { name: "optionGroupLabel", type: "string", description: `${I18N_PREFIX}.props.optionGroupLabel` },
    { name: "optionGroupChildren", type: "string", description: `${I18N_PREFIX}.props.optionGroupChildren` },
    { name: "forceSelection", type: "boolean", default: false, description: `${I18N_PREFIX}.props.forceSelection` },
    { name: "autoHighlight", type: "boolean", default: false, description: `${I18N_PREFIX}.props.autoHighlight` },
    { name: "scrollHeight", type: "string", default: "200px", description: `${I18N_PREFIX}.props.scrollHeight` },
    { name: "dropdown", type: "boolean", default: false, description: `${I18N_PREFIX}.props.dropdown` },
    { name: "dropdownMode", type: "string", default: "blank", description: `${I18N_PREFIX}.props.dropdownMode` },
    { name: "dropdownAutoFocus", type: "boolean", default: true, description: `${I18N_PREFIX}.props.dropdownAutoFocus` },
    { name: "multiple", type: "boolean", default: false, description: `${I18N_PREFIX}.props.multiple` },
    { name: "showEmptyMessage", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showEmptyMessage` },
    { name: "emptyMessage", type: "string", default: "No results found.", description: `${I18N_PREFIX}.props.emptyMessage` },
    { name: "minLength", type: "number", default: 1, description: `${I18N_PREFIX}.props.minLength` },
    { name: "delay", type: "number", default: 300, description: `${I18N_PREFIX}.props.delay` },
    { name: "style", type: "string", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.inputId` },
    { name: "inputStyle", type: "string", description: `${I18N_PREFIX}.props.inputStyle` },
    { name: "inputClassName", type: "string", description: `${I18N_PREFIX}.props.inputClassName` },
    { name: "panelClassName", type: "string", description: `${I18N_PREFIX}.props.panelClassName` },
    { name: "panelStyle", type: "string", description: `${I18N_PREFIX}.props.panelStyle` },
    { name: "placeholder", type: "string", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "readOnly", type: "boolean", default: false, description: `${I18N_PREFIX}.props.readOnly` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "maxlength", type: "number", description: `${I18N_PREFIX}.props.maxlength` },
    { name: "size", type: "number", description: `${I18N_PREFIX}.props.size` },
    { name: "appendTo", type: "DOM element | string", default: "document.body", description: `${I18N_PREFIX}.props.appendTo` },
    { name: "tabIndex", type: "number", default: "", description: `${I18N_PREFIX}.props.tabIndex` },
    { name: "autoFocus", type: "boolean", default: false, description: `${I18N_PREFIX}.props.autoFocus` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "itemTemplate", type: "any", description: `${I18N_PREFIX}.props.itemTemplate` },
    { name: "selectedItemTemplate", type: "any", description: `${I18N_PREFIX}.props.selectedItemTemplate` },
    { name: "optionGroupTemplate", type: "any", description: `${I18N_PREFIX}.props.optionGroupTemplate` },
    { name: "transitionOptions", type: "object", description: `${I18N_PREFIX}.props.transitionOptions` },
    { name: "dropdownAriaLabel", type: "string", default: "Choose", description: `${I18N_PREFIX}.props.dropdownAriaLabel` },
    { name: "dropdownIcon", type: "any", default: "pi pi-chevron-down", description: `${I18N_PREFIX}.props.dropdownIcon` },
    { name: "removeIcon", type: "any", default: "pi pi-times-circle", description: `${I18N_PREFIX}.props.removeIcon` },
    { name: "virtualScrollerOptions", type: "object", description: `${I18N_PREFIX}.props.virtualScrollerOptions` },
  ],
  eventDescriptionProps: [
    { name: "completeMethod", params: completeMethodParams, description: `${I18N_PREFIX}.props.completeMethod` },
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
    { name: "onFocus", params: onFocusParams, description: `${I18N_PREFIX}.props.onFocus` },
    { name: "onBlur", params: onBlurParams, description: `${I18N_PREFIX}.props.onBlur` },
    { name: "onSelect", params: onSelectParams, description: `${I18N_PREFIX}.props.onSelect` },
    { name: "onUnselect", params: onUnselectParams, description: `${I18N_PREFIX}.props.onUnselect` },
    { name: "onDropdownClick", params: onDropdownClickParams, description: `${I18N_PREFIX}.props.onDropdownClick` },
    { name: "onClick", params: onClickParams, description: `${I18N_PREFIX}.props.onClick` },
    { name: "onDblClick", params: onDblClickParams, description: `${I18N_PREFIX}.props.onDblClick` },
    { name: "onMouseDown", params: onMouseDownParams, description: `${I18N_PREFIX}.props.onMouseDown` },
    { name: "onKeyUp", params: onKeyUpParams, description: `${I18N_PREFIX}.props.onKeyUp` },
    { name: "onKeyPress", params: onKeyPressParams, description: `${I18N_PREFIX}.props.onKeyPress` },
    { name: "onContextMenu", params: onContextMenuParams, description: `${I18N_PREFIX}.props.onContextMenu` },
    { name: "onClear", params: onClearParams, description: `${I18N_PREFIX}.props.onClear` },
    { name: "onShow", description: `${I18N_PREFIX}.props.onShow` },
    { name: "onHide", description: `${I18N_PREFIX}.props.onHide` },
  ],
}
