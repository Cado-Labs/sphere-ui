import React from "react"
import { Card as PrimeCard } from "primereact/card"

import { pickDataAttributes } from "../../utils"

export const Card = React.forwardRef(({
  id,
  header,
  footer,
  title,
  subTitle,
  style,
  className,
  children,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
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
      {...dataAttributes}
    >
      {children}
    </PrimeCard>
  )
})
