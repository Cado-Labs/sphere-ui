import React from "react"
import { Button as PrimeButton } from "primereact/button"

export const Button = React.forwardRef(({
  // omitting badge props cause there is another way to add a badge in a button (see Badge stories)
  /* eslint-disable no-unused-vars */
  badge,
  badgeClassName,
  /* eslint-enable no-unused-vars */
  ...props
}, ref) => {
  return <PrimeButton ref={ref} {...props} />
})
