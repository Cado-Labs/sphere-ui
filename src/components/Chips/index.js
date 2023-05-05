import React from "react"
import { Chips as PrimeChips } from "primereact/chips"
import { classNames as cn } from "primereact/utils"

import { filterTooltipOptions, pickDataAttributes } from "../../utils"

const SEPARATOR = ","

export const Chips = React.forwardRef(({
  id,
  name,
  placeholder,
  value,
  max,
  disabled = false,
  readOnly = false,
  removable = true,
  style,
  className,
  tooltip,
  tooltipOptions,
  ariaLabelledBy,
  allowDuplicate = true,
  scrollable,
  addOnBlur = false,
  onAdd,
  onRemove,
  onChange,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const chipsClassName = cn(className, { "p-chips_scrollable": scrollable })
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const dataAttributes = pickDataAttributes(props)

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
      addOnBlur={addOnBlur}
      onAdd={onAdd}
      onRemove={onRemove}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...dataAttributes}
    />
  )
})
