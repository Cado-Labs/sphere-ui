import React from "react"
import { Checkbox as PrimeCheckbox } from "primereact/checkbox"

export const Checkbox = React.forwardRef(({
  id,
  inputId,
  value,
  name,
  checked,
  style,
  className,
  disabled,
  required,
  readOnly,
  tabIndex,
  tooltip,
  tooltipOptions,
  ariaLabelledBy,
  onChange,
}, ref) => {
  return (
    <PrimeCheckbox
      ref={ref}
      id={id}
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
      tooltipOptions={tooltipOptions}
      ariaLabelledBy={ariaLabelledBy}
      onChange={onChange}
    />
  )
})
