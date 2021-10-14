import React from "react"
import { Calendar } from "primereact/calendar"

export const DateTimePicker = React.forwardRef(({
  id,
  name,
  value,
  onChange,
  showSeconds = true,
  showMillisec = false,
  disabled = false,
  stepHour = 1,
  stepSecond = 1,
  stepMinute = 1,
  placeholder = "",
  showIcon = false,
}, ref) => {
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
      hourFormat="24"
      showIcon={showIcon}
      showTime
    />
  )
})
