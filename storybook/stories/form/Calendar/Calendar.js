import React, { useRef, useState } from "react"
import * as UI from "@cadolabs/sphere-ui"

import "./styles.css"

const getDate = () => {
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDate()
  const currentYear = new Date().getFullYear()

  return [currentMonth, currentDay, currentYear]
}

export function Calendar (props) {
  const Component = UI.Calendar
  const refCalendar = useRef(null)
  const [date, setDate] = useState()
  const [month, day, year] = getDate()

  const clear = () => {
    onChange(null)
  }

  const setToday = () => {
    const newDate = [
      new Date(`${month + 1}.${day}.${year}`),
      new Date(`${month + 1}.${day}.${year}`),
    ]

    onChange(newDate)
  }

  const setCurrentMonth = () => {
    const lastDayInMonth = new Date(year, month + 1, 0).getDate()

    const newDate = [
      new Date(`${month + 1}.01.${year}`),
      new Date(`${month + 1}.${lastDayInMonth}.${year}`),
    ]

    onChange(newDate)
  }

  const setMonth = () => {
    const newDate = [
      new Date("01.01.2010"),
      new Date(`${month + 1}.${day}.${year}`),
    ]

    onChange(newDate)
  }

  const setWeek = () => {
    const week = new Date(year, month, day - 7)

    const date = [week, new Date(`${month + 1}.${day}.${year}`)]

    onChange(date)
  }

  const setLast30Days = () => {
    const week = new Date(year, month, day - 30)

    const date = [week, new Date(`${month + 1}.${day}.${year}`)]

    onChange(date)
  }

  const onChange = value => {
    refCalendar.current.onButtonClick()
    setDate(value)
  }

  const getYearRange = () => {
    return `2010:${year}`
  }

  const renderFooter = () => {
    return (
      <div style={{ display: "block" }}>
        <div style={styles} onClick={setToday}>
          Сегодня
        </div>
        <div style={styles} onClick={setWeek}>
          Неделя
        </div>
        <div style={styles} onClick={setLast30Days}>
          30 дней
        </div>
        <div style={styles} onClick={setCurrentMonth}>
          Этот месяц
        </div>
        <div style={styles} onClick={setMonth}>
          Весь период
        </div>
        <div style={styles} onClick={clear}>
          Очистить
        </div>
      </div>
    )
  }

  const styles = {
    padding: "10px",
    background: "#e2e2e2",
    borderRadius: "10px",
    marginTop: "10px",
    cursor: "pointer",
  }

  const renderCalendar = props => {
    return <Component {...props} />
  }

  const generateProps = () => {
    const defaultProps = {
      ref: refCalendar,
      value: date,
      onChange: e => setDate(e.value),
      selectOtherMonths: true,
    }

  }
 
  return (
    <UI.Calendar
      ref={refCalendar}
      value={date}
      selectionMode="range"
      onChange={e => setDate(e.value)}
      {...props}
      // yearRange={getYearRange()}
      // dateFormat="dd.mm.yy"

      // showTime
      // timeOnly
      // hourFormat="12"

      // hideOnDateTimeSelect
      // monthNavigator
      // yearNavigator
      // footerTemplate={renderFooter}
    />
  )
}
