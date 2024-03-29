import React from "react"
import { Checkbox as PrimeCheckbox } from "primereact/checkbox"

import { filterTooltipOptions, pickDataAttributes } from "../../utils"

export const Checkbox = React.forwardRef(({
  id,
  inputRef,
  inputId,
  value,
  name,
  checked = false,
  style,
  className,
  disabled = false,
  required = false,
  readOnly = false,
  tabIndex,
  tooltip,
  tooltipOptions,
  onChange,
  trueValue = true,
  falseValue = false,
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const dataAttributes = pickDataAttributes(props)

  return (
    <PrimeCheckbox
      ref={ref}
      id={id}
      inputRef={inputRef}
      inputId={inputId}
      value={value}
      name={name}
      checked={checked}
      style={style}
      className={className}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      tabIndex={tabIndex}
      tooltip={tooltip}
      trueValue={trueValue}
      falseValue={falseValue}
      tooltipOptions={filteredTooltipOptions}
      onChange={onChange}
      {...dataAttributes}
    />
  )
})
