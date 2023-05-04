import React from "react"
import { SelectButton as PrimeSelectButton } from "primereact/selectbutton"

import { filterTooltipOptions, pickDataAttributes } from "../../utils"

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
  onChange,
  name,
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const dataAttributes = pickDataAttributes(props)

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
      onChange={onChange}
      name={name}
      {...dataAttributes}
    />
  )
})
