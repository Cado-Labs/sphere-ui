import React from "react"
import { Toast as PrimeToast } from "primereact/toast"

import { pickDataAttributes } from "../../utils"

export const Toast = React.forwardRef(({
  id,
  className,
  style,
  baseZIndex = 300,
  position = "top-right",
  onClick,
  onRemove,
  onShow,
  onHide,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeToast
      ref={ref}
      id={id}
      className={className}
      style={style}
      position={position}
      event={event}
      baseZIndex={baseZIndex}
      onClick={onClick}
      onRemove={onRemove}
      onShow={onShow}
      onHide={onHide}
      {...dataAttributes}
    />
  )
})
