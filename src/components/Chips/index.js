import React from "react"
import { Chips as PrimeChips } from "primereact/chips"
import { classNames as cn } from "primereact/utils"

import { filterTooltipOptions } from "../../utils"

const SEPARATOR = ","

export const Chips = React.forwardRef(({
  id,
  name,
  placeholder,
  value,
  max,
  disabled,
  readOnly,
  removable,
  style,
  className,
  tooltip,
  tooltipOptions,
  ariaLabelledBy,
  allowDuplicate,
  scrollable,
  onAdd,
  onRemove,
  onChange,
  onFocus,
  onBlur,
  dataTestId,
}, ref) => {
  const chipsClassName = cn(className, { "p-chips_scrollable": scrollable })
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)

  return (
    <PrimeChips
      ref={ref}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      max={max}
      disabled={disabled}
      readOnly={readOnly}
      removable={removable}
      style={style}
      className={chipsClassName}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      ariaLabelledBy={ariaLabelledBy}
      separator={SEPARATOR}
      allowDuplicate={allowDuplicate}
      onAdd={onAdd}
      onRemove={onRemove}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      data-testid={dataTestId}
    />
  )
})
