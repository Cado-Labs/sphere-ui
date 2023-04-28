export const shouldFilterSelectOptions = options => {
  if (Array.isArray(options)) {
    return options.length > 5
  }

  return false
}
