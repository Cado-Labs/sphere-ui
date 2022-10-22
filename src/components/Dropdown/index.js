import React from "react"
import { Dropdown as PrimeDropdown } from "primereact/dropdown"
import { locale } from "primereact/api"
import { classNames as cn } from "primereact/utils"

import { filterTooltipOptions } from "../../utils"

const EMPTY_MESSAGE = {
  ru: "Ничего не найдено",
  en: "Nothing found",
}

export const Dropdown = React.forwardRef(({
  id,
  name,
  value,
  options,
  optionLabel,
  optionValue,
  optionDisabled,
  optionGroupLabel,
  optionGroupChildren,
  style,
  className,
  filter,
  filterBy,
  placeholder,
  required,
  disabled,
  panelClassName,
  panelStyle,
  inputId,
  showClear,
  ariaLabel,
  ariaLabelledBy,
  autoFocus,
  tooltip,
  tooltipOptions,
  onChange,
  onFocus,
  onBlur,
  onShow,
  onHide,
  dataTestId,
}, ref) => {
  const emptyMessage = EMPTY_MESSAGE[locale().locale]
  const dropdownClassName = cn(className, "w-full")
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)

  return (
    <PrimeDropdown
      ref={ref}
      id={id}
      name={name}
      value={value}
      options={options}
      optionLabel={optionLabel}
      optionValue={optionValue}
      optionDisabled={optionDisabled}
      optionGroupLabel={optionGroupLabel}
      optionGroupChildren={optionGroupChildren}
      style={style}
      className={dropdownClassName}
      filter={filter}
      filterBy={filterBy}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      panelClassName={panelClassName}
      panelStyle={panelStyle}
      inputId={inputId}
      showClear={showClear}
      ariaLabelledBy={ariaLabelledBy}
      ariaLabel={ariaLabel}
      emptyMessage={emptyMessage}
      emptyFilterMessage={emptyMessage}
      autoFocus={autoFocus}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      showFilterClear
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onShow={onShow}
      onHide={onHide}
      dataTestId={dataTestId}
    />
  )
})
