import React from "react"
import { Menubar as PrimeMenubar } from "primereact/menubar"

export const Menubar = React.forwardRef(({
  ...props
}, ref) => {
  return (
    <PrimeMenubar
      ref={ref}
      {...props}
    />
  )
})
