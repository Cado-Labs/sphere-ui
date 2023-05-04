import React from "react"
import { Chip as PrimeChip } from "primereact/chip"

import { pickDataAttributes } from "../../utils"

export const Chip = React.forwardRef(({
  label,
  icon,
  removable = false,
  style,
  className,
  onRemove,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeChip
      ref={ref}
      label={label}
      icon={icon}
      removable={removable}
      style={style}
      className={className}
      onRemove={onRemove}
      {...dataAttributes}
    />
  )
})
