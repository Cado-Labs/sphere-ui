/* eslint-disable max-len */
import { TriStateCheckbox } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.tristatecheckbox"

const code = `
function TriStateCheckboxExample () {
  const [value, setValue] = React.useState(null)

  return (
    <div className="p-card s-container">
      <h3>TriStateCheckbox</h3>
      <div className="m-0">
        <TriStateCheckbox inputId="tristate" value={value} onChange={e => setValue(e.value)} />
        <label htmlFor="tristate" className="ml-1">{String(value)}</label>
      </div>
    </div>
  )
}
`

const onChangeParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Current value" },
]

export const tristatecheckbox = {
  component: "TriStateCheckbox",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { TriStateCheckbox },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "inputRef", type: "React.Ref", description: `${I18N_PREFIX}.props.inputRef` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.inputId` },
    { name: "value", type: "any", description: `${I18N_PREFIX}.props.value` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "ariaLabelledBy", type: "string", description: `${I18N_PREFIX}.props.ariaLabelledBy` },
  ],
  eventDescriptionProps: [
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
  ],
}
