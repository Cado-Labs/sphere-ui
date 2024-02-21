/* eslint-disable max-len */
import { Tree, Button } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { ParamsTable } from "@components"

const I18N_PREFIX = "stories.tree"

const code = `
function TreeExample () {
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

  const [expandedKeys, setExpandedKeys] = React.useState({})

  const expandAll = () => {
    const _expandedKeys = {}
    nodes.forEach(node => expandNode(node, _expandedKeys))

    setExpandedKeys(_expandedKeys)
  }

  const collapseAll = () => {
    setExpandedKeys({})
  }

  const expandNode = (node, _expandedKeys) => {
    if (node.children && node.children.length) {
      _expandedKeys[node.key] = true
      node.children.forEach(child => expandNode(child, _expandedKeys))
    }
  }

  return (
    <div>
      <div className="p-card s-container mb-3">
        <h3>Basic</h3>
        <Tree value={nodes} />
      </div>

      <div className="p-card s-container">
        <h3>Programmatic Control</h3>
        <Button type="button" icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
        <Button type="button" icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
        <Tree className="mt-3" value={nodes} expandedKeys={expandedKeys} onToggle={e => setExpandedKeys(e.value)} />
      </div>
    </div>
  )
}
`

const onSelectParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.node", description: "Selected node instance" },
]

const onUnselectParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.node", description: "Unselected node instance" },
]

const onExpandParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.node", description: "Expanded node instance" },
]

const onCollapseParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Collapsed node instance" },
]

const onSelectionChangeParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Selected node key(s)" },
]

const onToggleParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.node", description: "Toggled node instance" },
]

const onDragDropParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "New value after the dragdrop" },
]

const onNodeClickParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.node", description: "The current node" },
]

const treeExtra = (
  <div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.start.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.start.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <ParamsTable
        title={i18n.t(`${I18N_PREFIX}.content.treenode.title`)}
        description={[
          { name: "key", type: "string", description: `${I18N_PREFIX}.treenodeProps.key` },
          { name: "label", type: "string", description: `${I18N_PREFIX}.treenodeProps.label` },
          { name: "data", type: "any", description: `${I18N_PREFIX}.treenodeProps.data` },
          { name: "icon", type: "string", description: `${I18N_PREFIX}.treenodeProps.data` },
          { name: "children", type: "TreeNode[]", description: `${I18N_PREFIX}.treenodeProps.children` },
          { name: "style", type: "object", description: `${I18N_PREFIX}.treenodeProps.style` },
          { name: "className", type: "string", description: `${I18N_PREFIX}.treenodeProps.className` },
          { name: "draggable", type: "boolean", default: true, description: `${I18N_PREFIX}.treenodeProps.draggable` },
          { name: "droppable", type: "boolean", default: true, description: `${I18N_PREFIX}.treenodeProps.droppable` },
          { name: "selectable", type: "boolean", description: `${I18N_PREFIX}.treenodeProps.selectable` },
          { name: "leaf", type: "boolean", description: `${I18N_PREFIX}.treenodeProps.leaf` },
        ]}
      />
    </div>
  </div>
)

export const documentation = {
  component: "Tree",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: treeExtra,
  },
  code,
  scope: { Tree, Button },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "selectionMode", type: "string", description: `${I18N_PREFIX}.props.selectionMode` },
    { name: "selectionKeys", type: "any", description: `${I18N_PREFIX}.props.selectionKeys` },
    { name: "expandedKeys", type: "object", description: `${I18N_PREFIX}.props.expandedKeys` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "contentStyle", type: "object", description: `${I18N_PREFIX}.props.contentStyle` },
    { name: "contentClassName", type: "string", description: `${I18N_PREFIX}.props.contentClassName` },
    { name: "metaKeySelection", type: "boolean", default: true, description: `${I18N_PREFIX}.props.metaKeySelection` },
    { name: "propagateSelectionUp", type: "boolean", default: true, description: `${I18N_PREFIX}.props.propagateSelectionUp` },
    { name: "propagateSelectionDown", type: "boolean", default: true, description: `${I18N_PREFIX}.props.propagateSelectionDown` },
    { name: "loading", type: "boolean", default: false, description: `${I18N_PREFIX}.props.loading` },
    { name: "dragdropScope", type: "string", description: `${I18N_PREFIX}.props.dragdropScope` },
    { name: "header", type: "any", description: `${I18N_PREFIX}.props.header` },
    { name: "footer", type: "any", description: `${I18N_PREFIX}.props.footer` },
    { name: "ariaLabel", type: "string", description: `${I18N_PREFIX}.props.ariaLabel` },
    { name: "ariaLabelledBy", type: "string", description: `${I18N_PREFIX}.props.ariaLabelledBy` },
    { name: "nodeTemplate", type: "string", description: `${I18N_PREFIX}.props.nodeTemplate` },
    { name: "togglerTemplate", type: "string", description: `${I18N_PREFIX}.props.togglerTemplate` },
    { name: "showHeader", type: "boolean", default: true, description: `${I18N_PREFIX}.props.showHeader` },
    { name: "disabled", type: "boolean", default: false, description: `${I18N_PREFIX}.props.disabled` },
    { name: "filter", type: "boolean", default: false, description: `${I18N_PREFIX}.props.filter` },
    { name: "filterBy", type: "boolean", default: "label", description: `${I18N_PREFIX}.props.filterBy` },
    { name: "filterMode", type: "strict" | "lenient", default: "lenient", description: `${I18N_PREFIX}.props.filterMode` },
    { name: "filterPlaceholder", type: "string", default: null, description: `${I18N_PREFIX}.props.filterPlaceholder` },
    { name: "filterValue", type: "string", default: null, description: `${I18N_PREFIX}.props.filterValue` },
  ],
  eventDescriptionProps: [
    { name: "onSelect", params: onSelectParams, description: `${I18N_PREFIX}.props.onSelect` },
    { name: "onUnselect", params: onUnselectParams, description: `${I18N_PREFIX}.props.onUnselect` },
    { name: "onExpand", params: onExpandParams, description: `${I18N_PREFIX}.props.onExpand` },
    { name: "onCollapse", params: onCollapseParams, description: `${I18N_PREFIX}.props.onCollapse` },
    { name: "onSelectionChange", params: onSelectionChangeParams, description: `${I18N_PREFIX}.props.onSelectionChange` },
    { name: "onToggle", params: onToggleParams, description: `${I18N_PREFIX}.props.onToggle` },
    { name: "onDragDrop", params: onDragDropParams, description: `${I18N_PREFIX}.props.onDragDrop` },
    { name: "onNodeClick", params: onNodeClickParams, description: `${I18N_PREFIX}.props.onNodeClick` },
  ],
}
