/* eslint-disable max-len */
import { IconField, InputIcon, InputText } from "@cadolabs/sphere-ui"
import { Highlighter } from "@components"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.iconfield"

const code = `
function IconFieldExample () {
  const [value1, setValue1] = React.useState("")
  const [value2, setValue2] = React.useState("")
  
  const customIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
  
  return (
    <div>
      <div className="p-card s-container">
        <div className="col-4">
          <h3>Basic</h3>
          <IconField iconPosition="left">
            <InputIcon className="pi pi-search" />
            <InputText placeholder="Search" value={value1} onChange={e => setValue1(e.target.value)} />
          </IconField>
        </div>
        
        <div className="col-4">
          <h3>Template</h3>
          <IconField>
            <InputIcon>
              {customIcon()}
            </InputIcon>
            <InputText placeholder="Search" value={value2} onChange={e => setValue2(e.target.value)} />
          </IconField>
        </div>
      </div>
    </div>
  )
}
`

export const iconfield = {
  component: "IconField",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    customImportPath: `import { IconField, InputIcon, InputText } from "@cadolabs/sphere-ui"`,
  },
  code,
  scope: { InputText, IconField, InputIcon },
  descriptionProps: [
    { name: "children", type: "ReactNode", default: "null", description: `${I18N_PREFIX}.props.children` },
    { name: "iconPosition", type: "left | right", default: "right", description: `${I18N_PREFIX}.props.iconPosition` },
    { name: "unstyled", type: "boolean", default: "false", description: `${I18N_PREFIX}.props.unstyled` },
  ],
}
