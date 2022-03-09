/* eslint-disable max-len */
import { Tooltip, InputText, Button, Checkbox, Badge } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.tooltip"

const code = `
function TooltipExample () {
  const [saveBtnTooltipText, setSaveBtnTooltipText] = React.useState('Click to proceed')
  const [checked, setChecked] = React.useState(false)
  const [count, setCount] = React.useState(0)

  return (
    <div className="p-card s-container">
      <h3>Positions</h3>
      <div className="grid p-fluid">
        <div className="col-12 md:col-3">
          <InputText type="text" placeholder="Right" tooltip="Enter your username" />
        </div>
        <div className="col-12 md:col-3">
          <InputText type="text" placeholder="Top" tooltip="Enter your username" tooltipOptions={{ position: "top" }} />
        </div>
        <div className="col-12 md:col-3">
          <InputText type="text" placeholder="Bottom" tooltip="Enter your username" tooltipOptions={{ position: "bottom" }} />
        </div>
        <div className="col-12 md:col-3">
          <InputText type="text" placeholder="Left" tooltip="Enter your username" tooltipOptions={{ position: "left" }} />
        </div>
      </div>

      <h3>Focus and Blur</h3>
      <InputText type="text" placeholder="Focus" tooltip="Enter your username" tooltipOptions={{ event: "focus" }} />

      <h3>Dynamic Tooltip</h3>
      <div className="flex align-items-center gap-4">
        <Button type="button" label="Save" icon="pi pi-check" tooltip={saveBtnTooltipText} onClick={() => setSaveBtnTooltipText("Completed")} />

        <Tooltip target=".checkbox">
          {checked ? "You agree" : "You disagree"}
        </Tooltip>
        <div>
          <Checkbox className="checkbox mr-2" inputId="binary" checked={checked} onChange={e => setChecked(e.checked)} />
          <label htmlFor="binary">{checked ? "true" : "false"}</label>
        </div>
      </div>

      <h3>Without autohiding</h3>
      <Tooltip target=".tooltip-button" autoHide={false}>
        <div className="flex align-items-center">
          <span style={{ minWidth: "5rem" }}>Count: {count}</span>
          <Button type="button" icon="pi pi-plus" onClick={() => setCount(count + 1)} className="p-button-rounded p-button-success ml-2" />
          <Button type="button" icon="pi pi-minus" onClick={() => setCount(count - 1)} className="p-button-rounded p-button-danger ml-2" />
        </div>
      </Tooltip>
      <Button className="tooltip-button" type="button" label="Save" icon="pi pi-check" />

      <h3>Template</h3>
      <div className="flex align-items-center">
        <Tooltip target=".custom-tooltip-btn" className="surface-300 p-2 border-round">
          <img alt="logo" src="https://picsum.photos/200" onError={e => e.target.src = "https://randomuser.me/api/portraits/men/54.jpg"} data-pr-tooltip="Portrait" height="80px" />
        </Tooltip>

        <Button className="custom-tooltip-btn" type="button" label="Save" icon="pi pi-check" />
      </div>

      <h3>Disabled Elements</h3>
      <div className="flex align-items-center">
        <Tooltip target=".disabled-button" />
        <span className="disabled-button mr-2" data-pr-tooltip="A Disabled Button">
          <Button type="button" label="Save" icon="pi pi-check" disabled />
        </span>

        <Button type="button" label="Save" icon="pi pi-check" disabled tooltip="A Disabled Button" tooltipOptions={{ showOnDisabled: true }} />
      </div>

      <h3>Target with positioning</h3>
      <div className="flex align-items-center">
        <Tooltip target=".custom-target-icon" at="right+5 top">
          No notifications
        </Tooltip>

        <i className="custom-target-icon pi pi-envelope p-text-secondary p-overlay-badge" style={{ fontSize: "2rem" }}>
          <Badge severity="danger" />
        </i>
      </div>
    </div>
  )
}
`

const basicExample = `
<InputText type="text" placeholder="Right" tooltip="Enter your username" />
<Button type="button" label="Save" icon="pi pi-check" tooltip="Click to proceed" />
`

const globalToltipExample = `
<Tooltip target=".customClassName" />

<img className="customClassName" data-pr-tooltip="Logo"  alt="logo" src="showcase/images/logo.png" height="80px"/>
<div className="customClassName" data-pr-tooltip="This is a div element" style={{ width: '50px', height: '50px', border: '1px solid black' }} />
 `

export const tooltip = {
  header: "Tooltip",
  content: (
    <div>
      <div className="mb-3">
        {i18n.t(`${I18N_PREFIX}.content.main`)}
      </div>
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
          code={basicExample}
        />
      </div>
      <div className="mb-3">
        <div className="title">{i18n.t(`${I18N_PREFIX}.content.position.title`)}</div>
        <p>
          <Trans
            i18nKey={`${I18N_PREFIX}.content.position.body`}
            components={{ code: <code className="inline-code" /> }}
          />
        </p>
        <Highlighter
          language="jsx"
          code={
            `<InputText type="text" placeholder="Right" tooltip="Enter your username" tooltipOptions={{position: 'right'}}/>`
          }
        />
        <p>
          <Trans
            i18nKey={`${I18N_PREFIX}.content.position.at`}
            components={{ code: <code className="inline-code" /> }}
          />
        </p>
        <Highlighter
          language="jsx"
          code={
            `<InputText type="text" tooltip="Enter your username" at="right+5 top"/>`
          }
        />
      </div>
      <div className="mb-3">
        <div className="title">{i18n.t(`${I18N_PREFIX}.content.global.title`)}</div>
        <p>
          <Trans
            i18nKey={`${I18N_PREFIX}.content.global.body`}
            components={{ code: <code className="inline-code" /> }}
          />
        </p>
        <Highlighter
          language="jsx"
          code={globalToltipExample}
        />
      </div>
    </div>
  ),
  code,
  scope: { Tooltip, InputText, Button, Checkbox, Badge },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "target", type: "selector or DOM element", description: `${I18N_PREFIX}.props.target` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "position", type: "string", default: "right", description: `${I18N_PREFIX}.props.position` },
    { name: "at", type: "string", description: `${I18N_PREFIX}.props.at` },
    { name: "event", type: "string", default: "hover", description: `${I18N_PREFIX}.props.event` },
    { name: "showEvent", type: "string", default: "mouseenter", description: `${I18N_PREFIX}.props.showEvent` },
    { name: "hideEvent", type: "string", default: "mouseleave", description: `${I18N_PREFIX}.props.hideEvent` },
    { name: "autoZIndex", type: "string", default: true, description: `${I18N_PREFIX}.props.autoZIndex` },
    { name: "baseZIndex", type: "number", default: 200, description: `${I18N_PREFIX}.props.baseZIndex` },
    { name: "showDelay", type: "number", default: 0, description: `${I18N_PREFIX}.props.showDelay` },
    { name: "hideDelay", type: "number", default: 0, description: `${I18N_PREFIX}.props.hideDelay` },
    { name: "autoHide", type: "boolean", default: true, description: `${I18N_PREFIX}.props.autoHide` },
    { name: "showOnDisabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showOnDisabled` },
    { name: "onShow", type: "function", description: `${I18N_PREFIX}.props.onShow` },
    { name: "onHide", type: "function", description: `${I18N_PREFIX}.props.onHide` },
  ],
}
