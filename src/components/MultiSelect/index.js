import React from "react"
import { MultiSelect as PrimeMultiSelect } from "primereact/multiselect"
import { locale } from "primereact/api"

import { filterTooltipOptions, shouldFilterSelectOptions, pickDataAttributes } from "../../utils"

import { LOCALES_BUTTONS_SET } from "./constants"

export const MultiSelect = React.forwardRef(({
  options,
  value,
  onChange,
  onFocus,
  onBlur,
  onShow,
  onHide,
  onFilter,
  onSelectAll,
  filter,
  filterBy = "label",
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
  selectedItemsLabel = "{0} items selected",
  display = "comma",
  overlayVisible = false,
  tooltip,
  tooltipOptions,
  dataKey,
  optionDisabled = null,
  readOnly = false,
  name = null,
  id = null,
  disabled = false,
  showClear = false,
  inputRef,
  virtualizationThreshold = 30,
  itemSize = 35,
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const hasFilter = filter ?? shouldFilterSelectOptions(options)
  const dataAttributes = pickDataAttributes(props)

  const onFooterButtonClick = newValue => {
    const newEvent = {
      target: { name, value: newValue, id },
      value: newValue,
    }

    onChange(newEvent)
  }

  const handleSelectAll = () => {
    const prepareOptions = options => options.map(option => {
      if (optionValue) {
        return option[optionValue]
      } else if (option.hasOwnProperty("value")) {
        return option.value
      } else if (optionGroupChildren && option[optionGroupChildren]) {
        return prepareOptions(option[optionGroupChildren])
      } else {
        return option
      }
    }).flat()

    const newValue = prepareOptions(options)
    onFooterButtonClick(newValue)
  }

  const handleClearAll = () => {
    const newValue = []
    onFooterButtonClick(newValue)
  }

  const isOptionDisabled = () => {
    const isFunction = optionDisabled instanceof Function
    const isDisabled = isFunction ? optionDisabled() : !!optionDisabled

    return isDisabled || readOnly
  }

  const optionDisabledWithReadOnly = () => {
    return readOnly ? () => false : optionDisabled
  }

  const removeIcon = () => {
    return isOptionDisabled() ? false : "pi pi-times-circle"
  }

  const renderHeader = () => {
    return hasFilter ? null : <React.Fragment />
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

  const virtualScrollProps = () => {
    const hasMoreOptions = options && options.length > virtualizationThreshold
    const isGroupDisplay = optionGroupLabel && optionGroupChildren

    if (!hasMoreOptions || isGroupDisplay) return {}

    return { virtualScrollerOptions: { itemSize } }
  }

  const selectedItemTemplateProp = () => {
    const isTemplateUsed = display === "chip" && isOptionDisabled()

    const templateFunction = option => {
      if (!option) return null
      return <div className="p-multiselect-token">{option}</div>
    }

    return { selectedItemTemplate: isTemplateUsed ? templateFunction : null }
  }

  return (
    <PrimeMultiSelect
      ref={ref}
      inputRef={inputRef}
      options={options}
      optionDisabled={optionDisabledWithReadOnly}
      optionLabel={optionLabel}
      optionValue={optionValue}
      optionGroupLabel={optionGroupLabel}
      optionGroupChildren={optionGroupChildren}
      value={value}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onShow={onShow}
      onHide={onHide}
      onFilter={onFilter}
      onSelectAll={onSelectAll}
      filter={hasFilter}
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
      overlayVisible={overlayVisible}
      removeIcon={removeIcon()}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      dataKey={dataKey}
      {...dataAttributes}
      {...selectedItemTemplateProp()}
      {...props}
      {...virtualScrollProps()}
    />
  )
})
