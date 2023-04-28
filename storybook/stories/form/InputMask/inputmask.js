/* eslint-disable max-len */
import { InputMask } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.inputmask"

const code = `
function InputMaskExample () {
  const [val1, setVal1] = React.useState("")
  const [val2, setVal2] = React.useState("")
  const [val3, setVal3] = React.useState("")
  const [val4, setVal4] = React.useState("")
  const [val5, setVal5] = React.useState("")
  const [val6, setVal6] = React.useState("")
  const [val7, setVal7] = React.useState("")
  const [val8, setVal8] = React.useState("")

  return (
    <div className="p-card s-container">
      <h3>InputMask examples</h3>
      <div className="p-fluid formgrid grid">
        <div className="field col-12 md:col-4">
          <label htmlFor="basic">Basic</label>
          <InputMask id="basic" mask="99-999999" value={val1} placeholder="99-999999" onChange={e => setVal1(e.value)} />
        </div>

        <div className="field col-12 md:col-4">
          <label htmlFor="ssn">SSN</label>
          <InputMask id="ssn" mask="999-99-9999" value={val2} placeholder="999-99-9999" onChange={e => setVal2(e.value)} />
        </div>

        <div className="field col-12 md:col-4">
          <label htmlFor="date">Date</label>
          <InputMask id="date" mask="99/99/9999" value={val3} placeholder="99/99/9999" slotChar="mm/dd/yyyy" onChange={e => setVal3(e.value)} />
        </div>

        <div className="field col-12 md:col-4">
          <label htmlFor="phone">Phone</label>
          <InputMask id="phone" mask="(999) 999-9999" value={val4} placeholder="(999) 999-9999" onChange={e => setVal4(e.value)} />
        </div>

        <div className="field col-12 md:col-4">
          <label htmlFor="phoneext">Phone Ext</label>
          <InputMask id="phoneext" mask="(999) 999-9999? x99999" value={val5} placeholder="(999) 999-9999? x99999" onChange={e => setVal5(e.value)} />
        </div>

        <div className="field col-12 md:col-4">
          <label htmlFor="serial">Serial</label>
          <InputMask id="serial" mask="a*-999-a999" value={val6} placeholder="a*-999-a999" onChange={e => setVal6(e.value)} />
        </div>
      </div>

      <h3>Unmask property</h3>
      <div className="p-fluid formgrid grid">
        <div className="field col-12 md:col-4">
          <label htmlFor="basic">When unmask is true (default)</label>
          <InputMask id="basic" mask="99-999999" value={val7} placeholder="99-999999" onChange={e => setVal7(e.value)} />
          <div className="mt-1">Value: {val7}</div>
        </div>

        <div className="field col-12 md:col-4">
          <label htmlFor="basic">When unmask is false</label>
          <InputMask id="basic" unmask={false} mask="99-999999" value={val8} placeholder="99-999999" onChange={e => setVal8(e.value)} />
          <div className="mt-1">Value: {val8}</div>
        </div>
      </div>
    </div>
  )
}
`

const inputMaskExtra = (
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
        code={`<InputMask mask="99-999999" value={value} onChange={(e) => setValue(e.value)} />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.mask.title`)}</div>
      <p>
        {i18n.t(`${I18N_PREFIX}.content.mask.body`)}
      </p>
      <ul>
        <li className="line-height-3">a - Alpha character (A-Z,a-z)</li>
        <li className="line-height-3">9 - Numeric character (0-9)</li>
        <li className="line-height-3">* - Alpha numberic character (A-Z,a-z,0-9)</li>
      </ul>
      <Highlighter
        language="jsx"
        code={`<InputMask mask="a*-999-a999" value={value} onChange={(e) => setValue(e.value)} />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.slotchar.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.slotchar.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.optional.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.optional.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
    </div>
  </div>
)

const onCompleteParams = [
  { name: "originalEvent", description: "Browser event" },
  { name: "value", description: "New value of the component" },
]

const onChangeParams = [
  { name: "originalEvent", description: "Browser event" },
  { name: "value", description: "New value of the component" },
]

const onFocusParams = [
  { name: "event", description: "Browser event" },
]

const onBlurParams = [
  { name: "event", description: "Browser event" },
]

export const inputmask = {
  component: "InputMask",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: inputMaskExtra,
  },
  code,
  scope: { InputMask },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "inputRef", type: "React.Ref", description: `${I18N_PREFIX}.props.inputRef` },
    { name: "value", type: "string", description: `${I18N_PREFIX}.props.value` },
    { name: "type", type: "string", default: "text", description: `${I18N_PREFIX}.props.type` },
    { name: "mask", type: "string", description: `${I18N_PREFIX}.props.mask` },
    { name: "slotChar", type: "string", default: "_", description: `${I18N_PREFIX}.props.slotChar` },
    { name: "autoClear", type: "boolean", default: false, description: `${I18N_PREFIX}.props.autoClear` },
    { name: "unmask", type: "boolean", default: true, description: `${I18N_PREFIX}.props.unmask` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "placeholder", type: "string", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "size", type: "number", description: `${I18N_PREFIX}.props.size` },
    { name: "maxLength", type: "number", description: `${I18N_PREFIX}.props.maxLength` },
    { name: "tabIndex", type: "number", description: `${I18N_PREFIX}.props.tabIndex` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "readOnly", type: "boolean", default: false, description: `${I18N_PREFIX}.props.readOnly` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "required", type: "boolean", default: false, description: `${I18N_PREFIX}.props.required` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "validateOnly", type: "boolean", default: false, description: `${I18N_PREFIX}.props.validateOnly` },
  ],
  eventDescriptionProps: [
    { name: "onComplete", params: onCompleteParams, description: `${I18N_PREFIX}.props.onComplete` },
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
    { name: "onFocus", params: onFocusParams, description: `${I18N_PREFIX}.props.onFocus` },
    { name: "onBlur", params: onBlurParams, description: `${I18N_PREFIX}.props.onBlur` },
  ],
}
