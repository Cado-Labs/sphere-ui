/* eslint-disable max-len */
import { InputTextarea } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.inputtextarea"

const code = `
function InputTextareaExample () {
  const [value1, setValue1] = React.useState("")
  const [value2, setValue2] = React.useState("")
  const [value3, setValue3] = React.useState("")

  return (
    <div className="p-card s-container">
      <h3>Basic</h3>
      <InputTextarea value={value1} onChange={e => setValue1(e.target.value)} rows={5} cols={30} />

      <h3>Auto Resize</h3>
      <InputTextarea value={value2} onChange={e => setValue2(e.target.value)} rows={5} cols={30} autoResize />

      <h3>Disabled</h3>
      <InputTextarea value={value3} rows={5} cols={30} disabled />
    </div>
  )
}
`

const inputTextareaExtra = (
  <div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.start.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.start.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<InputTextarea rows={5} cols={30} value={value} onChange={(e) => setValue(event.target.value)} />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.autoresize.title`)}</div>
      <p>
        {i18n.t(`${I18N_PREFIX}.content.autoresize.body`)}
      </p>
      <Highlighter
        language="jsx"
        code={`<InputTextarea rows={5} cols={30} value={value} onChange={(e) => setValue(event.target.value)} autoResize />`}
      />
    </div>
    <div>
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.properties.title`)}</div>
      <p>
        {i18n.t(`${I18N_PREFIX}.content.properties.body`)}
      </p>
    </div>
  </div>
)

export const inputtextarea = {
  component: "InputTextarea",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: inputTextareaExtra,
  },
  code,
  scope: { InputTextarea },
  descriptionProps: [
    { name: "autoResize", type: "boolean", default: false, description: `${I18N_PREFIX}.props.autoResize` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "keyfilter", type: "string/regex", description: `${I18N_PREFIX}.props.keyfilter` },
  ],
}
