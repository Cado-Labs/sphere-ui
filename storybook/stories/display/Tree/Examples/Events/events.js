/* eslint-disable max-len */
import { Tree, Toast } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.tree.pages.events"

const code = `
function EventsTreeExample () {
  const nodes = [
    {
      key: "0",
      label: "Documents",
      data: "Documents Folder",
      icon: "pi pi-fw pi-inbox",
      children: [{
        key: "0-0",
        label: "Work",
        data: "Work Folder",
        icon: "pi pi-fw pi-cog",
        children: [{ key: "0-0-0", label: "Expenses.doc", icon: "pi pi-fw pi-file", data: "Expenses Document" }, { key: "0-0-1", label: "Resume.doc", icon: "pi pi-fw pi-file", data: "Resume Document" }],
      },
      {
        key: "0-1",
        label: "Home",
        data: "Home Folder",
        icon: "pi pi-fw pi-home",
        children: [{ key: "0-1-0", label: "Invoices.txt", icon: "pi pi-fw pi-file", data: "Invoices for this month" }],
      }],
    },
    {
      key: "1",
      label: "Events",
      data: "Events Folder",
      icon: "pi pi-fw pi-calendar",
      children: [
        { key: "1-0", label: "Meeting", icon: "pi pi-fw pi-calendar-plus", data: "Meeting" },
        { key: "1-1", label: "Product Launch", icon: "pi pi-fw pi-calendar-plus", data: "Product Launch" },
        { key: "1-2", label: "Report Review", icon: "pi pi-fw pi-calendar-plus", data: "Report Review" }],
    },
    {
      key: "2",
      label: "Movies",
      data: "Movies Folder",
      icon: "pi pi-fw pi-star-fill",
      children: [{
        key: "2-0",
        icon: "pi pi-fw pi-star-fill",
        label: "Al Pacino",
        data: "Pacino Movies",
        children: [{ key: "2-0-0", label: "Scarface", icon: "pi pi-fw pi-video", data: "Scarface Movie" }, { key: "2-0-1", label: "Serpico", icon: "pi pi-fw pi-video", data: "Serpico Movie" }],
      },
      {
        key: "2-1",
        label: "Robert De Niro",
        icon: "pi pi-fw pi-star-fill",
        data: "De Niro Movies",
        children: [{ key: "2-1-0", label: "Goodfellas", icon: "pi pi-fw pi-video", data: "Goodfellas Movie" }, { key: "2-1-1", label: "Untouchables", icon: "pi pi-fw pi-video", data: "Untouchables Movie" }],
      }],
    },
  ]

  const [selectedNodeKey, setSelectedNodeKey] = React.useState(null)
  const toast = React.useRef(null)

  const onExpand = event => {
    toast.current.show({ severity: "success", summary: "Node Expanded", detail: event.node.label })
  }

  const onCollapse = event => {
    toast.current.show({ severity: "success", summary: "Node Collapsed", detail: event.node.label })
  }

  const onSelect = event => {
    toast.current.show({ severity: "info", summary: "Node Selected", detail: event.node.label })
  }

  const onUnselect = event => {
    toast.current.show({ severity: "info", summary: "Node Unselected", detail: event.node.label })
  }

  return (
    <div>
      <Toast ref={toast} />

      <div className="card">
        <Tree value={nodes} selectionMode="single" selectionKeys={selectedNodeKey} onSelectionChange={e => setSelectedNodeKey(e.value)}
          onExpand={onExpand} onCollapse={onCollapse} onSelect={onSelect} onUnselect={onUnselect}
        />
      </div>
    </div>
  )
}
`

export const events = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: i18n.t(`${I18N_PREFIX}.description`),
  },
  code,
  scope: { Tree, Toast },
}
