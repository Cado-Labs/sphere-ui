import React from "react"
import { TriStateCheckbox as PrimeTriStateCheckbox } from "primereact/tristatecheckbox"

import { filterTooltipOptions, pickDataAttributes } from "../../utils"

export const TriStateCheckbox = React.forwardRef(({
  id,
  value,
  name,
  style,
  className,
  disabled = false,
  readOnly = false,
  tooltip,
  tooltipOptions,
  onChange,
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const dataAttributes = pickDataAttributes(props)

  return (
    <PrimeTriStateCheckbox
      ref={ref}
      id={id}
      value={value}
      name={name}
      style={style}
      className={className}
      disabled={disabled}
      readOnly={readOnly}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      onChange={onChange}
      {...dataAttributes}
    />
  )
})
