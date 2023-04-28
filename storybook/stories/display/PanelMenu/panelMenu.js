/* eslint-disable max-len */
import { PanelMenu } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

import { ParamsTable } from "@components"

const I18N_PREFIX = "stories.panelmenu"

const code = `
function PanelMenuExample () {
  const items = [
    {
      label: "File",
      icon: "pi pi-fw pi-file",
      expanded: true,
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-plus",
          items: [
            {
              label: "Bookmark",
              icon: "pi pi-fw pi-bookmark",
              command: () => location.assign("https://www.w3.org/"),
            },
            {
              label: "Video",
              icon: "pi pi-fw pi-video",
              command: () => console.log("navigate to video"),
            },
          ],
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-trash",
        },
        {
          label: "Export",
          icon: "pi pi-fw pi-external-link",
        },
      ],
    },
    {
      label: "Edit",
      icon: "pi pi-fw pi-pencil",
      disabled: true,
      items: [
        {
          label: "Left",
          icon: "pi pi-fw pi-align-left",
        },
        {
          label: "Right",
          icon: "pi pi-fw pi-align-right",
        },
        {
          label: "Center",
          icon: "pi pi-fw pi-align-center",
        },
        {
          label: "Justify",
          icon: "pi pi-fw pi-align-justify",
        },
      ],
    },
    {
      label: "Users",
      icon: "pi pi-fw pi-user",
      items: [
        {
          label: "New",
          icon: "pi pi-fw pi-user-plus",
        },
        {
          label: "Delete",
          icon: "pi pi-fw pi-user-minus",
        },
        {
          label: "Search",
          icon: "pi pi-fw pi-users",
          items: [
            {
              label: "Filter",
              icon: "pi pi-fw pi-filter",
              items: [
                {
                  label: "Print",
                  icon: "pi pi-fw pi-print",
                },
              ],
            },
            {
              icon: "pi pi-fw pi-bars",
              label: "List",
            },
          ],
        },
      ],
    },
    {
      label: "Events",
      icon: "pi pi-fw pi-calendar",
      items: [
        {
          label: "Edit",
          icon: "pi pi-fw pi-pencil",
          items: [
            {
              label: "Save",
              icon: "pi pi-fw pi-calendar-plus",
            },
            {
              label: "Delete",
              icon: "pi pi-fw pi-calendar-minus",
            },
          ],
        },
        {
          label: "Archieve",
          icon: "pi pi-fw pi-calendar-times",
          items: [
            {
              label: "Remove",
              icon: "pi pi-fw pi-calendar-minus",
              disabled: true,
            },
          ],
        },
      ],
    },
  ]

  return (
    <div className="p-card s-container">
      <PanelMenu model={items} style={{ width: "22rem" }} />
    </div>
  )
}
`

export const panelMenu = {
  component: "PanelMenu",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { PanelMenu },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "model", type: "Array<Model>", description: `${I18N_PREFIX}.props.model` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "multiple", type: "boolean", default: true, description: `${I18N_PREFIX}.props.multiple` },
    { name: "submenuIcon", type: "string", description: `${I18N_PREFIX}.props.submenuIcon` },
  ],
  footer: (
    <ParamsTable
      title={i18n.t(`${I18N_PREFIX}.header.model`)}
      description={[
        { name: "label", type: "string", description: `${I18N_PREFIX}.model.label` },
        { name: "items", type: "Array<Model>", description: `${I18N_PREFIX}.model.items` },
        { name: "command", type: "function", description: `${I18N_PREFIX}.model.command` },
        { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.model.disabled` },
        { name: "expanded", type: "boolean", default: false, description: `${I18N_PREFIX}.model.expanded` },
        { name: "className", type: "string", description: `${I18N_PREFIX}.model.className` },
        { name: "style", type: "object", description: `${I18N_PREFIX}.model.style` },
        { name: "icon", type: "string", description: `${I18N_PREFIX}.model.icon` },
      ]}
    />
  ),
}
