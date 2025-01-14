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

  const groupedCities = [
    {
        label: 'Germany',
        code: 'DE',
        cities: [
            { city: 'Berlin', value: 'Berlin' },
            { city: 'Frankfurt', value: 'Frankfurt' },
            { city: 'Hamburg', value: 'Hamburg' },
            { city: 'Munich', value: 'Munich' }
        ]
    },
    {
        label: 'USA',
        code: 'US',
        cities: [
            { city: 'Chicago', value: 'Chicago' },
            { city: 'Los Angeles', value: 'Los Angeles' },
            { city: 'New York', value: 'New York' },
            { city: 'San Francisco', value: 'San Francisco' }
        ]
    },
    {
        label: 'Japan',
        code: 'JP',
        cities: [
            { city: 'Kyoto', value: 'Kyoto' },
            { city: 'Osaka', value: 'Osaka' },
            { city: 'Tokyo', value: 'Tokyo' },
            { city: 'Yokohama', value: 'Yokohama' }
        ]
    }
  ];

  const [value, setValue] = React.useState(null)
  const [valueWithVirt, setValueWithVirt] = React.useState(null)
  const [selectedCities, setSelectedCities] = React.useState(null);

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
      <div className="s-field-col-3">
        <label htmlFor="city">MultiSelect with options virtualization</label>
          <MultiSelect
            name="city"
            value={valueWithVirt}
            onChange={(e) => setValueWithVirt(e.value)}
            options={citySelectItems}
            virtualizationThreshold={3}
            itemSize={60}
          />
      </div>
      <div className="s-field-col-3">
        <label htmlFor="city">MultiSelect with groups</label>
        <MultiSelect
          value={selectedCities}
          options={groupedCities}
          onChange={(e) => setSelectedCities(e.value)}
          optionLabel="city"
          optionGroupLabel="label"
          optionGroupChildren="cities"
          placeholder="Select Cities"
          display="chip"
          className="w-full md:w-20rem"
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

const onFocusParams = [
  { name: "event", description: "Browser event" },
]

const onBlurParams = [
  { name: "event", description: "Browser event" },
]

const onFilterParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.filter", description: "Filter value" },
]

const onSelectAllParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.checked", description: "Whether all data is selected" },
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
    { name: "readOnly", type: "boolean", description: `${I18N_PREFIX}.props.readOnly` },
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
    { name: "overlayVisible", type: "boolean", default: false, description: `${I18N_PREFIX}.props.overlayVisible` },
    { name: "virtualizationThreshold", type: "number", default: 30, description: `${I18N_PREFIX}.props.virtualizationThreshold` },
    { name: "itemSize", type: "number", default: 35, description: `${I18N_PREFIX}.props.itemSize` },
  ],
  eventDescriptionProps: [
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
    { name: "onFocus", params: onFocusParams, description: `${I18N_PREFIX}.props.onFocus` },
    { name: "onBlur", params: onBlurParams, description: `${I18N_PREFIX}.props.onBlur` },
    { name: "onShow", description: `${I18N_PREFIX}.props.onShow` },
    { name: "onHide", description: `${I18N_PREFIX}.props.onHide` },
    { name: "onFilter", params: onFilterParams, description: `${I18N_PREFIX}.props.onFilter` },
    { name: "onSelectAll", params: onSelectAllParams, description: `${I18N_PREFIX}.props.onSelectAll` },
  ],
}
