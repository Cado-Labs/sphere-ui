import React from "react"
import { PanelMenu as PrimePanelMenu } from "primereact/panelmenu"

import { pickDataAttributes } from "../../utils"

export const PanelMenu = React.forwardRef(({
  id,
  model,
  multiple = true,
  style,
  className,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimePanelMenu
      ref={ref}
      id={id}
      model={model}
      style={style}
      className={className}
      multiple={multiple}
      {...dataAttributes}
    />
  )
})
