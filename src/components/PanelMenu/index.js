import React from "react"
import { PanelMenu as PrimePanelMenu } from "primereact/panelmenu"

export const PanelMenu = React.forwardRef(({
  id,
  model,
  multiple = true,
  style,
  className,
  dataCy,
  dataTestId,
}, ref) => {
  return (
    <PrimePanelMenu
      ref={ref}
      id={id}
      model={model}
      style={style}
      className={className}
      multiple={multiple}
      data-cy={dataCy}
      data-testid={dataTestId}
    />
  )
})
