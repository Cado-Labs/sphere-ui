import React from "react"
import { ProgressSpinner } from "primereact/progressspinner"

import { pickDataAttributes } from "../../utils"

export const Spinner = React.forwardRef(({
  loading = true,
  style,
  className,
  strokeWidth = "2",
  animationDuration = "2s",
  children,
  ...props
}, ref) => {
  if (loading) {
    const dataAttributes = pickDataAttributes(props)
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner
          ref={ref}
          strokeWidth={strokeWidth}
          animationDuration={animationDuration}
          style={style}
          className={className}
          {...dataAttributes}
        />
      </div>
    )
  }

  return children
})
