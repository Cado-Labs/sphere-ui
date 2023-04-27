import React from "react"
import { TriStateCheckbox as PrimeTriStateCheckbox } from "primereact/tristatecheckbox"

import { filterTooltipOptions } from "../../utils"

export const TriStateCheckbox = React.forwardRef(({
  id,
  inputRef,
  inputId,
  value,
  name,
  style,
  className,
  disabled = false,
  readOnly = false,
  tooltip,
  tooltipOptions,
  ariaLabelledBy,
  onChange,
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)

  return (
    <PrimeTriStateCheckbox
      ref={ref}
      id={id}
      inputRef={inputRef}
      inputId={inputId}
      value={value}
      name={name}
      style={style}
      className={className}
      disabled={disabled}
      readOnly={readOnly}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      ariaLabelledBy={ariaLabelledBy}
      onChange={onChange}
    />
  )
})
