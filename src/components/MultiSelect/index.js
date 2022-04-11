import React, { useRef } from "react"
import { MultiSelect as Select } from "primereact/multiselect"
import { locale } from "primereact/api"

import { filterTooltipOptions } from "../../utils"

import { LOCALES_BUTTONS_SET } from "./constants"

export const MultiSelect = React.forwardRef(({
  options,
  value,
  onChange,
  filter,
  filterBy,
  className,
  placeholder,
  optionLabel,
  optionValue,
  optionGroupLabel,
  optionGroupChildren,
  inputId,
  dropdownIcon,
  maxSelectedLabels,
  panelClassName,
  panelStyle,
  style,
  selectedItemsLabel,
  display,
  tooltip,
  tooltipOptions,
  dataKey,
  optionDisabled = null,
  name = null,
  id = null,
  disabled = false,
  showClear = false,
}, ref) => {
  const multiselectRef = useRef(ref)
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)

  const getRef = () => {
    return ref || multiselectRef
  }

  const handleSelectAll = event => {
    return getRef()?.current?.onSelectAll(event)
  }

  const handleClearAll = () => {
    const newValue = { target: { name, value: [], id } }

    onChange(newValue)
  }

  const isOptionDisabled = () => {
    if (!optionDisabled) return false

    const isFunction = optionDisabled instanceof Function

    return isFunction ? optionDisabled() : optionDisabled
  }

  const removeIcon = () => {
    return isOptionDisabled() ? false : "pi pi-times-circle"
  }

  const renderHeader = () => {
    return filter ? null : <React.Fragment />
  }

  const renderFooter = () => {
    const translations = LOCALES_BUTTONS_SET[locale().locale]

    if (isOptionDisabled()) {
      return null
    }

    return (
      <div className="p-buttonset flex flex-row justify-content-center">
        <button className="p-button" onClick={handleSelectAll}>
          {translations.selectAll}
        </button>
        <button className="p-button" onClick={handleClearAll}>
          {translations.clearAll}
        </button>
      </div>
    )
  }

  return (
    <Select
      ref={getRef()}
      options={options}
      optionDisabled={optionDisabled}
      optionLabel={optionLabel}
      optionValue={optionValue}
      optionGroupLabel={optionGroupLabel}
      optionGroupChildren={optionGroupChildren}
      value={value}
      onChange={onChange}
      filter={filter}
      filterBy={filterBy}
      selectAll={false}
      showSelectAll={false}
      panelHeaderTemplate={renderHeader()}
      panelFooterTemplate={renderFooter()}
      className={className}
      placeholder={placeholder}
      inputId={inputId}
      dropdownIcon={dropdownIcon}
      maxSelectedLabels={maxSelectedLabels}
      panelClassName={panelClassName}
      panelStyle={panelStyle}
      style={style}
      name={name}
      id={id}
      disabled={disabled}
      selectedItemsLabel={selectedItemsLabel}
      showClear={showClear}
      display={display}
      removeIcon={removeIcon()}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      dataKey={dataKey}
    />
  )
})
