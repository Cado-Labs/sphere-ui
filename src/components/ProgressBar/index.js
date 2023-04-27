import React from "react"
import { ProgressBar as PrimeProgressBar } from "primereact/progressbar"

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
}, ref) => {
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
    />
  )
})
