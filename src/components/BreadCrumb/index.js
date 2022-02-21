import React from "react"
import { BreadCrumb as PrimeBreadCrumb } from "primereact/breadcrumb"

export const BreadCrumb = React.forwardRef(({
  id,
  model,
  home,
  style,
  className,
}, ref) => {
  const breadCrumbModel = model.map(item => ({
    label: item.label,
    url: item.url,
    command: item.command,
    disabled: item.disabled ?? false,
    style: item.style,
    className: item.className,
  }))

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
