import React from "react"
import { ProgressSpinner } from "primereact/progressspinner"

export const Spinner = React.forwardRef(({
  loading = true,
  style,
  className,
  strokeWidth,
  dataTestId,
  children,
}, ref) => {
  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner
          ref={ref}
          loading={loading}
          strokeWidth={strokeWidth}
          style={style}
          className={className}
          dataTestId={dataTestId}
        />
      </div>
    )
  }

  return children
})
