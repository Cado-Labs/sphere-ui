import React, { useRef } from "react"
import { MultiSelect as Select } from "primereact/multiselect"
import { locale } from "primereact/api"

import { LOCALES_BUTTONS_SET } from "./constants"

export const MultiSelect = React.forwardRef(({
  options,
  value,
  onChange,
  filter,
  className,
  placeholder,
  optionDisabled,
  optionLabel,
  optionValue,
  inputId,
  dropdownIcon,
  maxSelectedLabels,
  panelClassName,
  panelStyle,
  style,
  selectedItemsLabel,
  name = null,
  id = null,
  disabled = false,
  showClear = false,
}, ref) => {
  const multiselectRef = useRef(ref)

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

  const renderHeader = () => {
    return filter ? null : <React.Fragment />
  }

  const renderFooter = () => {
    const translations = LOCALES_BUTTONS_SET[locale().locale]

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
      value={value}
      onChange={onChange}
      filter={filter}
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
    />
  )
})
