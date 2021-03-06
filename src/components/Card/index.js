import React from "react"
import { Card as PrimeCard } from "primereact/card"

export const Card = React.forwardRef(({
  id,
  header,
  footer,
  title,
  subTitle,
  style,
  className,
  children,
}, ref) => {
  return (
    <PrimeCard
      ref={ref}
      id={id}
      header={header}
      footer={footer}
      title={title}
      subTitle={subTitle}
      style={style}
      className={className}
    >
      {children}
    </PrimeCard>
  )
})
