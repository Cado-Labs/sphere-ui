import React from "react"
import {
  Accordion as PrimeAccordion,
  AccordionTab,
} from "primereact/accordion"

import { pickDataAttributes } from "../../utils"

const Accordion = React.forwardRef(({
  id,
  activeIndex,
  onTabChange,
  onTabOpen,
  onTabClose,
  style,
  className,
  multiple = false,
  children,
  ...props
}, ref) => {
  const dataAttributes = pickDataAttributes(props)
  return (
    <PrimeAccordion
      ref={ref}
      id={id}
      activeIndex={activeIndex}
      onTabChange={onTabChange}
      onTabOpen={onTabOpen}
      onTabClose={onTabClose}
      style={style}
      className={className}
      multiple={multiple}
      {...dataAttributes}
    >
      {children}
    </PrimeAccordion>
  )
})

export {
  Accordion,
  AccordionTab,
}
