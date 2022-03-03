import { confirmDialog as primeConfirmDialog } from "primereact/confirmdialog"

export const confirmDialog = ({
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
  baseZIndex = 100,
  breakpoints,
  onClick,
  onMaskClick,
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

    // params below are unavailable for users
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
  }

  return primeConfirmDialog(params)
}
