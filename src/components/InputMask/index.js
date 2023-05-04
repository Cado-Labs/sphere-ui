import React from "react"
import { InputMask as PrimeInputMask } from "primereact/inputmask"

import { filterTooltipOptions, pickDataAttributes } from "../../utils"

export const InputMask = React.forwardRef(({
  id,
  value,
  type = "text",
  mask,
  slotChar = "_",
  autoClear = false,
  unmask = true,
  style,
  className,
  placeholder,
  size,
  maxLength,
  tabIndex,
  disabled = false,
  readOnly = false,
  name,
  required = false,
  validateOnly = false,
  tooltip,
  tooltipOptions,
  onComplete,
  onChange,
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const dataAttributes = pickDataAttributes(props)

  return (
    <PrimeInputMask
      ref={ref}
      id={id}
      value={value}
      type={type}
      mask={mask}
      slotChar={slotChar}
      autoClear={autoClear}
      unmask={unmask}
      style={style}
      className={className}
      placeholder={placeholder}
      size={size}
      maxLength={maxLength}
      tabIndex={tabIndex}
      disabled={disabled}
      readOnly={readOnly}
      name={name}
      required={required}
      validateOnly={validateOnly}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      onComplete={onComplete}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...dataAttributes}
    />
  )
})
