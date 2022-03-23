import React from "react"
import { InputText as PrimeInputText } from "primereact/inputtext"

import { filterTooltipOptions } from "../../utils"

export const InputText = React.forwardRef(({
  keyfilter,
  tooltip,
  tooltipOptions,

  /* eslint-disable no-unused-vars */
  // omitting validateOnly prop cause we need to block typing of invalid data
  validateOnly,
  /* eslint-enable no-unused-vars */

  // props below needed as attributes for the native input
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  return (
    <PrimeInputText
      {...props}
      ref={ref}
      keyfilter={keyfilter}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
    />
  )
})
