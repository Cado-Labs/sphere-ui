/* eslint-disable max-len */
import { InputNumber } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.inputnumber"

const code = `
function InputNumberExample () {
  const [value1, setValue1] = React.useState(42723)
  const [value2, setValue2] = React.useState(58151)
  const [value3, setValue3] = React.useState(2351.35)
  const [value4, setValue4] = React.useState(50)
  const [value5, setValue5] = React.useState(151351)
  const [value6, setValue6] = React.useState(115744)
  const [value7, setValue7] = React.useState(635524)
  const [value8, setValue8] = React.useState(732762)
  const [value9, setValue9] = React.useState(20)
  const [value10, setValue10] = React.useState(50)
  const [value11, setValue11] = React.useState(10)
  const [value12, setValue12] = React.useState(20)
  const [value13, setValue13] = React.useState(50)

  return (
    <div className="p-card s-container">
      <h3>Numerals</h3>
      <div className="p-fluid grid formgrid">
        <div className="field col-12 md:col-3">
          <label htmlFor="integeronly">Integer Only</label>
          <InputNumber inputId="integeronly" value={value1} onValueChange={e => setValue1(e.value)} />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="withoutgrouping">Without Grouping</label>
          <InputNumber inputId="withoutgrouping" value={value2} onValueChange={e => setValue2(e.value)} useGrouping={false} />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="minmaxfraction">Min-Max Fraction Digits</label>
          <InputNumber inputId="minmaxfraction" value={value3} onValueChange={e => setValue3(e.value)} minFractionDigits={2} maxFractionDigits={5} />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="minmax">Min-Max Boundaries</label>
          <InputNumber inputId="minmax" value={value4} onValueChange={e => setValue4(e.value)} min={0} max={100} />
        </div>

        <div className="field col-12 md:col-3">
          <label htmlFor="locale-user">User Locale</label>
          <InputNumber inputId="locale-user" value={value5} onValueChange={e => setValue5(e.value)} minFractionDigits={2} />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="locale-us">United States Locale</label>
          <InputNumber inputId="locale-us" value={value6} onValueChange={e => setValue6(e.value)} locale="en-US" minFractionDigits={2} />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="locale-german">German Locale</label>
          <InputNumber inputId="locale-german" value={value7} onValueChange={e => setValue7(e.value)} locale="de-DE" minFractionDigits={2} />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="locale-russian">Russian Locale</label>
          <InputNumber inputId="locale-russian" value={value8} onValueChange={e => setValue8(e.value)} locale="ru-RU" minFractionDigits={2} />
        </div>
      </div>

      <h3>Prefix and Suffix</h3>
      <div className="grid p-fluid">
        <div className="field col-12 md:col-3">
          <label htmlFor="mile">Mile</label>
          <InputNumber inputId="mile" value={value9} onValueChange={e => setValue9(e.value)} suffix=" mi" />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="percent">Percent</label>
          <InputNumber inputId="percent" value={value10} onValueChange={e => setValue10(e.value)} prefix="%" />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="expiry">Expiry</label>
          <InputNumber inputId="expiry" value={value11} onValueChange={e => setValue11(e.value)} prefix="Expires in " suffix=" days" />
        </div>
        <div className="field col-12 md:col-3">
          <label htmlFor="temperature">Temperature</label>
          <InputNumber inputId="temperature" value={value12} onValueChange={e => setValue12(e.value)} prefix="↑ " suffix="℃" min={0} max={40} />
        </div>
      </div>

      <h3>Buttons</h3>
      <div className="grid p-fluid">
        <div className="field col-12 md:col-3">
          <label htmlFor="minmax-buttons">With Min-Max Boundaries (0 -> 100)</label>
          <InputNumber inputId="minmax-buttons" value={value13} onValueChange={e => setValue13(e.value)} showButtons min={0} max={100} />
        </div>
      </div>
    </div>
  )
}
`

const decimalFractionsExample = `
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} minFractionDigits={2} />
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} minFractionDigits={2} maxFracionDigits={2} />
`

const decimalLocaleExample = `
User Locale
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} minFractionDigits={2} />

United State Locale
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} locale="en-US" minFractionDigits={2}/>

German Locale
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} locale="de-DE" minFractionDigits={2}/>

Russian Locale
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} locale="ru-RU" minFractionDigits={2} />
`

const prefixSuffixExample = `
Mile
<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} suffix=" mi" />

Percent
<InputNumber value={value2} onValueChange={(e) => setValue2(e.value)} prefix="%" />

Expiry
<InputNumber value={value3} onValueChange={(e) => setValue3(e.value)} prefix="Expires in " suffix=" days" />

Temperature
<InputNumber value={value4} onValueChange={(e) => setValue4(e.value)} prefix="↑ " suffix="℃" min={0} max={40} />
`

const inputNumberExtra = (
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
        code={`<InputNumber value={value} onValueChange={(e) => setValue(e.value)} />`}
      />
      <p>{i18n.t(`${I18N_PREFIX}.content.start.integers`)}</p>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.start.fractions`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={decimalFractionsExample} />
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.start.locale`}
          components={{
            code: <code className="inline-code" />,
            langLink: <a href="https://tools.ietf.org/html/rfc5646" target="_blank" />,
          }}
        />
      </p>
      <Highlighter language="jsx" code={decimalLocaleExample} />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.prefixAndSuffix.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.prefixAndSuffix.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={prefixSuffixExample} />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.buttons.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.buttons.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<InputNumber value={value1} onValueChange={(e) => setValue1(e.value)} showButtons />`}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.step.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.step.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<InputNumber value={value} onValueChange={(e) => setValue(e.value)} step={0.25} />`}
      />
    </div>
    <div>
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.boundaries.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.boundaries.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`<InputNumber value={value} onValueChange={(e) => setValue1(e.value)} min={0} max={100} />`}
      />
    </div>
  </div>
)

const onValueChangeParams = [
  { name: "originalEvent", description: "Browser event" },
  { name: "value", description: "New value" },
]

const onChangeParams = [
  { name: "originalEvent", description: "Browser event" },
  { name: "value", description: "New value" },
]

const onFocusParams = [
  { name: "event", description: "Browser event" },
]

const onBlurParams = [
  { name: "event", description: "Browser event" },
]

const onKeyDownParams = [
  { name: "event", description: "Browser event" },
]

export const inputnumber = {
  component: "InputNumber",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: inputNumberExtra,
  },
  code,
  scope: { InputNumber },
  descriptionProps: [
    { name: "value", type: "number", description: `${I18N_PREFIX}.props.value` },
    { name: "inputRef", type: "React.Ref", description: `${I18N_PREFIX}.props.inputRef` },
    { name: "format", type: "boolean", default: true, description: `${I18N_PREFIX}.props.format` },
    { name: "showButtons", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showButtons` },
    { name: "locale", type: "string", description: `${I18N_PREFIX}.props.locale` },
    { name: "suffix", type: "string", description: `${I18N_PREFIX}.props.suffix` },
    { name: "prefix", type: "string", description: `${I18N_PREFIX}.props.prefix` },
    { name: "useGrouping", type: "boolean", default: true, description: `${I18N_PREFIX}.props.useGrouping` },
    { name: "minFractionDigits", type: "number", description: `${I18N_PREFIX}.props.minFractionDigits` },
    { name: "maxFractionDigits", type: "number", description: `${I18N_PREFIX}.props.maxFractionDigits` },
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "name", type: "string", description: `${I18N_PREFIX}.props.name` },
    { name: "type", type: "string", description: `${I18N_PREFIX}.props.type` },
    { name: "allowEmpty", type: "boolean", default: true, description: `${I18N_PREFIX}.props.allowEmpty` },
    { name: "step", type: "number", default: 1, description: `${I18N_PREFIX}.props.step` },
    { name: "min", type: "number", description: `${I18N_PREFIX}.props.min` },
    { name: "max", type: "number", description: `${I18N_PREFIX}.props.max` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "required", type: "boolean", default: false, description: `${I18N_PREFIX}.props.required` },
    { name: "tabIndex", type: "number", description: `${I18N_PREFIX}.props.tabIndex` },
    { name: "pattern", type: "string", description: `${I18N_PREFIX}.props.pattern` },
    { name: "inputMode", type: "string", description: `${I18N_PREFIX}.props.inputMode` },
    { name: "placeholder", type: "string", description: `${I18N_PREFIX}.props.placeholder` },
    { name: "readOnly", type: "boolean", default: false, description: `${I18N_PREFIX}.props.readOnly` },
    { name: "size", type: "number", description: `${I18N_PREFIX}.props.size` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "inputId", type: "string", description: `${I18N_PREFIX}.props.inputId` },
    { name: "autoFocus", type: "boolean", default: false, description: `${I18N_PREFIX}.props.autoFocus` },
    { name: "inputStyle", type: "object", description: `${I18N_PREFIX}.props.inputStyle` },
    { name: "inputClassName", type: "string", description: `${I18N_PREFIX}.props.inputClassName` },
    { name: "tooltip", type: "any", description: `${I18N_PREFIX}.props.tooltip` },
    { name: "tooltipOptions", type: "object", description: `${I18N_PREFIX}.props.tooltipOptions` },
    { name: "ariaLabelledBy", type: "string", description: `${I18N_PREFIX}.props.ariaLabelledBy` },
  ],
  eventDescriptionProps: [
    { name: "onValueChange", params: onValueChangeParams, description: `${I18N_PREFIX}.props.onValueChange` },
    { name: "onChange", params: onChangeParams, description: `${I18N_PREFIX}.props.onChange` },
    { name: "onFocus", params: onFocusParams, description: `${I18N_PREFIX}.props.onFocus` },
    { name: "onBlur", params: onBlurParams, description: `${I18N_PREFIX}.props.onBlur` },
    { name: "onKeyDown", params: onKeyDownParams, description: `${I18N_PREFIX}.props.onKeyDown` },
  ],
}
