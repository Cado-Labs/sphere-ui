import React from "react"
import { Badge as PrimeBadge } from "primereact/badge"
import { classNames as cn } from "primereact/utils"

import { pickDataAttributes } from "../../utils"

export const Badge = React.forwardRef(({
  value,
  severity,
  size,
  className,
  style,
  ...props
}, ref) => {
  const badgeClassName = cn(className, {
    "p-badge-sm": size === "small",
    "p-badge-secondary": severity === "secondary",
    "p-badge-help": severity === "help",
  })
  const dataAttributes = pickDataAttributes(props)

  return (
    <PrimeBadge
      style={style}
      ref={ref}
      className={badgeClassName}
      value={value}
      severity={severity}
      size={size}
      {...dataAttributes}
    />
  )
})
