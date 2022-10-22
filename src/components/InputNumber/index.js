import React from "react"
import { InputNumber as PrimeInputNumber } from "primereact/inputnumber"

import { filterTooltipOptions } from "../../utils"

export const InputNumber = React.forwardRef(({
  value,
  inputRef,
  format = true,
  showButtons = false,
  locale,
  suffix,
  prefix,
  useGrouping = true,
  minFractionDigits,
  maxFractionDigits,
  id,
  name,
  type = "text",
  allowEmpty = true,
  step = 1,
  min,
  max,
  disabled = false,
  required = false,
  tabIndex,
  pattern,
  inputMode,
  placeholder,
  readOnly = false,
  size,
  style,
  className,
  inputId,
  autoFocus = false,
  inputStyle,
  inputClassName,
  tooltip,
  tooltipOptions,
  ariaLabelledBy,
  onValueChange,
  onChange,
  onBlur,
  onFocus,
  onKeyDown,
  dataTestId,
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  return (
    <PrimeInputNumber
      ref={ref}
      value={value}
      inputRef={inputRef}
      format={format}
      showButtons={showButtons}
      locale={locale}
      suffix={suffix}
      prefix={prefix}
      useGrouping={useGrouping}
      minFractionDigits={minFractionDigits}
      maxFractionDigits={maxFractionDigits}
      id={id}
      name={name}
      type={type}
      allowEmpty={allowEmpty}
      step={step}
      min={min}
      max={max}
      disabled={disabled}
      required={required}
      tabIndex={tabIndex}
      pattern={pattern}
      inputMode={inputMode}
      placeholder={placeholder}
      readOnly={readOnly}
      size={size}
      style={style}
      className={className}
      inputId={inputId}
      autoFocus={autoFocus}
      inputStyle={inputStyle}
      inputClassName={inputClassName}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      ariaLabelledBy={ariaLabelledBy}
      onValueChange={onValueChange}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      dataTestId={dataTestId}
    />
  )
})
