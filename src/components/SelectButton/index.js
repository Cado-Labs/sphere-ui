import React from "react"
import { SelectButton as PrimeSelectButton } from "primereact/selectbutton"

import { filterTooltipOptions } from "../../utils"

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
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)

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
      tooltipOptions={filteredTooltipOptions}
      ariaLabelledBy={ariaLabelledBy}
      onChange={onChange}
    />
  )
})
