import React from "react"

import { getPartsOfTime } from "../../utils"

import { LOCALES_RANGE_BLOCKS, START_DATE } from "./constants"

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

    setCurrentMonth = () => {
      const { month, year } = getPartsOfTime()
      const lastDayInMonth = new Date(year, month + 1, 0).getDate()

      const newDate = [
        new Date(`${month + 1}.01.${year}`),
        new Date(`${month + 1}.${lastDayInMonth}.${year}`),
      ]

      this.onChange(newDate)
    }

    setAllTime = () => {
      const { month, day, year } = getPartsOfTime()
      const newDate = [
        new Date(START_DATE),
        new Date(`${month + 1}.${day}.${year}`),
      ]

      this.onChange(newDate)
    }

    setWeek = () => {
      const { month, day, year } = getPartsOfTime()
      const week = new Date(year, month, day - 7)

      const date = [week, new Date(`${month + 1}.${day}.${year}`)]

      this.onChange(date)
    }

    setLast30Days = () => {
      const { month, day, year } = getPartsOfTime()
      const week = new Date(year, month, day - 30)

      const date = [week, new Date(`${month + 1}.${day}.${year}`)]

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
      const translations = LOCALES_RANGE_BLOCKS[this.props.locale]
      const blocks = [
        { title: translations.today, method: this.setToday },
        { title: translations.week, method: this.setWeek },
        { title: translations.last30days, method: this.setLast30Days },
        { title: translations.thisMonth, method: this.setCurrentMonth },
        { title: translations.allTime, method: this.setAllTime },
        { title: translations.clear, method: this.clear },
      ]

      return this.props.rangeButtonsBar && (
        <div className="flex flex-column">
          {blocks.map((block, key) => (
            <div className="p-button mb-2" onClick={block.method} key={key}>
              {block.title}
            </div>
          ))}
        </div>
      )
    }

    render () {
      return (
        <Component
          {...this.props}
          selectionMode="range"
          ref={this.refCalendar}
          footerTemplate={this.renderFooter}
        />
      )
    }
  }
