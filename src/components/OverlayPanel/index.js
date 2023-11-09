import React from "react"
import { OverlayPanel as PrimeOverlayPanel } from "primereact/overlaypanel"

import { pickDataAttributes } from "../../utils"

export const OverlayPanel = React.forwardRef(
  (
    {
      ariaCloseLabel,
      breakpoints,
      closeIcon,
      closeOnEscape = true,
      dismissable = true,
      showCloseIcon = false,
      transitionOptions,
      unstyled = false,
      onShow,
      onHide,
      children,
      ...props
    },
    ref) => {
    const dataAttributes = pickDataAttributes(props)

    return (
      <PrimeOverlayPanel
        ref={ref}
        ariaCloseLabel={ariaCloseLabel}
        breakpoints={breakpoints}
        closeIcon={closeIcon}
        closeOnEscape={closeOnEscape}
        dismissable={dismissable}
        showCloseIcon={showCloseIcon}
        transitionOptions={transitionOptions}
        unstyled={unstyled}
        onShow={onShow}
        onHide={onHide}
        {...dataAttributes}
      >
        {children}
      </PrimeOverlayPanel>
    )
  })
