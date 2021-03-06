/* eslint-disable max-len */
import { Number } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.number"

const code = `
function NumberExample () {
  return (
    <div className="p-card s-container">
      <Number
        value={1000.1000}
        precision={2}
        enforcePrecision
        delimiter={"."}
        separator={" "}
      />
    </div>
  )
}
`

export const number = {
  component: "Number",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
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
