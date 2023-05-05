import React from "react"
import { ProgressBar as PrimeProgressBar } from "primereact/progressbar"

import { pickDataAttributes } from "../../utils"

export const ProgressBar = React.forwardRef(({
  id,
  value,
  showValue = true,
  unit = "%",
  color,
  style,
  className,
  displayValueTemplate,
  mode = "determinate",
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeProgressBar
      ref={ref}
      id={id}
      value={value}
      showValue={showValue}
      unit={unit}
      displayValueTemplate={displayValueTemplate}
      color={color}
      style={style}
      className={className}
      mode={mode}
      {...dataAttributes}
    />
  )
})
