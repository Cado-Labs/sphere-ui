import React from "react"
import { InputNumber as PrimeInputNumber } from "primereact/inputnumber"

import { filterTooltipOptions, pickDataAttributes } from "../../utils"

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
  min = -Infinity,
  max,
  disabled = false,
  required = false,
  tabIndex,
  pattern,
  inputMode,
  placeholder,
  mode = "decimal",
  currency,
  currencyDisplay,
  maxLength,
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
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const dataAttributes = pickDataAttributes(props)

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
      mode={mode}
      currency={currency}
      currencyDisplay={currencyDisplay}
      maxLength={maxLength}
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
      {...dataAttributes}
    />
  )
})
