import React from "react"
import { Tooltip as PrimeTooltip } from "primereact/tooltip"

import { pickDataAttributes } from "../../utils"

export const Tooltip = React.forwardRef(({
  id,
  target,
  disabled = false,
  className,
  style,
  position = "right",
  at,
  event,
  showEvent = "mouseenter",
  hideEvent = "mouseleave",
  autoZIndex = true,
  baseZIndex = 200,
  showDelay = 0,
  hideDelay = 0,
  autoHide = true,
  showOnDisabled = false,
  onShow,
  onHide,
  children,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeTooltip
      ref={ref}
      id={id}
      target={target}
      disabled={disabled}
      className={className}
      style={style}
      position={position}
      at={at}
      event={event}
      showEvent={showEvent}
      hideEvent={hideEvent}
      autoZIndex={autoZIndex}
      baseZIndex={baseZIndex}
      showDelay={showDelay}
      hideDelay={hideDelay}
      autoHide={autoHide}
      showOnDisabled={showOnDisabled}
      onShow={onShow}
      onHide={onHide}
      {...dataAttributes}
    >
      {children}
    </PrimeTooltip>
  )
})
