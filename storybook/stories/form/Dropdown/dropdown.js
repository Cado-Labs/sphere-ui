/* eslint-disable max-len */
import { Dropdown } from "@cadolabs/sphere-ui"

import i18n from "@i18n"
import { ParamsTable } from "@components"

const I18N_PREFIX = "stories.dropdown"

const code = `
function DropdownExample () {
  const [selectedCity1, setSelectedCity1] = React.useState(null);
  const [selectedGroupedCity, setSelectedGroupedCity] = React.useState(null);
  const [selectedCountry, setSelectedCountry] = React.useState(null);

  const cities = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" }
  ];

  const groupedCities = [
    {
      label: "Germany",
      code: "DE",
      items: [
        { label: "Berlin", value: "Berlin" },
        { label: "Frankfurt", value: "Frankfurt" },
        { label: "Hamburg", value: "Hamburg" },
        { label: "Munich", value: "Munich" },
      ],
    },
    {
      label: "USA",
      code: "US",
      items: [
        { label: "Chicago", value: "Chicago" },
        { label: "Los Angeles", value: "Los Angeles" },
        { label: "New York", value: "New York" },
        { label: "San Francisco", value: "San Francisco" },
      ],
    },
    {
      label: "Japan",
      code: "JP",
      items: [
        { label: "Kyoto", value: "Kyoto" },
        { label: "Osaka", value: "Osaka" },
        { label: "Tokyo", value: "Tokyo" },
        { label: "Yokohama", value: "Yokohama" },
      ],
    },
  ]

  const countries = [
    { name: "Australia", code: "AU" },
    { name: "Brazil", code: "BR" },
    { name: "China", code: "CN" },
    { name: "Egypt", code: "EG", disabled: true },
    { name: "France", code: "FR", className: "font-bold" },
    { name: "Germany", code: "DE" },
    { name: "India", code: "IN" },
    { name: "Japan", code: "JP" },
    { name: "Spain", code: "ES" },
    { name: "United States", code: "US" }
  ];

  const onCityChange = (e) => {
    setSelectedCity1(e.value);
  }

  const onGroupedCityChange = (e) => {
    setSelectedGroupedCity(e.value);
  }

  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
  }

  return (
    <div className="p-card s-container">
      <div className="w-15rem">
        <h3>Basic</h3>
        <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="Select a City" />
      </div>

      <div className="w-15rem">
        <h3>Grouped</h3>
        <Dropdown value={selectedGroupedCity} options={groupedCities} onChange={onGroupedCityChange}
          optionLabel="label" optionGroupLabel="label" optionGroupChildren="items" />
      </div>

      <div className="w-15rem">
        <h3>With filtering and clearing</h3>
        <Dropdown value={selectedCountry} options={countries} onChange={onCountryChange} optionLabel="name"
          filter showClear filterBy="name" placeholder="Select a Country" />
      </div>
    </div>
  )
}
`

const onChangeParams = [
  { name: "event.originalEvent", description: "Original event" },
  { name: "event.value", description: "Value of the dropdown" },
]

const onFocusParams = [
  { name: "event", description: "Browser event" },
]

const onBlurParams = [
  { name: "event", description: "Browser event" },
]

const onMouseDownParams = [
  { name: "event", description: "Browser event" },
]

const onContextMenuParams = [
  { name: "event", description: "Browser event" },
]

const onFilterParams = [
  { name: "event.originalEvent", description: "Original event" },
  { name: "event.filter", description: "Value of the filter input" },
]

export const dropdown = {
  component: "Dropdown",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { Dropdown },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "value", type: "any", description: `${I18N_PREFIX}.props.value` },
    { name: "options", type: "Array<SelectItem>", description: `${I18N_PREFIX}.props.options` },
    { name: "optionLabel", type: "string", description: `${I18N_PREFIX}.props.optionLabel` },
    { name: "optionValue", type: "string", description: `${I18N_PREFIX}.props.optionValue` },
    { name: "optionDisabled", type: "function | string", description: `${I18N_PREFIX}.props.optionDisabled` },
    { name: "optionGroupLabel", type: "string", description: `${I18N_PREFIX}.props.optionGroupLabel` },
    { name: "optionGroupChildren", type: "string", description: `${I18N_PREFIX}.props.optionGroupChildren` },
    { name: "itemTemplate", type: "any", description: `${I18N_PREFIX}.props.itemTemplate` },
    { name: "valueTemplate", type: "any", description: `${I18N_PREFIX}.props.valueTemplate` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "filter", type: "boolean", description: `${I18N_PREFIX}.props.filter` },
    { name: "filterBy", type: "string", description: `${I18N_PREFIX}.props.filterBy` },
    { name: "placeholder", type: "string", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "required", type: "boolean", default: false, description: `${I18N_PREFIX}.props.required` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "panelClassName", type: "string", description: `${I18N_PREFIX}.props.panelClassName` },
    { name: "panelStyle", type: "object", description: `${I18N_PREFIX}.props.panelStyle` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.inputId` },
    { name: "showClear", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showClear` },
    { name: "ariaLabel", type: "string", description: `${I18N_PREFIX}.props.ariaLabel` },
    { name: "ariaLabelledBy", type: "string", description: `${I18N_PREFIX}.props.ariaLabelledBy` },
    { name: "autoFocus", type: "boolean", default: false, description: `${I18N_PREFIX}.props.autoFocus` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
  ],
  eventDescriptionProps: [
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
    { name: "onFocus", params: onFocusParams, description: `${I18N_PREFIX}.props.onFocus` },
    { name: "onBlur", params: onBlurParams, description: `${I18N_PREFIX}.props.onBlur` },
    { name: "onMouseDown", params: onMouseDownParams, description: `${I18N_PREFIX}.props.onMouseDown` },
    { name: "onContextMenu", params: onContextMenuParams, description: `${I18N_PREFIX}.props.onContextMenu` },
    { name: "onShow", description: `${I18N_PREFIX}.props.onShow` },
    { name: "onHide", description: `${I18N_PREFIX}.props.onHide` },
    { name: "onFilter", params: onFilterParams, description: `${I18N_PREFIX}.props.onFilter` },
  ],
  footer: (
    <ParamsTable
      title={i18n.t(`${I18N_PREFIX}.header.selectItem`)}
      description={[
        { name: "label", type: "string", description: `${I18N_PREFIX}.selectItem.label` },
        { name: "value", type: "string", description: `${I18N_PREFIX}.selectItem.value` },
        { name: "className", type: "string", description: `${I18N_PREFIX}.selectItem.className` },
        { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.selectItem.disabled` },
      ]}
    />
  ),
}
