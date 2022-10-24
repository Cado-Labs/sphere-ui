import React from "react"
import { RadioButton as PrimeRadioButton } from "primereact/radiobutton"

import { filterTooltipOptions } from "../../utils"

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
  dataTestId,
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)

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
      ariaLabelledBy={ariaLabelledBy}
      onChange={onChange}
      data-testid={dataTestId}
    />
  )
})
