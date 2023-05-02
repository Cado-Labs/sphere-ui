import React from "react"
import { Divider as PrimeDivider } from "primereact/divider"

export const Divider = React.forwardRef(({
  align,
  layout = "horizontal",
  type = "solid",
  style,
  className,
  dataCy,
  dataTestId,
  children,
}, ref) => {
  return (
    <PrimeDivider
      ref={ref}
      align={align}
      layout={layout}
      type={type}
      style={style}
      className={className}
      data-cy={dataCy}
      data-testid={dataTestId}
    >
      {children}
    </PrimeDivider>
  )
})
