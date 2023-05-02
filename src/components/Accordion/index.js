import React from "react"
import {
  Accordion as PrimeAccordion,
  AccordionTab,
} from "primereact/accordion"

const Accordion = React.forwardRef(({
  id,
  activeIndex,
  onTabChange,
  onTabOpen,
  onTabClose,
  style,
  className,
  multiple = false,
  dataCy,
  dataTestId,
  children,
}, ref) => {
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
      data-cy={dataCy}
      data-testid={dataTestId}
    >
      {children}
    </PrimeAccordion>
  )
})

export {
  Accordion,
  AccordionTab,
}
