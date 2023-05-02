import React from "react"
import { BlockUI as PrimeBlockUI } from "primereact/blockui"

export const BlockUI = React.forwardRef(({
  id,
  blocked = false,
  baseZIndex = 50,
  autoZIndex = true,
  className,
  style,
  dataCy,
  dataTestId,
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
      data-cy={dataCy}
      data-testid={dataTestId}
    >
      {children}
    </PrimeBlockUI>
  )
})
