import React from "react"
import { Chip as PrimeChip } from "primereact/chip"

export const Chip = React.forwardRef(({
  label,
  icon,
  removable,
  style,
  className,
  onRemove,
  dataTestId,
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
      data-testid={dataTestId}
    />
  )
})
