/* eslint-disable max-len */

import { Chip } from "@cadolabs/sphere-ui"
import i18n from "@i18n"

const I18N_PREFIX = "stories.chip"

const code = `
function ChipExample () {
  const customStyle = {
    background: "var(--primary-color)",
    color: "var(--primary-color-text)",
  }

  return (
    <div className="p-card s-container">
      <h3>Basic</h3>
      <div className="flex align-items-center flex-wrap">
        <Chip label="Action" className="mr-2 mb-2" />
        <Chip label="Comedy" className="mr-2 mb-2" />
        <Chip label="Mystery" className="mr-2 mb-2" />
        <Chip label="Thriller" className="mb-2" removable />
      </div>

      <h3>Icon</h3>
      <div className="flex align-items-center flex-wrap">
        <Chip label="Apple" icon="pi pi-apple" className="mr-2 mb-2" />
        <Chip label="Facebook" icon="pi pi-facebook" className="mr-2 mb-2" />
        <Chip label="Google" icon="pi pi-google" className="mr-2 mb-2" />
        <Chip label="Microsoft" icon="pi pi-microsoft" className="mb-2" removable />
      </div>

      <h3>Styling</h3>
      <div className="flex align-items-center flex-wrap">
        <Chip label="Action" className="mr-2 mb-2" style={customStyle} />
        <Chip label="Apple" icon="pi pi-apple" className="mr-2 mb-2" style={customStyle} />
        <Chip label="Onyama Limba" className="mr-2 mb-2" style={customStyle} />
        <Chip label="Xuxue Feng" className="mb-2" removable style={customStyle} />
      </div>
    </div>
  )
}
`

const onRemoveParams = [
  { name: "event", description: "Browser event" },
]

export const chip = {
  component: "Chip",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { Chip },
  descriptionProps: [
    { name: "label", type: "string", description: `${I18N_PREFIX}.props.label` },
    { name: "icon", type: "string", description: `${I18N_PREFIX}.props.icon` },
    { name: "removable", type: "boolean", default: false, description: `${I18N_PREFIX}.props.removable` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
  ],
  eventDescriptionProps: [
    { name: "onRemove", params: onRemoveParams, description: `${I18N_PREFIX}.props.onRemove` },
  ],
}
