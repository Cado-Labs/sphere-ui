/* eslint-disable max-len */
import { Menubar } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

import { ParamsTable } from "@components"

const I18N_PREFIX = "stories.menubar"

const code = `
function MenubarExample () {
  const items = [
    {
      label: 'Home',
      icon: 'pi pi-home'
    },
    {
      label: 'Features',
      icon: 'pi pi-star'
    },
    {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
        {
          label: 'Components',
          icon: 'pi pi-bolt'
        },
        {
          label: 'Blocks',
          icon: 'pi pi-server'
        },
        {
          label: 'UI Kit',
          icon: 'pi pi-pencil'
        },
        {
          label: 'Templates',
          icon: 'pi pi-palette',
          items: [
            {
              label: 'Apollo',
              icon: 'pi pi-palette'
            },
            {
              label: 'Ultima',
              icon: 'pi pi-palette'
            }
          ]
        }
      ]
    },
    {
      label: 'Contact',
      icon: 'pi pi-envelope'
    }
  ];

  return (
    <div className="card">
      <Menubar model={items} />
    </div>
  )
}
`

export const menubar = {
  component: "Menubar",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
  code,
  scope: { Menubar },
  descriptionProps: [
    { name: "children", type: "ReactNode", default: "null", description: `${I18N_PREFIX}.props.children` },
    { name: "start", type: "ReactNode | Function", default: "null", description: `${I18N_PREFIX}.props.start` },
    { name: "end", type: "ReactNode | Function", default: "null", description: `${I18N_PREFIX}.props.end` },
    { name: "model", type: "MenuItem[]", default: "null", description: `${I18N_PREFIX}.props.model` },
    { name: "menuIcon", type: "IconType<MenubarProps>", default: "null", description: `${I18N_PREFIX}.props.menuIcon` },
    { name: "submenuIcon", type: "IconType<MenubarProps>", default: "null", description: `${I18N_PREFIX}.props.submenuIcon` },
  ],
  eventDescriptionProps: [
    { name: "originalEvent", description: `${I18N_PREFIX}.events.original` },
    { name: "item", description: `${I18N_PREFIX}.events.item` },
  ],
  footer: (
    <ParamsTable
      title={i18n.t(`${I18N_PREFIX}.footer.title`)}
      description={[
        { name: "id", type: "string", description: `${I18N_PREFIX}.menuitems.id` },
        { name: "label", type: "string", description: `${I18N_PREFIX}.menuitems.label` },
        { name: "icon", type: "any", description: `${I18N_PREFIX}.menuitems.icon` },
        { name: "url", type: "string", default: false, description: `${I18N_PREFIX}.menuitems.url` },
        { name: "items", type: "MenuItem[] | MenuItem[][]", default: false, description: `${I18N_PREFIX}.menuitems.items` },
        { name: "expanded", type: "boolean", description: `${I18N_PREFIX}.menuitems.expanded` },
        { name: "disabled", type: "boolean", description: `${I18N_PREFIX}.menuitems.disabled` },
        { name: "visible", type: "boolean", description: `${I18N_PREFIX}.menuitems.visible` },
        { name: "target", type: "string", description: `${I18N_PREFIX}.menuitems.target` },
        { name: "separator", type: "boolean", description: `${I18N_PREFIX}.menuitems.separator` },
        { name: "style", type: "CSSProperties", description: `${I18N_PREFIX}.menuitems.style` },
        { name: "className", type: "string", description: `${I18N_PREFIX}.menuitems.className` },
        { name: "template", type: "ReactNode | Function", description: `${I18N_PREFIX}.menuitems.template` },
        { name: "data", type: "any", description: `${I18N_PREFIX}.menuitems.data` },
      ]}
    />
  ),
}
