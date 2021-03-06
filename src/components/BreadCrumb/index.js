import React from "react"
import { BreadCrumb as PrimeBreadCrumb } from "primereact/breadcrumb"

import { filterOptions } from "../../utils"

const POSSIBLE_PARAMS = [
  "label",
  "url",
  "command",
  "disabled",
  "style",
  "className",
]

export const BreadCrumb = React.forwardRef(({
  id,
  model,
  home,
  style,
  className,
}, ref) => {
  const breadCrumbModel = model.map(options => filterOptions(options, POSSIBLE_PARAMS))

  const breadCrumbHome = {
    icon: home.icon || "pi pi-home",
    url: home.url,
    command: home.command,
    disabled: home.disabled ?? false,
    style: home.style,
    className: home.className,
  }

  return (
    <PrimeBreadCrumb
      ref={ref}
      id={id}
      model={breadCrumbModel}
      home={breadCrumbHome}
      style={style}
      className={className}
    />
  )
})
