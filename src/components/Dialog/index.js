import React from "react"
import { Dialog as PrimeDialog } from "primereact/dialog"

export const Dialog = React.forwardRef(({
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
  dataTestId,
  children,
}, ref) => {
  return (
    <PrimeDialog
      ref={ref}
      id={id}
      header={header}
      footer={footer}
      visible={visible}
      onHide={onHide}
      onShow={onShow}
      contentStyle={contentStyle}
      contentClassName={contentClassName}
      style={style}
      className={className}
      showHeader={showHeader}
      baseZIndex={baseZIndex}
      breakpoints={breakpoints}
      onClick={onClick}
      onMaskClick={onMaskClick}
      data-testid={dataTestId}
      // props below are unavailable for users
      draggable={false}
      resizable={false}
      modal
      closeOnEscape
      dismissableMask
      rtl={false}
      closable
      maximizable={false}
      blockScroll
      keepInViewport
      maximized={false}
    >
      {children}
    </PrimeDialog>
  )
})
