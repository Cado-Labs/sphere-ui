import React from "react"
import { Calendar } from "primereact/calendar"

import { getPartsOfTime, filterTooltipOptions } from "../../utils"

export const DateTimePicker = React.forwardRef(({
  id,
  name,
  value,
  onChange,
  yearRange,
  showSeconds = true,
  showMillisec = false,
  disabled = false,
  stepHour = 1,
  stepSecond = 1,
  stepMinute = 1,
  placeholder = "",
  showIcon = false,
  viewDate = null,
  mask = null,
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

    return yearRange || `${startRangeOfYears}:${year}`
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
