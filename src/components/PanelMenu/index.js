import React from "react"
import { PanelMenu as PrimePanelMenu } from "primereact/panelmenu"

export const PanelMenu = React.forwardRef(({
  id,
  model,
  style,
  className,
  dataTestId,
}, ref) => {
  return (
    <PrimePanelMenu
      ref={ref}
      id={id}
      model={model}
      style={style}
      className={className}
      data-testid={dataTestId}
      multiple
    />
  )
})
