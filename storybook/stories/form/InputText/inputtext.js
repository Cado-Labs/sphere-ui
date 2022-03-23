/* eslint-disable max-len */
import { InputText } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.inputtext"

const code = `
function InputTextExample () {
  const [value1, setValue1] = React.useState("")
  const [value2, setValue2] = React.useState("")
  const [value3, setValue3] = React.useState("")
  const [value4, setValue4] = React.useState("")

  return (
    <div>
      <div className="p-card s-container">
        <h3>Basic</h3>
        <InputText value={value1} onChange={e => setValue1(e.target.value)} />
        <span className="ml-2">{value1}</span>

        <h3>Left Icon</h3>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText value={value2} onChange={e => setValue2(e.target.value)} placeholder="Search" />
        </span>

        <h3>Right Icon</h3>
        <span className="p-input-icon-right">
          <i className="pi pi-spin pi-spinner" />
          <InputText value={value3} onChange={e => setValue3(e.target.value)} />
        </span>

        <h3>Help Text</h3>
        <div className="field">
          <label htmlFor="username1" className="block">Username</label>
          <InputText id="username1" aria-describedby="username1-help" className="block" />
          <small id="username1-help" className="block">Enter your username to reset your password.</small>
        </div>

        <h3>Invalid</h3>
        <div className="field">
          <label htmlFor="username2" className="block">Username</label>
          <InputText id="username2" aria-describedby="username2-help" className="p-invalid block" />
          <small id="username2-help" className="p-error block">Username is not available.</small>
        </div>

        <h3>Disabled</h3>
        <InputText value={value4} disabled />

        <h3>Sizes</h3>
        <div className="sizes">
          <InputText type="text" className="p-inputtext-sm block mb-2" placeholder="Small" />
          <InputText type="text" className="block mb-2" placeholder="Normal" />
          <InputText type="text" className="p-inputtext-lg block" placeholder="Large" />
        </div>
      </div>

      <div className="p-card s-container mt-3">
        <h3>KeyFilter</h3>

        <div className="grid p-fluid">
          <div className="field col-12 md:col-3">
            <label htmlFor="integer">Integers</label>
            <InputText id="integer" keyfilter="int" />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="numbers">Numbers</label>
            <InputText id="numbers" keyfilter="num" />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="money">Money</label>
            <InputText id="money" keyfilter="money" />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="hex">Hex</label>
            <InputText id="hex" keyfilter="hex" />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="alpha">Alphabetic</label>
            <InputText id="alpha" keyfilter="alpha" />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="alphanum">Alphanumberic</label>
            <InputText id="alphanum" keyfilter="alphanum" />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="block">Block {"< > * !"}</label>
            <InputText id="block" keyfilter={/^[^<>*!]+$/} />
          </div>
          <div className="field col-12 md:col-3">
            <label htmlFor="spaceblock">Block space key</label>
            <InputText id="spaceblock" keyfilter={/[^\\s]/} />
          </div>
        </div>
      </div>
    </div>
  )
}
`

const inputTextExtra = (
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
        code={`<InputText value={value} onChange={(e) => setValue(e.target.value)} />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.properties.title`)}</div>
      <p>
        {i18n.t(`${I18N_PREFIX}.content.properties.body`)}
      </p>
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.keyfilter.title`)}</div>
      <p>
        {i18n.t(`${I18N_PREFIX}.content.keyfilter.body`)}
      </p>
      <Highlighter
        language="jsx"
        code={`<InputText keyfilter="int" />`}
      />
      <p>
        {i18n.t(`${I18N_PREFIX}.content.keyfilter.builtinFilters`)}
      </p>
      <ul>
        <li className="line-height-3">pint: Positive integers</li>
        <li className="line-height-3">int: Integers</li>
        <li className="line-height-3">pnum: Positive numbers</li>
        <li className="line-height-3">num: Numbers</li>
        <li className="line-height-3">hex: Hexadecimal</li>
        <li className="line-height-3">email: Email</li>
        <li className="line-height-3">alpha: Alphabetic</li>
        <li className="line-height-3">alphanum: Alphanumeric</li>
      </ul>
      <p>
        {i18n.t(`${I18N_PREFIX}.content.keyfilter.customFilters`)}
      </p>
      <Highlighter
        language="jsx"
        code={`<InputText keyfilter={/^[^#<>*!]+$/}/>`}
      />
    </div>
  </div>
)

export const inputtext = {
  component: "InputText",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: inputTextExtra,
  },
  code,
  scope: { InputText },
  descriptionProps: [
    { name: "keyfilter", type: "string/regex", description: `${I18N_PREFIX}.props.keyfilter` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
  ],
}
