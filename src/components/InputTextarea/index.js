import React from "react"
import { InputTextarea as PrimeInputTextarea } from "primereact/inputtextarea"

import { filterTooltipOptions } from "../../utils"

export const InputTextarea = React.forwardRef(({
  autoResize = false,
  tooltip,
  tooltipOptions,
  // props below needed as attributes for the native input
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  return (
    <PrimeInputTextarea
      {...props}
      ref={ref}
      autoResize={autoResize}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
    />
  )
})
