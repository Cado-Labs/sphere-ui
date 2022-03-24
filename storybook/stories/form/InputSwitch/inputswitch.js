/* eslint-disable max-len */
import { InputSwitch } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.inputswitch"

const code = `
function InputSwitchExample () {
  const [checked1, setChecked1] = React.useState(false)
  const [checked2, setChecked2] = React.useState(true)
  const [value, setValue] = React.useState("🚫")

  return (
    <div>
      <div className="p-card s-container">
        <h3>Basic</h3>
        <InputSwitch checked={checked1} onChange={e => setChecked1(e.value)} />

        <h3>Preselection</h3>
        <InputSwitch checked={checked2} onChange={e => setChecked2(e.value)} />

        <h3>Disabled</h3>
        <InputSwitch checked={false} disabled />

        <h3>With trueValue and falseValue</h3>
        <InputSwitch checked={value} onChange={e => setValue(e.value)} trueValue="✅" falseValue="🚫" />
        <div>Value: {value}</div>
      </div>
    </div>
  )
}
`

const inputSwitchExtra = (
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
        code={`<InputSwitch checked={value} onChange={(e) => setValue(e.value)} />`}
      />
    </div>
  </div>
)

const onChangeParams = [
  { name: "originalEvent", description: "Browser event" },
  { name: "value", description: "Checked state as a boolean." },
]

const onFocusParams = [
  { name: "event", description: "Browser event" },
]

const onBlurParams = [
  { name: "event", description: "Browser event" },
]

export const inputswitch = {
  component: "InputSwitch",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: inputSwitchExtra,
  },
  code,
  scope: { InputSwitch },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "inputRef", type: "React.Ref", description: `${I18N_PREFIX}.props.inputRef` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.inputId` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "checked", type: "boolean", default: false, description: `${I18N_PREFIX}.props.checked` },
    { name: "trueValue", type: "any", default: true, description: `${I18N_PREFIX}.props.trueValue` },
    { name: "falseValue", type: "any", default: false, description: `${I18N_PREFIX}.props.falseValue` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "ariaLabelledBy", type: "string", description: `${I18N_PREFIX}.props.ariaLabelledBy` },
  ],
  eventDescriptionProps: [
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
    { name: "onFocus", params: onFocusParams, description: `${I18N_PREFIX}.props.onFocus` },
    { name: "onBlur", params: onBlurParams, description: `${I18N_PREFIX}.props.onBlur` },
  ],
}
