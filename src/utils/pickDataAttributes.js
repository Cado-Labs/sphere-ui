export const pickDataAttributes = props => {
  return Object.fromEntries(
    Object.entries(props).filter(([key]) => key.startsWith("data-")),
  )
}
