import React from "react"
import { ProgressBar as PrimeProgressBar } from "primereact/progressbar"

export const ProgressBar = React.forwardRef(({
  id,
  value,
  showValue,
  unit,
  color,
  style,
  className,
  displayValueTemplate,
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
    />
  )
})
