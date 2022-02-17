import React from "react"
import { Button as PrimeButton } from "primereact/button"

export const Button = React.forwardRef(({
  label,
  icon,
  iconPos,
  tooltip,
  tooltipOptions,
  disabled,
  loading,
  loadingIcon,
  children,
  // omitting badge props cause there is another way to add a badge in a button (see Badge stories)
  /* eslint-disable no-unused-vars */
  badge,
  badgeClassName,
  /* eslint-enable no-unused-vars */
  ...buttonProps
}, ref) => {
  return (
    <PrimeButton
      ref={ref}
      label={label}
      icon={icon}
      iconPos={iconPos}
      tooltip={tooltip}
      tooltipOptions={tooltipOptions}
      disabled={disabled}
      loading={loading}
      loadingIcon={loadingIcon}
      {...buttonProps}
    >
      {children}
    </PrimeButton>
  )
})
