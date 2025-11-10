/* eslint-disable max-len */
import { confirmDialog, ConfirmDialog, Button, Toast } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.confirmdialog"

const code = `
function confirmDialogExample () {
  const toast = React.useRef(null)

  const accept = () => {
    toast.current.show({ severity: "info", summary: "Confirmed", detail: "You have accepted", life: 3000 })
  }

  const reject = () => {
    toast.current.show({ severity: "info", summary: "Rejected", detail: "You have rejected", life: 3000 })
  }

  const confirm1 = () => {
    confirmDialog({
      message: "Are you sure you want to proceed?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept,
      reject,
    })
  }

  const confirm2 = () => {
    confirmDialog({
      message: "Do you want to delete this record?",
      header: "Delete Confirmation",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      rejectClassName: "p-button-text p-button-plain",
      accept,
      reject,
    })
  }

  const queue = [
    {
      message: "Are you sure you want to proceed?",
      header: "Step 1",
      icon: "pi pi-exclamation-triangle",
      accept: () => toast.current.show({ severity: "info", summary: "Confirmed", detail: "You confirm firts step", life: 3000 }),
      reject: () => toast.current.show({ severity: "info", summary: "Rejected", detail: "You reject first step", life: 3000 }),
    },
    {
      message: "Are you sure you want to proceed?",
      header: "Step 2",
      icon: "pi pi-exclamation-triangle",
      accept: () => toast.current.show({ severity: "info", summary: "Confirmed", detail: "You confirm second step", life: 3000 }),
      reject: () => toast.current.show({ severity: "info", summary: "Rejected", detail: "You reject second step", life: 3000 }),
    }
  ]

  const onSuccess = () => {
    toast.current.show({ severity: "info", summary: "Confirmed", detail: "You confirm all steps", life: 3000 })
  }

  const onReject = () => toast.current.show({ severity: "info", summary: "Rejected", detail: "You reject chain", life: 3000 })

  const callChainable = () => confirmDialog.queue(queue).then(onSuccess, onReject)

  return (
    <div>
      <Toast ref={toast} />
      <ConfirmDialog />
      <div className="p-card s-container">
        <h3>Basic</h3>
        <Button onClick={confirm1} icon="pi pi-check" label="Confirm" className="mr-2" />
        <Button onClick={confirm2} icon="pi pi-times" label="Delete" className="p-button-danger p-button-outlined" />
      </div>

      <div className="p-card s-container">
        <h3>Call queue</h3>
        <Button onClick={callChainable} icon="pi pi-play" label="Call" className="mr-2" />
      </div>
    </div>
  )
}
`

const dialogExtra = (
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

export const confirmDialogPage = {
  component: "ConfirmDialog, confirmDialog",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: dialogExtra,
  },
  code,
  scope: { confirmDialog, ConfirmDialog, Button, Toast },
  descriptionProps: [
    { name: "message", type: "string", description: `${I18N_PREFIX}.props.message` },
    { name: "acceptLabel", type: "string", description: `${I18N_PREFIX}.props.acceptLabel` },
    { name: "rejectLabel", type: "string", description: `${I18N_PREFIX}.props.rejectLabel` },
    { name: "icon", type: "string", description: `${I18N_PREFIX}.props.icon` },
    { name: "acceptClassName", type: "string", description: `${I18N_PREFIX}.props.acceptClassName` },
    { name: "rejectClassName", type: "string", description: `${I18N_PREFIX}.props.rejectClassName` },
  ],
  eventDescriptionProps: [
    { name: "accept", description: `${I18N_PREFIX}.props.accept` },
    { name: "reject", description: `${I18N_PREFIX}.props.reject` },
  ],
  footer: (
    <div>
      <h3>{i18n.t(`${I18N_PREFIX}.footer.title`)}</h3>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.footer.text`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
    </div>
  ),
}
