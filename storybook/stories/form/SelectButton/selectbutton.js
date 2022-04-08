/* eslint-disable max-len */
import { SelectButton } from "@cadolabs/sphere-ui"

import i18n from "@i18n"
import { ParamsTable } from "@components"

const I18N_PREFIX = "stories.selectbutton"

const code = `
function SelectButtonExample () {
  const [value1, setValue1] = React.useState("Off")
  const [value2, setValue2] = React.useState(null)

  const options = ["Off", "On"]
  const paymentOptions = [
    { label: "Option 1", value: 1 },
    { label: "Option 2", value: 2 },
    { label: "Option 3", value: 3 },
  ]

  return (
    <div className="p-card s-container">
      <h3>Single Selection</h3>
      <SelectButton value={value1} options={options} onChange={e => (console.log(e), setValue1(e.value))} />

      <h3>Multiple Selection</h3>
      <SelectButton value={value2} options={paymentOptions} onChange={e => setValue2(e.value)} multiple />
    </div>
  )
}
`

const onChangeParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Single value or an array of values that are selected" },
]

export const selectbutton = {
  component: "SelectButton",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { SelectButton },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "value", type: "any", description: `${I18N_PREFIX}.props.value` },
    { name: "options", type: "Array<SelectItem>", description: `${I18N_PREFIX}.props.options` },
    { name: "optionDisabled", type: "function | string", description: `${I18N_PREFIX}.props.optionDisabled` },
    { name: "tabIndex", type: "number", description: `${I18N_PREFIX}.props.tabIndex` },
    { name: "multiple", type: "boolean", default: false, description: `${I18N_PREFIX}.props.multiple` },
    { name: "unselectable", type: "boolean", default: true, description: `${I18N_PREFIX}.props.unselectable` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "ariaLabelledBy", type: "string", description: `${I18N_PREFIX}.props.ariaLabelledBy` },
  ],
  eventDescriptionProps: [
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
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
