import React, { useMemo, useState } from "react"
import { Calendar } from "primereact/calendar"
import { locale as primeLocale } from "primereact/api"

import { getPartsOfTime, filterTooltipOptions } from "../../utils"

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
  onFocus,
  onBlur,
  onInput,
  onSelect,
  onShow,
  onHide,
  onVisibleChange,
  dataCy,
  dataTestId,
}, ref) => {
  const defaultViewDate = value?.[0] || new Date()
  const [viewDate, setViewDate] = useState(defaultViewDate)

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
      minDate,
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
      onFocus,
      onBlur,
      onInput,
      onSelect,
      onShow,
      onHide,
      onVisibleChange,
      "data-cy": dataCy,
      "data-testid": dataTestId,
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

  const getYearRange = () => {
    const { year } = getPartsOfTime()
    const startYear = startCalendarDate ? startCalendarDate.getFullYear() : startRangeOfYears

    return yearRange || `${startYear}:${year}`
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
        startCalendarDate={startCalendarDate}
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
      <Calendar {...getDefaultProps()} numberOfMonths={1} />
    )
  }

  return factory()
})
