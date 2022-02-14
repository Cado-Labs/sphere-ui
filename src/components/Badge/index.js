import React from "react"
import { Badge as PrimeBadge } from "primereact/badge"
import { classNames as cn } from "primereact/utils"

export const Badge = React.forwardRef(({
  value,
  severity,
  size,
  className,
  style,
}, ref) => {
  const badgeClassName = cn(className, { "p-badge-sm": size === "small" })

  return (
    <PrimeBadge
      style={style}
      ref={ref}
      className={badgeClassName}
      value={value}
      severity={severity}
      size={size}
    />
  )
})
