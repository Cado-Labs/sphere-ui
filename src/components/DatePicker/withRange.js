import React from "react"
import { classNames as cn } from "primereact/utils"

import { getPartsOfTime } from "../../utils"
import { Button } from "../Button"

import { LOCALES_RANGE_BLOCKS } from "./constants"

export const withRange = Component =>
  class extends React.Component {
    constructor (props) {
      super(props)
      this.refCalendar = React.createRef()
    }

    clear = () => {
      this.onChange(null)
    }

    setToday = () => {
      const newDate = [
        new Date(),
        new Date(),
      ]

      this.onChange(newDate)
    }

    setYesterday = () => {
      const { day, month, year } = getPartsOfTime()
      const yesterday = new Date(year, month, day - 1)
      const newDate = [yesterday, yesterday]

      this.onChange(newDate)
    }

    setCurrentMonth = () => {
      const { month, year } = getPartsOfTime()
      const lastDayInMonth = new Date(year, month + 1, 0).getDate()

      const newDate = [
        new Date(year, month, 1),
        new Date(year, month, lastDayInMonth),
      ]

      this.onChange(newDate)
    }

    setLastMonth = () => {
      const { month, year } = getPartsOfTime()
      const prevMonth = month - 1
      const lastDayInPrevMonth = new Date(year, month, 0).getDate()

      const newDate = [
        new Date(year, prevMonth, 1),
        new Date(year, prevMonth, lastDayInPrevMonth),
      ]
      this.onChange(newDate)
    }

    setAllTime = () => {
      const { month, day, year } = getPartsOfTime()
      const newDate = [this.props.startDate, new Date(year, month, day)]

      this.onChange(newDate)
    }

    setWeek = () => {
      this.setLastDays(7)
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

      const date = [startDate, new Date(year, month, day)]
      this.onChange(date)
    }

    onChange = value => {
      this.refCalendar.current.onButtonClick()
      this.props.onChange({
        target: {
          name: this.props.name || null,
          id: this.props.id || null,
          value,
        },
      })
    }

    renderFooter = () => {
      if (!this.props.rangeButtonsBar) return null

      const translations = LOCALES_RANGE_BLOCKS[this.props.locale]
      const blocks = [
        { title: translations.today, method: this.setToday },
        { title: translations.yesterday, method: this.setYesterday },
        { title: translations.week, method: this.setWeek },
        { title: translations.last30days, method: this.setLast30Days },
        { title: translations.thisMonth, method: this.setCurrentMonth },
        { title: translations.lastMonth, method: this.setLastMonth },
        { title: translations.last180days, method: this.setLast180Days },
        { title: translations.allTime, method: this.setAllTime },
      ]

      return (
        <div className="flex flex-column p-datepicker-range-buttons">
          {blocks.map((block, index) => (
            <Button
              key={index}
              className="p-button-text p-button-plain"
              label={block.title}
              size="small"
              onClick={block.method}
            />
          ))}
          <Button label={translations.clear} size="small" onClick={this.clear} />
        </div>
      )
    }

    render () {
      const panelClassName = cn(this.props.panelClassName, {
        "p-datepicker_buttons-bar": this.props.rangeButtonsBar,
      })

      return (
        <Component
          {...this.props}
          panelClassName={panelClassName}
          selectionMode="range"
          ref={this.refCalendar}
          footerTemplate={this.renderFooter}
        />
      )
    }
  }
