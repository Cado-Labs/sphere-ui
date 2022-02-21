import React from "react"
import { Chips as PrimeChips } from "primereact/chips"
import { classNames as cn } from "primereact/utils"

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
}, ref) => {
  const chipsClassName = cn(className, { "p-chips_scrollable": scrollable })

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
      tooltipOptions={tooltipOptions}
      ariaLabelledBy={ariaLabelledBy}
      separator={SEPARATOR}
      allowDuplicate={allowDuplicate}
      onAdd={onAdd}
      onRemove={onRemove}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
})
