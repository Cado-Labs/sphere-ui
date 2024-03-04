import React from "react"
import { Rating as PrimeRating } from "primereact/rating"

import { filterTooltipOptions, pickDataAttributes } from "../../utils"

export const Rating = React.forwardRef(({
  id,
  value,
  disabled = false,
  readOnly = false,
  stars = 5,
  cancel = false,
  style,
  className,
  tooltip,
  tooltipOptions,
  onChange,
  onIcon,
  onIconProps,
  offIcon,
  offIconProps,
  cancelIcon,
  cancelIconProps,
  ...props
}, ref) => {
  const filteredTooltipOptions = filterTooltipOptions(tooltipOptions)
  const dataAttributes = pickDataAttributes(props)

  return (
    <PrimeRating
      ref={ref}
      id={id}
      value={value}
      disabled={disabled}
      readOnly={readOnly}
      stars={stars}
      cancel={cancel}
      style={style}
      className={className}
      tooltip={tooltip}
      tooltipOptions={filteredTooltipOptions}
      onChange={onChange}
      onIcon={onIcon}
      onIconProps={onIconProps}
      offIcon={offIcon}
      offIconProps={offIconProps}
      cancelIcon={cancelIcon}
      cancelIconProps={cancelIconProps}
      {...dataAttributes}
    />
  )
})
