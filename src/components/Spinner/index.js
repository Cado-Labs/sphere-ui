import React from "react"
import { ProgressSpinner } from "primereact/progressspinner"

export const Spinner = React.forwardRef(({
  loading = true,
  style,
  className,
  strokeWidth = "2",
  animationDuration = "2s",
  dataCy,
  dataTestId,
  children,
}, ref) => {
  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner
          ref={ref}
          strokeWidth={strokeWidth}
          animationDuration={animationDuration}
          style={style}
          className={className}
          data-cy={dataCy}
          data-testid={dataTestId}
        />
      </div>
    )
  }

  return children
})
