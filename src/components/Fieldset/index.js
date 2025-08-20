import React from "react"
import { Fieldset as PrimeFieldset } from "primereact/fieldset"

export const Fieldset = React.forwardRef(({
  ...props
}, ref) => {
  return (
    <PrimeFieldset
      ref={ref}
      {...props}
    />
  )
})
