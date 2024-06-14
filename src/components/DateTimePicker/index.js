import React, { useMemo, useState } from "react"
import { Calendar } from "primereact/calendar"
import { locale as primeLocale } from "primereact/api"

import { getYearRange, filterTooltipOptions, pickDataAttributes } from "../../utils"


import { withRange } from "../Util/withRange"
import { MONTHS, START_DATE } from "../Util/constants"

export const DateTimePicker = React.forwardRef(({
  id,
  name,
  mode = "default",
  value,
  onChange,
  yearRange,
  showSeconds = true,
  showMillisec = false,
  showUTC = false,
  disabled = false,
  stepHour = 1,
  stepSecond = 1,
  stepMinute = 1,
  placeholder = "",
  showIcon = false,
  mask = null,
  startCalendarDate = START_DATE,
  minDate = null,
  maxDate = null,
  className = "",
  style,
  inputClassName,
  inputStyle,
  panelClassName,
  panelStyle,
  showTime = true,
  dateFormat = "dd.mm.yy",
  monthNavigator = true,
  yearNavigator = true,
  startRangeOfYears = "2010",
  tooltip,
  tooltipOptions,
  required = false,
  inputId,
  readOnlyInput = false,
  tabIndex,
  autoZIndex = true,
  baseZIndex = 50,
  keepInvalid = true,
  formatDateTime,
  parseDateTime,
  onFocus,
  onBlur,
  onInput,
  onSelect,
  onShow,
  onHide,
  onVisibleChange,
  ...props
}, ref) => {
  const defaultViewDate = value?.[0] || new Date()
  const [viewDate, setViewDate] = useState(defaultViewDate)
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const dataAttributes = pickDataAttributes(props)

  const renderFooter = () => {
    console.log(showUTC)
    console.log(value)

    if (!showUTC || !value) return null

    const day = value.getUTCDate()
    const month = value.getUTCMonth() + 1
    const year = value.getUTCFullYear()

    const formattedDay = String(day).padStart(2, "0")
    const formattedMonth = String(month).padStart(2, "0")

    const hours = value.getUTCHours()
    const minutes = value.getUTCMinutes()

    const formattedHours = String(hours).padStart(2, "0")
    const formattedMinutes = String(minutes).padStart(2, "0")

    const date = `${formattedDay}.${formattedMonth}.${year}`
    const baseTime = `${formattedHours}:${formattedMinutes}`
    let formattedUTCDate = `${date} ${baseTime}`

    if (showSeconds) {
      const seconds = value.getUTCSeconds()
      const formattedSeconds = String(seconds).padStart(2, "0")
      formattedUTCDate += `:${formattedSeconds}`

      if (showMillisec) {
        const milliseconds = value.getUTCMilliseconds()
        const formattedMilliseconds = String(milliseconds).padStart(3, "0")
        formattedUTCDate += `.${formattedMilliseconds}`
      }
    }

    return (
      <div className="text-center">
        <span className="font-bold">UTC: </span>
        <span>{formattedUTCDate}</span>
      </div>
    )
  }

  const getDefaultProps = () => {
    return {
      id,
      name,
      ref,
      value,
      onChange,
      showSeconds,
      showMillisec,
      stepHour,
      stepSecond,
      stepMinute,
      placeholder,
      disabled,
      showIcon,
      viewDate,
      mask,
      minDate,
      maxDate,
      className,
      style,
      inputClassName,
      inputStyle,
      panelClassName,
      panelStyle,
      dateFormat,
      hourFormat: "24",
      showTime,
      monthNavigator,
      yearNavigator,
      yearRange: yearRange || getYearRange({ startCalendarDate, startRangeOfYears }),
      locale: primeLocale().locale,
      footerTemplate: renderFooter,
      tooltip,
      tooltipOptions: filteredTooltipOptions,
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
      case "range": return renderDateTimeRangePicker()
      case "default": return renderDateTimePicker()
      default: throw new Error("Invalid mode")
    }
  }

  const onViewDateTimeChangeCustom = e => {
    setViewDate(e.value)
  }

  const renderDateTimeRangePicker = () => {
    const RangePicker = useMemo(() => withRange(Calendar), [])

    return (
      <RangePicker
        {...getDefaultProps()}
        rangeButtonsBar
        headerTemplate={headerTemplate}
        viewDate={viewDate}
        onViewDateChange={onViewDateTimeChangeCustom}
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

  const renderDateTimePicker = () => {
    return (
      <Calendar {...getDefaultProps()} numberOfMonths={1} />
    )
  }

  return factory()
})
