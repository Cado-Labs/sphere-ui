import React from "react"
import { TabView as PrimeTabView, TabPanel } from "primereact/tabview"

const TabView = React.forwardRef(({
  id,
  activeIndex,
  style,
  className,
  renderActiveOnly,
  scrollable,
  onTabChange,
  dataTestId,
  children,
}, ref) => {
  return (
    <PrimeTabView
      ref={ref}
      id={id}
      activeIndex={activeIndex}
      renderActiveOnly={renderActiveOnly}
      scrollable={scrollable}
      style={style}
      onTabChange={onTabChange}
      className={className}
      data-testid={dataTestId}
    >
      {children}
    </PrimeTabView>
  )
})

export {
  TabView,
  // can't wrap Prime component because of the comparison
  // https://github.com/primefaces/primereact/blob/master/components/lib/tabview/TabView.js#L96
  // "tab.type !== TabPanel" for wrapped component
  TabPanel,
}
