import React from "react"
import { InputMask as PrimeInputMask } from "primereact/inputmask"

import { filterTooltipOptions } from "../../utils"

export const InputMask = React.forwardRef(({
  id,
  inputRef,
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
  tooltip,
  tooltipOptions,
  ariaLabelledBy,
  onComplete,
  onChange,
  onFocus,
  onBlur,
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  return (
    <PrimeInputMask
      ref={ref}
      id={id}
      inputRef={inputRef}
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
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      ariaLabelledBy={ariaLabelledBy}
      onComplete={onComplete}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
})
