import React from "react"
import { Tag as PrimeTag } from "primereact/tag"
import { classNames as cn } from "primereact/utils"

import { pickDataAttributes } from "../../utils"

export const Tag = React.forwardRef(({
  value,
  severity = null,
  icon,
  rounded = false,
  style,
  className,
  ...props
}, ref) => {
  const tagClassName = cn(className, {
    "p-tag-secondary": severity === "secondary",
    "p-tag-help": severity === "help",
  })
  const dataAttributes = pickDataAttributes(props)

  return (
    <PrimeTag
      ref={ref}
      value={value}
      severity={severity}
      icon={icon}
      rounded={rounded}
      className={tagClassName}
      style={style}
      {...dataAttributes}
    />
  )
})
