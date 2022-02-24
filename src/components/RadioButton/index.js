import React from "react"
import { RadioButton as PrimeRadioButton } from "primereact/radiobutton"

export const RadioButton = React.forwardRef(({
  id,
  inputId,
  name,
  value,
  checked,
  style,
  className,
  disabled,
  required,
  tabIndex,
  tooltip,
  tooltipOptions,
  ariaLabelledBy,
  onChange,
}, ref) => {
  return (
    <PrimeRadioButton
      ref={ref}
      id={id}
      inputId={inputId}
      name={name}
      value={value}
      checked={checked}
      style={style}
      className={className}
      disabled={disabled}
      required={required}
      tabIndex={tabIndex}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      ariaLabelledBy={ariaLabelledBy}
      onChange={onChange}
    />
  )
})
