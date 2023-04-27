import { confirmPopup as primeConfirmPopup, ConfirmPopup } from "primereact/confirmpopup"

const confirmPopup = ({
  target,
  message,
  rejectLabel,
  acceptLabel,
  icon,
  rejectClassName,
  acceptClassName,
  className,
  style,
  footer,
  onShow,
  onHide,
  accept,
  reject,
}) => {
  const params = {
    target,
    message,
    rejectLabel,
    acceptLabel,
    icon,
    rejectClassName,
    acceptClassName,
    className,
    style,
    footer,
    onShow,
    onHide,
    accept,
    reject,
    dismissable: true,
  }

  return primeConfirmPopup(params)
}

export {
  confirmPopup,
  ConfirmPopup,
}
