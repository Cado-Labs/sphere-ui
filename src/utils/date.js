const getPartsOfTime = () => {
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDate()
  const currentYear = new Date().getFullYear()

  return { month: currentMonth, day: currentDay, year: currentYear }
}

const getUTCPartsOfTime = startDate => {
  const date = new Date(startDate)

  const day = date.getUTCDate()
  const month = date.getUTCMonth()
  const year = date.getUTCFullYear()

  return { day, month, year }
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
}
