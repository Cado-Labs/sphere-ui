/* eslint-disable max-len */
import { Tree, Toast } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.tree.pages.selection"

const code = `
function SelectionTreeExample () {
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

  const [selectedKey, setSelectedKey] = React.useState(null)
  const [selectedKeys1, setSelectedKeys1] = React.useState(null)
  const [selectedKeys2, setSelectedKeys2] = React.useState(null)
  const [selectedKeys3, setSelectedKeys3] = React.useState(null)
  const toast = React.useRef(null)

  const onNodeSelect = node => {
    toast.current.show({ severity: "success", summary: "Node Selected", detail: node.label, life: 3000 })
  }

  const onNodeUnselect = node => {
    toast.current.show({ severity: "success", summary: "Node Unselected", detail: node.label, life: 3000 })
  }

  return (
    <div>
      <Toast ref={toast} />
      <div className="p-card s-container">
        <h3>Single Selection</h3>
        <Tree value={nodes} selectionMode="single" selectionKeys={selectedKey} onSelectionChange={e => setSelectedKey(e.value)} onSelect={onNodeSelect} onUnselect={onNodeUnselect} />

        <h3>Multiple Selection with MetaKey</h3>
        <Tree value={nodes} selectionMode="multiple" selectionKeys={selectedKeys1} onSelectionChange={e => setSelectedKeys1(e.value)} />

        <h3>Multiple Selection without MetaKey</h3>
        <Tree value={nodes} selectionMode="multiple" metaKeySelection={false} selectionKeys={selectedKeys2} onSelectionChange={e => setSelectedKeys2(e.value)} />

        <h3>Checkbox Selection</h3>
        <Tree value={nodes} selectionMode="checkbox" selectionKeys={selectedKeys3} onSelectionChange={e => setSelectedKeys3(e.value)} />
      </div>
    </div>
  )
}
`

export const selection = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: i18n.t(`${I18N_PREFIX}.description`),
  },
  code,
  scope: { Tree, Toast },
}
