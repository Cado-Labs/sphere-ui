import React from "react"
import { SelectButton as PrimeSelectButton } from "primereact/selectbutton"

import { filterTooltipOptions } from "../../utils"

export const SelectButton = React.forwardRef(({
  id,
  value,
  options,
  optionDisabled,
  tabIndex,
  multiple = false,
  unselectable = true,
  disabled = false,
  itemTemplate,
  style,
  className,
  tooltip,
  tooltipOptions,
  ariaLabelledBy,
  onChange,
  name,
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
      itemTemplate={itemTemplate}
      style={style}
      className={className}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      ariaLabelledBy={ariaLabelledBy}
      onChange={onChange}
      name={name}
    />
  )
})
