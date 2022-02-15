/* eslint-disable max-len */
import { Money } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.money"

const code = `
function MoneyExample () {
  return (
    <div className="p-card sh-container">
      <Money
        money={[1000.1000, "USD"]}
        precision={2}
        enforcePrecision
        delimiter={"."}
        separator={" "}
      />
    </div>
  )
}
`

export const money = {
  header: "Money",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { Money },
  descriptionProps: [
    { name: "money", type: "array", description: `${I18N_PREFIX}.props.money` },
    { name: "precision", type: "number", default: 2, description: `${I18N_PREFIX}.props.precision` },
    { name: "enforcePrecision", type: "boolean", default: false, description: `${I18N_PREFIX}.props.enforcePrecision` },
    { name: "delimiter", type: "string", default: ",", description: `${I18N_PREFIX}.props.delimiter` },
    { name: "separator", type: "string", default: "'\xA0'", description: `${I18N_PREFIX}.props.separator` },
  ],
}
