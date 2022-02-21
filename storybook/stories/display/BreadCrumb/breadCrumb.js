/* eslint-disable max-len */
import { Fragment } from "react"
import { BreadCrumb } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

import { ParamsTable } from "@components"

const I18N_PREFIX = "stories.breadcrumb"

const code = `
function BreadCrumbExample () {
  const items = [
    { label: "Computer" },
    { label: "Notebook" },
    { label: "Accessories" },
    { label: "Backpacks" },
    { label: "Item" },
  ]

  const home = { url: "https://cado-labs.github.io/sphere-ui/" }

  const items2 = [
    { label: "Home", className: "font-bold" },
    { label: "Services", style: { textDecoration: "underline" } },
    { label: "Internal", style: { textDecoration: "underline" } },
    { label: "Design", style: { textDecoration: "underline" } },
    { label: "Disabled", disabled: true },
  ]

  const home2 = { icon: "pi pi-folder", command: () => alert("Navigate home!") }

  return (
    <div className="p-card s-container">
      <h3>Simple</h3>
      <BreadCrumb model={items} home={home} />

      <h3>Customized</h3>
      <BreadCrumb model={items2} home={home2} />
    </div>
  )
}
`

export const breadCrumb = {
  header: "BreadCrumb",
  content: i18n.t(`${I18N_PREFIX}.content`),
  code,
  scope: { BreadCrumb },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "model", type: "Array<Model>", description: `${I18N_PREFIX}.props.model` },
    { name: "home", type: "Home", description: `${I18N_PREFIX}.props.home` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
  ],
  footer: (
    <Fragment>
      <ParamsTable
        title={i18n.t(`${I18N_PREFIX}.header.model`)}
        description={[
          { name: "label", type: "string", description: `${I18N_PREFIX}.model.label` },
          { name: "url", type: "string", description: `${I18N_PREFIX}.model.url` },
          { name: "command", type: "function", description: `${I18N_PREFIX}.model.command` },
          { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.model.disabled` },
          { name: "className", type: "string", description: `${I18N_PREFIX}.model.className` },
          { name: "style", type: "object", description: `${I18N_PREFIX}.model.style` },
        ]}
      />
      <ParamsTable
        title={i18n.t(`${I18N_PREFIX}.header.home`)}
        description={[
          { name: "icon", type: "string", default: "pi pi-home", description: `${I18N_PREFIX}.home.icon` },
          { name: "url", type: "string", description: `${I18N_PREFIX}.home.url` },
          { name: "command", type: "function", description: `${I18N_PREFIX}.home.command` },
          { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.home.disabled` },
          { name: "className", type: "string", description: `${I18N_PREFIX}.home.className` },
          { name: "style", type: "object", description: `${I18N_PREFIX}.home.style` },
        ]}
      />
    </Fragment>
  ),
}
