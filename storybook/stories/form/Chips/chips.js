/* eslint-disable max-len */
import { Chips } from "@cadolabs/sphere-ui"

import { Trans } from "@i18n"

const I18N_PREFIX = "stories.chips"

const code = `
function ChipsExample () {
  const [values1, setValues1] = React.useState([])
  const [values2, setValues2] = React.useState([])

  return (
    <div className="p-card s-container">
      <h3>Basic</h3>
      <Chips value={values1} onChange={e => setValues1(e.value)} />

      <h3>Scrollable</h3>
      <div style={{ width: "250px" }}>
        <Chips value={values2} scrollable onChange={e => setValues2(e.value)} placeholder="Type here" />
      </div>
    </div>
  )
}
`

const onChangeParams = [
  { name: "originalEvent", description: "Browser event" },
  { name: "value", description: "New value of the component" },
]

const onAddParams = [
  { name: "originalEvent", description: "Browser event" },
  { name: "value", description: "Added item value" },
]

const onRemoveParams = [
  { name: "originalEvent", description: "Browser event" },
  { name: "value", description: "Removed item value" },
]

const onFocusParams = [
  { name: "event", description: "Browser event" },
]

const onBlurParams = [
  { name: "event", description: "Browser event" },
]

export const chips = {
  component: "Chips",
  content: {
    description: <Trans i18nKey={`${I18N_PREFIX}.content`} components={{ key: <code className="inline-code" /> }} />,
  },
  code,
  scope: { Chips },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "placeholder", type: "string", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "value", type: "array", description: `${I18N_PREFIX}.props.value` },
    { name: "max", type: "number", description: `${I18N_PREFIX}.props.max` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "readOnly", type: "boolean", default: false, description: `${I18N_PREFIX}.props.readOnly` },
    { name: "removable", type: "boolean", default: true, description: `${I18N_PREFIX}.props.removable` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "ariaLabelledBy", type: "string", description: `${I18N_PREFIX}.props.ariaLabelledBy` },
    { name: "allowDuplicate", type: "boolean", default: true, description: `${I18N_PREFIX}.props.removable` },
    { name: "addOnBlur", type: "boolean", default: false, description: `${I18N_PREFIX}.props.addOnBlur` },
  ],
  eventDescriptionProps: [
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
    { name: "onAdd", params: onAddParams, description: `${I18N_PREFIX}.props.onAdd` },
    { name: "onRemove", params: onRemoveParams, description: `${I18N_PREFIX}.props.onRemove` },
    { name: "onFocus", params: onFocusParams, description: `${I18N_PREFIX}.props.onFocus` },
    { name: "onBlur", params: onBlurParams, description: `${I18N_PREFIX}.props.onBlur` },
  ],
}
