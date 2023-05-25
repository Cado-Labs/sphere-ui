import React, { useEffect } from "react"
import { Dialog as PrimeDialog } from "primereact/dialog"

import { pickDataAttributes } from "../../utils"

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
  showHeader = true,
  baseZIndex = 100,
  breakpoints,
  onClick,
  onMaskClick,
  blockScroll = true,
  maximizable = false,
  keepInViewport = true,
  maximized = false,
  dismissableMask = true,
  modal = true,
  children,
  ...props
}, ref) => {
  useEffect(() => {
    return () => {
      document.body.classList.remove("p-overflow-hidden")
    }
  })

  const dataAttributes = pickDataAttributes(props)
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
      draggable={false}
      resizable={false}
      modal={modal}
      closeOnEscape
      dismissableMask={dismissableMask}
      rtl={false}
      closable
      maximizable={maximizable}
      blockScroll={blockScroll}
      keepInViewport={keepInViewport}
      maximized={maximized}
      {...dataAttributes}
    >
      {children}
    </PrimeDialog>
  )
})
