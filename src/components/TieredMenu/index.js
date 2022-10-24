import React from "react"
import { TieredMenu as PrimeTieredMenu } from "primereact/tieredmenu"

export const TieredMenu = React.forwardRef(({
  id,
  model,
  style,
  className,
  autoZIndex = true,
  baseZIndex = 150,
  dataTestId,
}, ref) => {
  return (
    <PrimeTieredMenu
      ref={ref}
      id={id}
      model={model}
      style={style}
      className={className}
      autoZIndex={autoZIndex}
      baseZIndex={baseZIndex}
      data-testid={dataTestId}
    />
  )
})
