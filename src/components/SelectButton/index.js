import React from "react"
import { SelectButton as PrimeSelectButton } from "primereact/selectbutton"

export const SelectButton = React.forwardRef(({
  id,
  value,
  options,
  optionDisabled,
  tabIndex,
  multiple,
  unselectable,
  disabled,
  style,
  className,
  tooltip,
  tooltipOptions,
  ariaLabelledBy,
  onChange,
}, ref) => {
  return (
    <PrimeSelectButton
      ref={ref}
      id={id}
      value={value}
      options={options}
      optionDisabled={optionDisabled}
      tabIndex={tabIndex}
      multiple={multiple}
      unselectable={unselectable}
      disabled={disabled}
      style={style}
      className={className}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      ariaLabelledBy={ariaLabelledBy}
      onChange={onChange}
    />
  )
})
