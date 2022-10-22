import React from "react"
import { BlockUI as PrimeBlockUI } from "primereact/blockui"

export const BlockUI = React.forwardRef(({
  id,
  blocked,
  baseZIndex = 50,
  autoZIndex = true,
  dataTestId,
  className,
  style,
  children,
}, ref) => {
  return (
    <PrimeBlockUI
      dataTestId={dataTestId}
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
