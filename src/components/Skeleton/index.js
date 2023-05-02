import React from "react"
import { Skeleton as PrimeSkeleton } from "primereact/skeleton"

export const Skeleton = React.forwardRef(({
  shape = "rectangle",
  size,
  width = "100%",
  height = "1rem",
  borderRadius,
  animation = "wave",
  style,
  className,
  dataCy,
  dataTestId,
}, ref) => {
  return (
    <PrimeSkeleton
      ref={ref}
      shape={shape}
      size={size}
      width={width}
      height={height}
      borderRadius={borderRadius}
      animation={animation}
      style={style}
      className={className}
      data-cy={dataCy}
      data-testid={dataTestId}
    />
  )
})
