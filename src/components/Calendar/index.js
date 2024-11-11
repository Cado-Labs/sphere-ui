import React, { useRef, useImperativeHandle } from "react"
import { Calendar as PrimeCalendar } from "primereact/calendar"

export const Calendar = React.forwardRef((props, ref) => {
  const calendarRef = useRef(null)

  useImperativeHandle(ref, () => calendarRef?.current)

  const handleFocus = () => {
    if (props.onFocus) {
      props.onFocus()
    }

    setTimeout(() => {
      if (calendarRef?.current) {
        calendarRef.current.focus()
      }
    }, 0)
  }

  return (
    <PrimeCalendar
      {...props}
      ref={calendarRef}
      onFocus={handleFocus}
    />
  )
})
