const getPartsOfTime = () => {
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDate()
  const currentYear = new Date().getFullYear()

  return { month: currentMonth, day: currentDay, year: currentYear }
}

const getYearRange = ({ startCalendarDate, startRangeOfYears }) => {
  const startYear = startCalendarDate ? startCalendarDate.getFullYear() : startRangeOfYears
  const endYear = getPartsOfTime().year + 1

  return `${startYear}:${endYear}`
}

export {
  getPartsOfTime,
  getYearRange,
}
