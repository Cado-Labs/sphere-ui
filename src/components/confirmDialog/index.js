import { confirmDialog as primeConfirmDialog, ConfirmDialog } from "primereact/confirmdialog"

const confirmDialog = ({
  // confirmDialog params
  message,
  acceptLabel,
  rejectLabel,
  icon,
  acceptClassName,
  rejectClassName,
  accept,
  reject,

  // common dialog params
  id,
  header,
  footer,
  visible,
  onHide,
  onShow,
  contentStyle,
  contentClassName,
  style,
  className,
  showHeader = true,
  baseZIndex = 100,
  breakpoints,
  onClick,
  onMaskClick,

  // other params
  ...props
}) => {
  const params = {
    // confirmDialog params
    message,
    acceptLabel,
    rejectLabel,
    icon,
    acceptClassName,
    rejectClassName,
    accept,
    reject,

    // common dialog params
    id,
    header,
    footer,
    visible,
    onHide,
    onShow,
    contentStyle,
    contentClassName,
    style,
    className,
    showHeader,
    baseZIndex,
    breakpoints,
    onClick,
    onMaskClick,

    // default params
    draggable: false,
    resizable: false,
    modal: true,
    closeOnEscape: true,
    dismissableMask: true,
    rtl: false,
    closable: true,
    maximizable: false,
    blockScroll: true,
    keepInViewport: true,
    maximized: false,

    // rewriting params
    ...props,
  }

  return primeConfirmDialog(params)
}

confirmDialog.queue = steps => {
  return new Promise((resolve, reject) => {
    const step = index => {
      if (index < steps.length) {
        let isNextStepAvailable = false

        confirmDialog({
          ...steps[index],

          transitionOptions: {
            ...steps[index]?.transitionOptions,

            onExited: () => {
              if (isNextStepAvailable) {
                step(index + 1)
              }
              steps[index]?.transitionOptions?.onExited?.()
            },
          },
          accept: confirm => {
            isNextStepAvailable = true
            steps[index]?.accept?.(confirm)
          },
          reject: dismiss => {
            steps[index]?.reject?.(dismiss)
            reject(dismiss)
          },
        })
      } else {
        resolve()
      }
    }

    step(0)
  })
}

export {
  confirmDialog,
  ConfirmDialog,
}
