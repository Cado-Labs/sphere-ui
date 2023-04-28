import React from "react"
import { AutoComplete as PrimeAutoComplete } from "primereact/autocomplete"

export const AutoComplete = React.forwardRef(({
  dataCy,
  dataTestId,
  ...props
}, ref) => {
  return (
    <PrimeAutoComplete
      ref={ref}
      data-cy={dataCy}
      data-testid={dataTestId}
      {...props}
    />
  )
})
