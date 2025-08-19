import React from "react"
import { classNames as cn } from "primereact/utils"

import { getPartsOfTime, pickDataAttributes } from "../../utils"
import { Button } from "../Button"

import { LOCALES_RANGE_BLOCKS } from "./constants"

const createEndOfDayDate = (...args) => {
  const date = new Date(...args)
  date.setHours(23, 59, 59, 999)

  return date
}

const getWeekRange = (offset = 0) => {
  const now = new Date()

  const dayOfWeek = now.getDay()
  const diffToMonday = (dayOfWeek === 0 ? -6 : 1 - dayOfWeek)

  const monday = new Date(now)
  monday.setDate(now.getDate() + diffToMonday + offset * 7)
  monday.setHours(0, 0, 0, 0)

  const sunday = new Date(monday)
  sunday.setDate(monday.getDate() + 6)
  sunday.setHours(23, 59, 59, 999)

  return [monday, sunday]
}

export const withRange = Component => {
  const WrappedComponent = class extends React.Component {
    constructor (props) {
      super(props)
      this.refCalendar = props.forwardedRef || React.createRef()
    }

    clear = () => {
      this.onChange(null)
    }

    setToday = () => {
      const { day, month, year } = getPartsOfTime()
      const startDate = new Date(year, month, day)
      const endDate = createEndOfDayDate(year, month, day)

      const newDate = [
        startDate,
        endDate,
      ]

      this.onChange(newDate)
    }

    setLast24Hours = () => {
      const startDate = new Date()

      startDate.setDate(startDate.getDate() - 1)

      const newDate = [
        startDate,
        new Date(),
      ]

      this.onChange(newDate)
    }

    setYesterday = () => {
      const { day, month, year } = getPartsOfTime()
      const startDate = new Date(year, month, day - 1)
      const endDate = createEndOfDayDate(year, month, day - 1)

      const newDate = [
        startDate,
        endDate,
      ]

      this.onChange(newDate)
    }

    setCurrentMonth = () => {
      const { month, year } = getPartsOfTime()
      const lastDayInMonth = new Date(year, month + 1, 0).getDate()

      const newDate = [
        new Date(year, month, 1),
        createEndOfDayDate(year, month, lastDayInMonth),
      ]

      this.onChange(newDate)
    }

    setLastMonth = () => {
      const { month, year } = getPartsOfTime()
      const prevMonth = month - 1
      const lastDayInPrevMonth = new Date(year, month, 0).getDate()

      const newDate = [
        new Date(year, prevMonth, 1),
        createEndOfDayDate(year, prevMonth, lastDayInPrevMonth),
      ]

      this.onChange(newDate)
    }

    setAllTime = () => {
      const { month, day, year } = getPartsOfTime()

      const newDate = [
        this.props.startCalendarDate,
        createEndOfDayDate(year, month, day),
      ]

      this.onChange(newDate)
    }

    setWeek = () => {
      this.setLastDays(7)
    }

    setCurrentWeek = () => {
      this.onChange(getWeekRange(0))
    }

    setNextWeek = () => {
      this.onChange(getWeekRange(1))
    }

    setPreviousWeek = () => {
      this.onChange(getWeekRange(-1))
    }

    setLast30Days = () => {
      this.setLastDays(30)
    }

    setLast180Days = () => {
      this.setLastDays(180)
    }

    setLastDays = days => {
      const { month, day, year } = getPartsOfTime()
      const daysDiff = day - (days - 1)
      const startDate = new Date(year, month, daysDiff)
      const endDate = createEndOfDayDate(year, month, day)

      const newDate = [
        startDate,
        endDate,
      ]

      this.onChange(newDate)
    }

    onChange = value => {
      this.props.onChange({
        target: {
          name: this.props.name || null,
          id: this.props.id || null,
          value,
        },
      })
      this.refCalendar.current.hide()
    }

    renderFooter = () => {
      if (!this.props.rangeButtonsBar) return null

      const translations = LOCALES_RANGE_BLOCKS[this.props.locale]

      const defaultPresets = [
        { title: translations.today, method: this.setToday, name: "today" },
        { title: translations.last24Hours, method: this.setLast24Hours, name: "last24hours" },
        { title: translations.yesterday, method: this.setYesterday, name: "yesterday" },
        { title: translations.week, method: this.setWeek, name: "week" },
        { title: translations.last30days, method: this.setLast30Days, name: "last30days" },
        { title: translations.thisMonth, method: this.setCurrentMonth, name: "thisMonth" },
        { title: translations.lastMonth, method: this.setLastMonth, name: "lastMonth" },
        { title: translations.last180days, method: this.setLast180Days, name: "last180days" },
        { title: translations.allTime, method: this.setAllTime, name: "allTime" },
      ]

      const otherPresets = [
        { title: translations.currentWeek, method: this.setCurrentWeek, name: "currentWeek" },
        { title: translations.nextWeek, method: this.setNextWeek, name: "nextWeek" },
        { title: translations.previousWeek, method: this.setPreviousWeek, name: "previousWeek" },
      ]

      const availablePresets = this.props.includeRangeButtons?.length
        ? [...defaultPresets.filter(({ name }) => this.props.includeRangeButtons.includes(name)),
          ...otherPresets.filter(({ name }) => this.props.includeRangeButtons.includes(name))]
        : defaultPresets

      return (
        <div className="flex flex-column justify-content-between p-datepicker-range-buttons h-full">
          <div className="flex flex-column p-datepicker-range-buttons">
            {availablePresets.map((preset, index) => (
              <Button
                key={index}
                className="p-button-text p-button-plain"
                label={preset.title}
                size="small"
                onClick={preset.method}
              />
            ))}
          </div>
          <Button label={translations.clear} size="small" onClick={this.clear} />
        </div>
      )
    }

    render () {
      const panelClassName = cn(this.props.panelClassName, {
        "p-datepicker_buttons-bar": this.props.rangeButtonsBar,
      })
      const dataAttributes = pickDataAttributes(this.props)

      return (
        <Component
          id={this.props.id}
          name={this.props.name}
          value={this.props.value}
          showIcon={this.props.showIcon}
          onChange={this.props.onChange}
          dateFormat={this.props.dateFormat}
          placeholder={this.props.placeholder}
          yearRange={this.props.yearRange}
          locale={this.props.locale}
          disabled={this.props.disabled}
          monthNavigator={this.props.monthNavigator}
          yearNavigator={this.props.yearNavigator}
          minDate={this.props.minDate}
          maxDate={this.props.maxDate}
          className={this.props.className}
          style={this.props.style}
          inputClassName={this.props.inputClassName}
          inputStyle={this.props.inputStyle}
          panelStyle={this.props.panelStyle}
          mask={this.props.mask}
          selectOtherMonths={this.props.selectOtherMonths}
          tooltip={this.props.tooltip}
          tooltipOptions={this.props.tooltipOptions}
          required={this.props.required}
          inputId={this.props.inputId}
          readOnlyInput={this.props.readOnlyInput}
          tabIndex={this.props.tabIndex}
          autoZIndex={this.props.autoZIndex}
          baseZIndex={this.props.baseZIndex}
          onFocus={this.props.onFocus}
          onBlur={this.props.onBlur}
          onInput={this.props.onInput}
          onSelect={this.props.onSelect}
          onShow={this.props.onShow}
          viewDate={this.props.viewDate}
          onHide={this.props.onHide}
          onVisibleChange={this.props.onVisibleChange}
          onViewDateChange={this.props.onViewDateChange}
          headerTemplate={this.props.headerTemplate}
          numberOfMonths={this.props.numberOfMonths}
          panelClassName={panelClassName}
          selectionMode="range"
          ref={this.refCalendar}
          footerTemplate={this.renderFooter}
          {...dataAttributes}
        />
      )
    }
  }

  return React.forwardRef((props, ref) => (
    <WrappedComponent {...props} forwardedRef={ref} />
  ))
}
