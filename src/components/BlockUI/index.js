import React from "react"
import { BlockUI as PrimeBlockUI } from "primereact/blockui"

export const BlockUI = React.forwardRef(({
  id,
  blocked,
  baseZIndex = 50,
  autoZIndex,
  className,
  style,
  children,
}, ref) => {
  return (
    <PrimeBlockUI
      ref={ref}
      id={id}
      blocked={blocked}
      baseZIndex={baseZIndex}
      autoZIndex={autoZIndex}
      className={className}
      style={style}
    >
      {children}
    </PrimeBlockUI>
  )
})
