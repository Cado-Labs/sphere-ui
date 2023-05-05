import React from "react"
import { Skeleton as PrimeSkeleton } from "primereact/skeleton"

import { pickDataAttributes } from "../../utils"

export const Skeleton = React.forwardRef(({
  shape = "rectangle",
  size,
  width = "100%",
  height = "1rem",
  borderRadius,
  animation = "wave",
  style,
  className,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)

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
      {...dataAttributes}
    />
  )
})
