import React from "react"
import { Button as PrimeButton } from "primereact/button"

import { filterTooltipOptions } from "../../utils"

export const Button = React.forwardRef(({
  // omitting badge props cause there is another way to add a badge in a button (see Badge stories)
  /* eslint-disable no-unused-vars */
  badge,
  badgeClassName,
  tooltipOptions,
  /* eslint-enable no-unused-vars */
  dataCy,
  dataTestId,
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  return (
    <PrimeButton
      {...props}
      tooltipOptions={filteredTooltipOptions}
      ref={ref}
      data-cy={dataCy}
      data-testid={dataTestId}
    />
  )
})
