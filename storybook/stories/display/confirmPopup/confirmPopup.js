/* eslint-disable max-len */
import { confirmPopup, ConfirmPopup, Button, Toast } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.confirmpopup"

const code = `
function confirmPopupExample () {
  const toast = React.useRef(null)

  const accept = () => {
    toast.current.show({ severity: "info", summary: "Confirmed", detail: "You have accepted", life: 3000 })
  }

  const reject = () => {
    toast.current.show({ severity: "info", summary: "Rejected", detail: "You have rejected", life: 3000 })
  }

  const confirm1 = event => {
    confirmPopup({
      target: event.currentTarget,
      message: "Are you sure you want to proceed?",
      icon: "pi pi-exclamation-triangle",
      accept,
      reject,
    })
  }

  const confirm2 = event => {
    confirmPopup({
      target: event.currentTarget,
      message: "Do you want to delete this record?",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept,
      reject,
    })
  }

  return (
    <div>
      <Toast ref={toast} />
      <ConfirmPopup />
      <div className="p-card s-container">
        <h3>Basic</h3>
        <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2" />
        <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined" />
      </div>
    </div>
  )
}
`

const onHideParams = [
  {
    name: "result",
    description: (
      "Indicates with which selection the popup was closed." +
      "Valid values are 'accept', 'reject' and undefined (outside click)."
    ),
  },
]

const popupExtra = (
  <div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.start.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.start.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
    </div>
  </div>
)

export const confirmPopupPage = {
  component: "ConfirmPopup, confirmPopup",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: popupExtra,
  },
  code,
  scope: { confirmPopup, ConfirmPopup, Button, Toast },
  descriptionProps: [
    { name: "target", type: "DomElement", description: `${I18N_PREFIX}.props.target` },
    { name: "message", type: "string", description: `${I18N_PREFIX}.props.message` },
    { name: "acceptLabel", type: "string", description: `${I18N_PREFIX}.props.acceptLabel` },
    { name: "rejectLabel", type: "string", description: `${I18N_PREFIX}.props.rejectLabel` },
    { name: "icon", type: "string", description: `${I18N_PREFIX}.props.icon` },
    { name: "acceptClassName", type: "string", description: `${I18N_PREFIX}.props.acceptClassName` },
    { name: "rejectClassName", type: "string", description: `${I18N_PREFIX}.props.rejectClassName` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "footer", type: "any", description: `${I18N_PREFIX}.props.footer` },
  ],
  eventDescriptionProps: [
    { name: "accept", description: `${I18N_PREFIX}.props.accept` },
    { name: "reject", description: `${I18N_PREFIX}.props.reject` },
    { name: "onShow", description: `${I18N_PREFIX}.props.onShow` },
    { name: "onHide", params: onHideParams, description: `${I18N_PREFIX}.props.onHide` },
  ],
}
