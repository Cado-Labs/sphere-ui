import React from "react"
import { RadioButton as PrimeRadioButton } from "primereact/radiobutton"

import { filterTooltipOptions, pickDataAttributes } from "../../utils"

export const RadioButton = React.forwardRef(({
  id,
  inputId,
  name,
  value,
  checked = false,
  style,
  className,
  disabled = false,
  required = false,
  tabIndex,
  tooltip,
  tooltipOptions,
  onChange,
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const dataAttributes = pickDataAttributes(props)

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
      tooltipOptions={filteredTooltipOptions}
      onChange={onChange}
      {...dataAttributes}
    />
  )
})
