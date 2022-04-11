import React, { useMemo } from "react"
import { Calendar } from "primereact/calendar"
import { locale as primeLocale } from "primereact/api"

import { getPartsOfTime, filterTooltipOptions } from "../../utils"

import { withRange } from "./withRange"

export const DatePicker = React.forwardRef(({
  id,
  value,
  onChange,
  yearRange,
  name = "",
  placeholder = "",
  mode = "default",
  dateFormat = "dd.mm.yy",
  showIcon = true,
  rangeButtonsBar = false,
  disabled = false,
  monthNavigator = true,
  yearNavigator = true,
  startRangeOfYears = "2010",
  className = "",
  style,
  inputClassName,
  inputStyle,
  panelClassName,
  panelStyle,
  mask = null,
  numberOfMonths = 1,
  tooltip,
  tooltipOptions,
  required = false,
  inputId,
  readOnlyInput = false,
  tabIndex,
  autoZIndex = true,
  baseZIndex = 50,
  onFocus,
  onBlur,
  onInput,
  onSelect,
  onShow,
  onHide,
  onVisibleChange,
}, ref) => {
  const getDefaultProps = () => {
    return {
      id,
      ref,
      name,
      value,
      showIcon,
      onChange,
      dateFormat,
      placeholder,
      yearRange: getYearRange(),
      locale: primeLocale().locale,
      disabled,
      monthNavigator,
      yearNavigator,
      startRangeOfYears,
      className,
      style,
      inputClassName,
      inputStyle,
      panelClassName,
      panelStyle,
      mask,
      numberOfMonths,
      tooltip,
      tooltipOptions: filterTooltipOptions(tooltipOptions),
      required,
      inputId,
      readOnlyInput,
      tabIndex,
      autoZIndex,
      baseZIndex,
      onFocus,
      onBlur,
      onInput,
      onSelect,
      onShow,
      onHide,
      onVisibleChange,
    }
  }

  const factory = () => {
    switch (mode) {
      case "range": return renderDateRangePicker()
      case "default": return renderDatePicker()
      default: throw new Error("Invalid mode")
    }
  }

  const getYearRange = () => {
    const { year } = getPartsOfTime()

    return yearRange || `${startRangeOfYears}:${year}`
  }

  const renderDateRangePicker = () => {
    const RangePicker = useMemo(() => withRange(Calendar), [])

    return (
      <RangePicker
        {...getDefaultProps()}
        rangeButtonsBar={rangeButtonsBar}
      />
    )
  }

  const renderDatePicker = () => {
    return (
      <Calendar {...getDefaultProps()} />
    )
  }

  return factory()
})
