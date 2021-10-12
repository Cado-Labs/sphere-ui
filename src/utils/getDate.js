const getPartsOfTime = () => {
  const currentMonth = new Date().getMonth()
  const currentDay = new Date().getDate()
  const currentYear = new Date().getFullYear()

  return { month: currentMonth, day: currentDay, year: currentYear }
}

export {
  getPartsOfTime,
}
