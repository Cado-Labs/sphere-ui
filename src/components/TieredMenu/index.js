import React from "react"
import { TieredMenu as PrimeTieredMenu } from "primereact/tieredmenu"

import { pickDataAttributes } from "../../utils"

export const TieredMenu = React.forwardRef(({
  id,
  model,
  style,
  className,
  autoZIndex = true,
  baseZIndex = 150,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeTieredMenu
      ref={ref}
      id={id}
      model={model}
      style={style}
      className={className}
      autoZIndex={autoZIndex}
      baseZIndex={baseZIndex}
      {...dataAttributes}
    />
  )
})
