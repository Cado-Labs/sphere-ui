/* eslint-disable max-len */
import { Toast, Button } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { ParamsTable, Highlighter } from "@components"

const I18N_PREFIX = "stories.toast"

const code = `
function ToastExample () {
  const toast = React.useRef(null)
  const toastTL = React.useRef(null)
  const toastBL = React.useRef(null)
  const toastBR = React.useRef(null)

  const showSuccess = () => {
    toast.current.show({ severity: "success", summary: "Success Message", detail: "Message Content" })
  }

  const showInfo = () => {
    toast.current.show({ severity: "info", summary: "Info Message", detail: "Message Content" })
  }

  const showWarn = () => {
    toast.current.show({ severity: "warn", summary: "Warn Message", detail: "Message Content" })
  }

  const showError = () => {
    toast.current.show({ severity: "error", summary: "Error Message", detail: "Message Content" })
  }

  const showTopLeft = () => {
    toastTL.current.show({ severity: "info", summary: "Info Message", detail: "Message Content" })
  }

  const showBottomLeft = () => {
    toastBL.current.show({ severity: "warn", summary: "Warn Message", detail: "Message Content" })
  }

  const showBottomRight = () => {
    toastBR.current.show({ severity: "success", summary: "Success Message", detail: "Message Content" })
  }

  const showSticky = () => {
    toast.current.show({ severity: "info", summary: "Sticky Message", detail: "Message Content", sticky: true })
  }

  const showMultiple = () => {
    toast.current.show([
      { severity: "info", summary: "Message 1", detail: "Message 1 Content" },
      { severity: "info", summary: "Message 2", detail: "Message 2 Content" },
      { severity: "info", summary: "Message 3", detail: "Message 3 Content" },
    ])
  }

  const clear = () => {
    toast.current.clear()
  }

  return (
    <div>
      <Toast ref={toast} />
      <Toast ref={toastTL} position="top-left" />
      <Toast ref={toastBL} position="bottom-left" />
      <Toast ref={toastBR} position="bottom-right" />

      <div className="p-card s-container">
        <h3>Severities</h3>
        <div className="flex gap-2">
          <Button label="Success" className="p-button-success" onClick={showSuccess} />
          <Button label="Info" className="p-button-info" onClick={showInfo} />
          <Button label="Warn" className="p-button-warning" onClick={showWarn} />
          <Button label="Error" className="p-button-danger" onClick={showError} />
        </div>

        <h3>Positions</h3>
        <div className="flex gap-2">
          <Button label="Top Right (Default)" onClick={showSuccess} />
          <Button label="Top Left"  className="p-button-info" onClick={showTopLeft} />
          <Button label="Bottom Left" className="p-button-warning" onClick={showBottomLeft} />
          <Button label="Bottom Right" className="p-button-success" onClick={showBottomRight} />
        </div>

        <h3>Options</h3>
        <div className="flex gap-2">
          <Button onClick={showMultiple} label="Multiple" className="p-button-warning" />
          <Button onClick={showSticky} label="Sticky" />
        </div>

        <h3>Clear</h3>
        <Button onClick={clear} label="Clear" />
      </div>
    </div>
  )
}
`

const showExample = `
<Toast ref={toast}></Toast>

<Button onClick={showSuccess} label="Success" className="p-button-success" />
<Button onClick={showInfo} label="Info" className="p-button-info" />
<Button onClick={showWarn} label="Warn" className="p-button-warning" />
<Button onClick={showError} label="Error" className="p-button-danger" />
<Button onClick={showMultiple} label="Multiple" />
`

const showMethodsExample = `
showSuccess() {
  toast.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});
}

showInfo() {
  toast.current.show({severity: 'info', summary: 'Info Message', detail: 'PrimeReact rocks'});
}

showWarn() {
  toast.current.show({severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes'});
}

showError() {
  toast.current.show({severity: 'error', summary: 'Error Message', detail: 'Validation failed'});
}

showMultiple() {
  toast.current.show([
      {severity:'info', summary:'Message 1', detail:'PrimeReact rocks'},
      {severity:'info', summary:'Message 2', detail:'PrimeReact rocks'},
      {severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'}
  ]);
}
`

const onClickParams = [
  { name: "message", description: "Clicked message" },
]

const onRemoveParams = [
  { name: "message", description: "Removed message" },
]

const toastExtra = (
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
        code={`<Toast ref={toast} />`}
      />
      <Highlighter
        language="jsx"
        code={`toast.current.show({severity: 'success', summary: 'Success Message', detail: 'Order submitted'});`}
      />
    </div>

    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.severities.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.severities.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <ul>
        <li className="line-height-3">success</li>
        <li className="line-height-3">info</li>
        <li className="line-height-3">warn</li>
        <li className="line-height-3">error</li>
      </ul>
    </div>

    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.show.title`)}</div>
      <p>{i18n.t(`${I18N_PREFIX}.content.show.body`)}</p>
      <Highlighter language="jsx" code={showExample} />
      <Highlighter language="jsx" code={showMethodsExample} />
    </div>

    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.closable.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.closable.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`toast.current.show({closable: false, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});`}
      />
    </div>

    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.sticky.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.sticky.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`toast.current.show({sticky: true, severity: 'error', summary: 'Error Message', detail: 'Validation failed'});`}
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
        code={`<Toast ref={toast} position="top-left" />`}
      />
    </div>

    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.clear.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.clear.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter
        language="jsx"
        code={`toast.current.clear();`}
      />
    </div>
  </div>
)

export const toast = {
  component: "Toast",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: toastExtra,
  },
  code,
  scope: { Toast, Button },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "baseZIndex", type: "number", default: 300, description: `${I18N_PREFIX}.props.baseZIndex` },
    { name: "position", type: "string", default: "top-right", description: `${I18N_PREFIX}.props.position` },
  ],
  eventDescriptionProps: [
    { name: "onClick", params: onClickParams, description: `${I18N_PREFIX}.props.onClick` },
    { name: "onRemove", params: onRemoveParams, description: `${I18N_PREFIX}.props.onRemove` },
    { name: "onHide", description: `${I18N_PREFIX}.props.onHide` },
    { name: "onShow", description: `${I18N_PREFIX}.props.onShow` },
  ],
  footer: (
    <ParamsTable
      title={i18n.t(`${I18N_PREFIX}.header.message`)}
      description={[
        { name: "severity", type: "string", description: `${I18N_PREFIX}.message.severity` },
        { name: "summary", type: "element/string", description: `${I18N_PREFIX}.message.summary` },
        { name: "detail", type: "element/string", description: `${I18N_PREFIX}.message.detail` },
        { name: "closable", type: "boolean", default: true, description: `${I18N_PREFIX}.message.closable` },
        { name: "sticky", type: "boolean", default: false, description: `${I18N_PREFIX}.message.sticky` },
        { name: "style", type: "object", description: `${I18N_PREFIX}.message.style` },
        { name: "className", type: "string", description: `${I18N_PREFIX}.message.className` },
      ]}
    />
  ),
}
