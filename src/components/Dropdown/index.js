import React, { useRef } from "react"
import { Dropdown as PrimeDropdown } from "primereact/dropdown"
import { locale } from "primereact/api"
import { classNames as cn } from "primereact/utils"

import { filterTooltipOptions, shouldFilterSelectOptions, pickDataAttributes } from "../../utils"

const EMPTY_MESSAGE = {
  ru: "Ничего не найдено",
  en: "Nothing found",
}

// Collection to track opened dropdowns
const collections = (() => {
  const dropdowns = []

  return {
    set: ref => dropdowns.push(ref),
    hide: ref => dropdowns.forEach(dropdown => {
      if (ref.getInput() !== dropdown.getInput()) {
        dropdown.hide()
      }
    }),
    remove: ref => dropdowns.filter(dropdown => dropdown.getInput() !== ref.getInput()),
  }
})()

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
  itemTemplate,
  valueTemplate,
  style,
  className,
  filter,
  filterBy = "label",
  placeholder,
  required = false,
  disabled = false,
  panelClassName,
  panelStyle,
  inputId,
  showClear = false,
  ariaLabel,
  ariaLabelledBy,
  autoFocus = false,
  tooltip,
  tooltipOptions,
  onChange,
  onFocus,
  onBlur,
  onMouseDown,
  onContextMenu,
  onShow,
  onHide,
  onFilter,
  ...props
}, ref) => {
  const localRef = useRef(null)
  const dropdownRef = ref || localRef

  const emptyMessage = EMPTY_MESSAGE[locale().locale]
  const dropdownClassName = cn(className, "w-full")
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const hasFilter = filter ?? shouldFilterSelectOptions(options)
  const dataAttributes = pickDataAttributes(props)

  const handleShow = event => {
    collections.hide(dropdownRef?.current)
    collections.set(dropdownRef?.current)

    onShow?.(event)

    if (hasFilter) {
      const searchInput = dropdownRef?.current?.getOverlay()?.querySelector(".p-dropdown-filter")
      searchInput?.focus()
    }
  }

  const handleHide = () => {
    collections.remove(dropdownRef?.current)
    onHide?.()
  }

  return (
    <PrimeDropdown
      ref={dropdownRef}
      id={id}
      name={name}
      value={value}
      options={options}
      optionLabel={optionLabel}
      optionValue={optionValue}
      optionDisabled={optionDisabled}
      optionGroupLabel={optionGroupLabel}
      optionGroupChildren={optionGroupChildren}
      itemTemplate={itemTemplate}
      valueTemplate={valueTemplate}
      style={style}
      className={dropdownClassName}
      filter={hasFilter}
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
      onMouseDown={onMouseDown}
      onContextMenu={onContextMenu}
      onShow={handleShow}
      onHide={handleHide}
      onFilter={onFilter}
      {...dataAttributes}
    />
  )
})
