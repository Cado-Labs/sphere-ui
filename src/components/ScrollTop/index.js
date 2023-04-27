import React from "react"
import { ScrollTop as PrimeScrollTop } from "primereact/scrolltop"
import { classNames as cn } from "primereact/utils"

export const ScrollTop = React.forwardRef(({
  target = "window",
  threshold = 400,
  behavior = "smooth",
  onShow,
  onHide,
  className,
  size = "large",
  style,
}, ref) => {
  const scrollTopClassName = cn(className, "custom-scrolltop", {
    "custom-scrolltop_small": size === "small",
  })

  return (
    <PrimeScrollTop
      ref={ref}
      target={target}
      threshold={threshold}
      behavior={behavior}
      className={scrollTopClassName}
      style={style}
      onShow={onShow}
      onHide={onHide}
      icon="pi pi-arrow-up"
    />
  )
})
