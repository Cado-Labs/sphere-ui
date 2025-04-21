import React, { useMemo, useState } from "react"
import { locale as primeLocale } from "primereact/api"

import { getYearRange, filterTooltipOptions, pickDataAttributes, getTime } from "../../utils"

import { Calendar } from "../Calendar"

import { withRange } from "./withRange"
import { MONTHS, START_DATE } from "./constants"

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
  disabled = false,
  monthNavigator = true,
  yearNavigator = true,
  startRangeOfYears = "2010",
  minDate = null,
  maxDate = null,
  className = "",
  style,
  inputClassName,
  inputStyle,
  panelClassName,
  panelStyle,
  mask = null,
  startCalendarDate = START_DATE,
  tooltip,
  tooltipOptions,
  required = false,
  inputId,
  readOnlyInput = false,
  tabIndex,
  autoZIndex = true,
  baseZIndex = 50,
  keepInvalid = true,
  includeRangeButtons = [],
  formatDateTime,
  parseDateTime,
  onFocus,
  onBlur,
  onInput,
  onSelect,
  onShow,
  onHide,
  onVisibleChange,
  utc,
  ...props
}, ref) => {
  const defaultViewDate = value?.[0] || new Date()
  const [viewDate, setViewDate] = useState(defaultViewDate)
  const dataAttributes = pickDataAttributes(props)
  const startDate = minDate || getTime(startCalendarDate, utc)

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
      yearRange: yearRange || getYearRange({ startCalendarDate, startRangeOfYears }),
      locale: primeLocale().locale,
      disabled,
      monthNavigator,
      yearNavigator,
      minDate: startDate,
      maxDate,
      className,
      style,
      inputClassName,
      inputStyle,
      panelClassName,
      panelStyle,
      mask,
      selectOtherMonths: true,
      tooltip,
      tooltipOptions: filterTooltipOptions(tooltipOptions),
      required,
      inputId,
      readOnlyInput,
      tabIndex,
      autoZIndex,
      baseZIndex,
      keepInvalid,
      formatDateTime,
      parseDateTime,
      onFocus,
      onBlur,
      onInput,
      onSelect,
      onShow,
      onHide,
      onVisibleChange,
      ...dataAttributes,
    }
  }

  const factory = () => {
    switch (mode) {
      case "range": return renderDateRangePicker()
      case "default": return renderDatePicker()
      default: throw new Error("Invalid mode")
    }
  }

  const onViewDateChangeCustom = e => {
    setViewDate(e.value)
  }

  const renderDateRangePicker = () => {
    const RangePicker = useMemo(() => withRange(Calendar), [])

    return (
      <RangePicker
        {...getDefaultProps()}
        rangeButtonsBar
        headerTemplate={headerTemplate}
        viewDate={viewDate}
        onViewDateChange={onViewDateChangeCustom}
        numberOfMonths={2}
        startCalendarDate={startDate}
        includeRangeButtons={includeRangeButtons}
      />
    )
  }

  const headerTemplate = () => {
    const month = viewDate.getMonth()
    const nextMonth = month === 11 ? 0 : month + 1
    const monthName = MONTHS[primeLocale().locale][nextMonth]

    const year = viewDate.getFullYear()
    const displayedYear = month === 11 ? year + 1 : year

    return (
      <div className="p-datepicker-header-custom">
        <span className="p-datepicker-month-name">{monthName}</span>
        <span className="p-datepicker-year-name">{displayedYear}</span>
      </div>
    )
  }

  const renderDatePicker = () => {
    return (
      <Calendar
        {...getDefaultProps()}
        numberOfMonths={1}
      />
    )
  }

  return factory()
})
