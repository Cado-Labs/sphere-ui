import React from "react"
import {
  Accordion as PrimeAccordion,
  AccordionTab,
} from "primereact/accordion"

const Accordion = React.forwardRef(({
  id,
  activeIndex,
  dataTestId,
  onTabChange,
  onTabOpen,
  onTabClose,
  style,
  className,
  multiple,
  children,
}, ref) => {
  return (
    <PrimeAccordion
      ref={ref}
      id={id}
      activeIndex={activeIndex}
      data-testid={dataTestId}
      onTabChange={onTabChange}
      onTabOpen={onTabOpen}
      onTabClose={onTabClose}
      style={style}
      className={className}
      multiple={multiple}
    >
      {children}
    </PrimeAccordion>
  )
})

export {
  Accordion,
  AccordionTab,
}
