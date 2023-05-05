import React from "react"
import { Divider as PrimeDivider } from "primereact/divider"

import { pickDataAttributes } from "../../utils"

export const Divider = React.forwardRef(({
  align,
  layout = "horizontal",
  type = "solid",
  style,
  className,
  children,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeDivider
      ref={ref}
      align={align}
      layout={layout}
      type={type}
      style={style}
      className={className}
      {...dataAttributes}
    >
      {children}
    </PrimeDivider>
  )
})
