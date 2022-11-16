import React from "react"
import { Skeleton as PrimeSkeleton } from "primereact/skeleton"

export const Skeleton = React.forwardRef(({
  shape,
  size,
  width,
  height,
  borderRadius,
  animation,
  style,
  className,
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
      dataTestId={dataTestId}
    />
  )
})
