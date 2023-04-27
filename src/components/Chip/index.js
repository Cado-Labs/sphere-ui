import React from "react"
import { Chip as PrimeChip } from "primereact/chip"

export const Chip = React.forwardRef(({
  label,
  icon,
  removable = false,
  style,
  className,
  onRemove,
}, ref) => {
  return (
    <PrimeChip
      ref={ref}
      label={label}
      icon={icon}
      removable={removable}
      style={style}
      className={className}
      onRemove={onRemove}
    />
  )
})
