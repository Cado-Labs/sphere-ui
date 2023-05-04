import React from "react"
import { AutoComplete as PrimeAutoComplete } from "primereact/autocomplete"

export const AutoComplete = React.forwardRef(({
  ...props
}, ref) => {
  return (
    <PrimeAutoComplete
      ref={ref}
      {...props}
    />
  )
})
