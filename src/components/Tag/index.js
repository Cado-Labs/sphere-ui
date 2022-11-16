import React from "react"
import { Tag as PrimeTag } from "primereact/tag"
import { classNames as cn } from "primereact/utils"

export const Tag = React.forwardRef(({
  value,
  severity,
  icon,
  style,
  className,
}, ref) => {
  const tagClassName = cn(className, {
    "p-tag-secondary": severity === "secondary",
    "p-tag-help": severity === "help",
  })

  return (
    <PrimeTag
      ref={ref}
      value={value}
      severity={severity}
      icon={icon}
      className={tagClassName}
      style={style}
    />
  )
})
