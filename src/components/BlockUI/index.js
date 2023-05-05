import React from "react"
import { BlockUI as PrimeBlockUI } from "primereact/blockui"

import { pickDataAttributes } from "../../utils"

export const BlockUI = React.forwardRef(({
  id,
  blocked = false,
  baseZIndex = 50,
  autoZIndex = true,
  className,
  style,
  children,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeBlockUI
      ref={ref}
      id={id}
      blocked={blocked}
      baseZIndex={baseZIndex}
      autoZIndex={autoZIndex}
      className={className}
      style={style}
      {...dataAttributes}
    >
      {children}
    </PrimeBlockUI>
  )
})
