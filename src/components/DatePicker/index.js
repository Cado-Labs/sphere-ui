import React, { useMemo } from "react"
import { Calendar } from "primereact/calendar"
import { locale as primeLocale } from "primereact/api"

import { getPartsOfTime } from "../../utils"

import { withRange } from "./withRange"

export const DatePicker = React.forwardRef(({
  id,
  value,
  onChange,
  yearRange,
  name = "",
  placeholder = "",
  locale = primeLocale().locale,
  mode = "default",
  dateFormat = "dd.mm.yy",
  showIcon = true,
  rangeButtonsBar = false,
  disabled = false,
  monthNavigator = true,
  startRangeOfYears = "2010",
}, ref) => {
  const defaultProps = () => {
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
      locale,
      disabled,
      monthNavigator,
      startRangeOfYears,
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
        {...defaultProps()}
        rangeButtonsBar={rangeButtonsBar}
      />
    )
  }

  const renderDatePicker = () => {
    return (
      <Calendar {...defaultProps()} />
    )
  }

  return factory()
})
