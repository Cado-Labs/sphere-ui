import React from "react"
import { Calendar } from "primereact/calendar"

import { getPartsOfTime, filterTooltipOptions } from "../../utils"

import { START_DATE } from "../DatePicker/constants"

export const DateTimePicker = React.forwardRef(({
  id,
  name,
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
  viewDate = null,
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
  onFocus,
  onBlur,
  onInput,
  onSelect,
  onShow,
  onHide,
  onVisibleChange,
}, ref) => {
  const getYearRange = () => {
    const { year } = getPartsOfTime()
    const startYear = startCalendarDate ? startCalendarDate.getFullYear() : startRangeOfYears

    return yearRange || `${startYear}:${year}`
  }

  const renderFooter = () => {
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

  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)

  return (
    <Calendar
      id={id}
      name={name}
      ref={ref}
      value={value}
      onChange={onChange}
      showSeconds={showSeconds}
      showMillisec={showMillisec}
      stepHour={stepHour}
      stepSecond={stepSecond}
      stepMinute={stepMinute}
      placeholder={placeholder}
      disabled={disabled}
      showIcon={showIcon}
      viewDate={viewDate}
      mask={mask}
      minDate={minDate}
      maxDate={maxDate}
      className={className}
      style={style}
      inputClassName={inputClassName}
      inputStyle={inputStyle}
      panelClassName={panelClassName}
      panelStyle={panelStyle}
      dateFormat={dateFormat}
      hourFormat="24"
      showTime
      monthNavigator={monthNavigator}
      yearNavigator={yearNavigator}
      startRangeOfYears={startRangeOfYears}
      yearRange={getYearRange()}
      footerTemplate={renderFooter}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      required={required}
      inputId={inputId}
      readOnlyInput={readOnlyInput}
      tabIndex={tabIndex}
      autoZIndex={autoZIndex}
      baseZIndex={baseZIndex}
      onFocus={onFocus}
      onBlur={onBlur}
      onInput={onInput}
      onSelect={onSelect}
      onShow={onShow}
      onHide={onHide}
      onVisibleChange={onVisibleChange}
    />
  )
})
