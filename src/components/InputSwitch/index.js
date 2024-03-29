import React from "react"
import { InputSwitch as PrimeInputSwitch } from "primereact/inputswitch"

import { filterTooltipOptions, pickDataAttributes } from "../../utils"

export const InputSwitch = React.forwardRef(({
  id,
  inputRef,
  style,
  className,
  inputId,
  name,
  checked = false,
  trueValue = true,
  falseValue = false,
  disabled = false,
  tooltip,
  tooltipOptions,
  onChange,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const dataAttributes = pickDataAttributes(props)

  return (
    <PrimeInputSwitch
      ref={ref}
      id={id}
      inputRef={inputRef}
      inputId={inputId}
      checked={checked}
      trueValue={trueValue}
      falseValue={falseValue}
      style={style}
      className={className}
      disabled={disabled}
      name={name}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...dataAttributes}
    />
  )
})
