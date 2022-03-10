export const filterOptions = (options, paramsList) => {
  if (!options) return null
  const entries = Object.entries(options).filter(([key]) => paramsList.includes(key))
  return Object.fromEntries(entries)
}
