import React from "react"
import { Calendar } from "primereact/calendar"

import { pickDataAttributes } from "../../utils"

export const TimePicker = React.forwardRef(({
  id,
  name,
  value,
  onChange,
  showSeconds = false,
  showMillisec = false,
  disabled = false,
  stepHour = 1,
  stepSecond = 1,
  stepMinute = 1,
  placeholder = "",
  showIcon = false,
  viewDate = null,
  keepInvalid = true,
  formatDateTime,
  parseDateTime,
  className,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
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
      disabled={disabled}
      placeholder={placeholder}
      showIcon={showIcon}
      viewDate={viewDate}
      keepInvalid={keepInvalid}
      hourFormat="24"
      showTime
      timeOnly
      formatDateTime={formatDateTime}
      parseDateTime={parseDateTime}
      className={className}
      {...dataAttributes}
    />
  )
})
