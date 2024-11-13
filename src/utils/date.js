const getPartsOfTime = relDate => {
  const date = relDate ? new Date(relDate) : new Date()

  const currentMonth = date.getMonth()
  const currentDay = date.getDate()
  const currentYear = date.getFullYear()

  return { month: currentMonth, day: currentDay, year: currentYear }
}

const getUTCPartsOfTime = startDate => {
  const date = new Date(startDate)

  const day = date.getUTCDate()
  const month = date.getUTCMonth()
  const year = date.getUTCFullYear()

  return { day, month, year }
}

const getTime = (date, utc) => {
  const cb = utc ? getUTCPartsOfTime : getPartsOfTime
  const { day, month, year } = cb(date)

  return new Date(year, month, day)
}

const getYearRange = ({ startCalendarDate, startRangeOfYears }) => {
  const startYear = startCalendarDate ? startCalendarDate.getFullYear() : startRangeOfYears
  const endYear = getPartsOfTime().year + 1

  return `${startYear}:${endYear}`
}

export {
  getPartsOfTime,
  getUTCPartsOfTime,
  getYearRange,
  getTime,
}
