/* eslint-disable max-len */
import { Number } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.number"

const code = `
function NumberExample () {
  return (
    <Number
      value={1000.1000}
      precision={2}
      enforcePrecision
      delimiter={"."}
      separator={" "}
    />
  )
}
`

export const number = {
  header: "Number",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { Number },
  descriptionProps: [
    { name: "value", type: "number", description: `${I18N_PREFIX}.props.value` },
    { name: "precision", type: "number", default: 2, description: `${I18N_PREFIX}.props.precision` },
    { name: "enforcePrecision", type: "boolean", default: false, description: `${I18N_PREFIX}.props.enforcePrecision` },
    { name: "delimiter", type: "string", default: ",", description: `${I18N_PREFIX}.props.delimiter` },
    { name: "separator", type: "string", default: "'\xA0'", description: `${I18N_PREFIX}.props.separator` },
  ],
}
