/* eslint-disable max-len */
import { TreeTable, Column, Button } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { ParamsTable, Highlighter } from "@components"

const I18N_PREFIX = "stories.treetable"

const code = `
function TreeTableExample () {
  const nodes = [
    {
      key: "0",
      data: { name: "Applications", size: "100kb", type: "Folder" },
      children: [
        {
          key: "0-0",
          data: { name: "React", size: "25kb", type: "Folder" },
          children: [
            { key: "0-0-0", data: { name: "react.app", size: "10kb", type: "Application" } },
            { key: "0-0-1", data: { name: "native.app", size: "10kb", type: "Application" } },
            { key: "0-0-2", data: { name: "mobile.app", size: "5kb", type: "Application" } },
          ],
        },
        { key: "0-1", data: { name: "editor.app", size: "25kb", type: "Application" } },
        { key: "0-2", data: { name: "settings.app", size: "50kb", type: "Application" } },
      ],
    },
    {
      key: "1",
      data: { name: "Cloud", size: "20kb", type: "Folder" },
      children: [
        { key: "1-0", data: { name: "backup-1.zip", size: "10kb", type: "Zip" } },
        { key: "1-1", data: { name: "backup-2.zip", size: "10kb", type: "Zip" } },
      ],
    },
    {
      key: "2",
      data: { name: "Desktop", size: "150kb", type: "Folder" },
      children: [
        { key: "2-0", data: { name: "note-meeting.txt", size: "50kb", type: "Text" } },
        { key: "2-1", data: { name: "note-todo.txt", size: "100kb", type: "Text" } },
      ],
    },
    {
      key: "3",
      data: { name: "Documents", size: "75kb", type: "Folder" },
      children: [
        {
          key: "3-0",
          data: { name: "Work", size: "55kb", type: "Folder" },
          children: [
            { key: "3-0-0", data: { name: "Expenses.doc", size: "30kb", type: "Document" } },
            { key: "3-0-1", data: { name: "Resume.doc", size: "25kb", type: "Resume" } },
          ],
        },
        {
          key: "3-1",
          data: { name: "Home", size: "20kb", type: "Folder" },
          children: [
            { key: "3-1-0", data: { name: "Invoices", size: "20kb", type: "Text" } },
          ],
        },
      ],
    },
    {
      key: "4",
      data: { name: "Downloads", size: "25kb", type: "Folder" },
      children: [
        {
          key: "4-0",
          data: { name: "Spanish", size: "10kb", type: "Folder" },
          children: [
            { key: "4-0-0", data: { name: "tutorial-a1.txt", size: "5kb", type: "Text" } },
            { key: "4-0-1", data: { name: "tutorial-a2.txt", size: "5kb", type: "Text" } },
          ],
        },
        {
          key: "4-1",
          data: { name: "Travel", size: "15kb", type: "Text" },
          children: [
            { key: "4-1-0", data: { name: "Hotel.pdf", size: "10kb", type: "PDF" } },
            { key: "4-1-1", data: { name: "Flight.pdf", size: "5kb", type: "PDF" } },
          ],
        },
      ],
    },
  ]


  const [expandedKeys, setExpandedKeys] = React.useState({})

  const toggleApplications = () => {
    const _expandedKeys = { ...expandedKeys }
    if (_expandedKeys["0"]) {
      delete _expandedKeys["0"]
    } else {
      _expandedKeys["0"] = true
    }

    setExpandedKeys(_expandedKeys)
  }

  return (
    <div>
      <div className="p-card s-container mb-3">
        <h3>Basic</h3>
        <TreeTable value={nodes}>
          <Column field="name" header="Name" expander />
          <Column field="size" header="Size" />
          <Column field="type" header="Type" />
        </TreeTable>
      </div>

      <div className="p-card s-container">
        <h3>Programmatic</h3>
        <Button onClick={toggleApplications} label="Toggle Applications" />
        <TreeTable value={nodes} expandedKeys={expandedKeys}
          onToggle={e => setExpandedKeys(e.value)} style={{ marginTop: ".5em" }}
        >
          <Column field="name" header="Name" expander />
          <Column field="size" header="Size" />
          <Column field="type" header="Type" />
        </TreeTable>
      </div>
    </div>
  )
}
`

const onExpandParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.node", description: "Expanded node instance." },
]

const onCollapseParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.node", description: "Collapsed node instance." },
]

const onToggleParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.node", description: "Toggled node instance." },
]

const onSortParams = [
  { name: "event.sortField", description: "Field to sort against" },
  { name: "event.sortOrder", description: "Sort order as integer" },
  { name: "event.multiSortMeta", description: "MultiSort metadata." },
]

const onSelectParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.node", description: "Selected node instance." },
]

const onUnselectParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.node", description: "Unselected node instance." },
]

const onSelectionChangeParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Selection object" },
]

const basicExample = `
<TreeTable value={nodes}>
  <Column field="name" header="Name" expander />
  <Column field="size" header="Size" />
  <Column field="type" header="Type" />
</TreeTable>
`

const treetableExtra = (
  <div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.start.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.start.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <Highlighter language="jsx" code={basicExample} />
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.treenode.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
      <ParamsTable
        title={i18n.t(`${I18N_PREFIX}.header.treenode`)}
        description={[
          { name: "key", type: "string", description: `${I18N_PREFIX}.treenodeProps.key` },
          { name: "data", type: "any", description: `${I18N_PREFIX}.treenodeProps.data` },
          { name: "children", type: "TreeNode[]", description: `${I18N_PREFIX}.treenodeProps.children` },
          { name: "style", type: "object", description: `${I18N_PREFIX}.treenodeProps.style` },
          { name: "className", type: "string", description: `${I18N_PREFIX}.treenodeProps.className` },
          { name: "selectable", type: "boolean", description: `${I18N_PREFIX}.treenodeProps.selectable` },
          { name: "leaf", type: "boolean", description: `${I18N_PREFIX}.treenodeProps.leaf` },
        ]}
      />
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.column.title`)}</div>
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content.column.body`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
    </div>
  </div>
)

export const documentation = {
  component: "TreeTable, Column",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: treetableExtra,
  },
  code,
  scope: { TreeTable, Column, Button },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "value", type: "array", description: `${I18N_PREFIX}.props.value` },
    { name: "header", type: "any", description: `${I18N_PREFIX}.props.header` },
    { name: "footer", type: "any", description: `${I18N_PREFIX}.props.footer` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "tableStyle", type: "object", description: `${I18N_PREFIX}.props.tableStyle` },
    { name: "tableClassName", type: "string", description: `${I18N_PREFIX}.props.tableClassName` },
    { name: "expandedKeys", type: "array", description: `${I18N_PREFIX}.props.expandedKeys` },
    { name: "first", type: "number", default: 0, description: `${I18N_PREFIX}.props.first` },
    { name: "lazy", type: "boolean", default: false, description: `${I18N_PREFIX}.props.lazy` },
    { name: "sortField", type: "string", description: `${I18N_PREFIX}.props.sortField` },
    { name: "sortOrder", type: "number", description: `${I18N_PREFIX}.props.sortOrder` },
    { name: "multiSortMeta", type: "array", description: `${I18N_PREFIX}.props.multiSortMeta` },
    { name: "sortMode", type: "string", default: "single", description: `${I18N_PREFIX}.props.sortMode` },
    { name: "defaultSortOrder", type: "number", default: 1, description: `${I18N_PREFIX}.props.defaultSortOrder` },
    { name: "removableSort", type: "boolean", default: false, description: `${I18N_PREFIX}.props.removableSort` },
    { name: "selectionMode", type: "string", default: false, description: `${I18N_PREFIX}.props.selectionMode` },
    { name: "selectionKeys", type: "array", default: false, description: `${I18N_PREFIX}.props.selectionKeys` },
    { name: "emptyMessage", type: "string", description: `${I18N_PREFIX}.props.emptyMessage` },
    { name: "metaKeySelection", type: "boolean", default: true, description: `${I18N_PREFIX}.props.metaKeySelection` },
    { name: "selectOnEdit", type: "boolean", default: true, description: `${I18N_PREFIX}.props.selectOnEdit` },
    { name: "propagateSelectionUp", type: "boolean", default: true, description: `${I18N_PREFIX}.props.propagateSelectionUp` },
    { name: "propagateSelectionDown", type: "boolean", default: true, description: `${I18N_PREFIX}.props.propagateSelectionDown` },
    { name: "headerColumnGroup", type: "ColumnGroup", description: `${I18N_PREFIX}.props.headerColumnGroup` },
    { name: "footerColumnGroup", type: "ColumnGroup", description: `${I18N_PREFIX}.props.footerColumnGroup` },
    { name: "frozenHeaderColumnGroup", type: "ColumnGroup", description: `${I18N_PREFIX}.props.frozenHeaderColumnGroup` },
    { name: "frozenFooterColumnGroup", type: "ColumnGroup", description: `${I18N_PREFIX}.props.frozenFooterColumnGroup` },
    { name: "frozenWidth", type: "string", description: `${I18N_PREFIX}.props.frozenWidth` },
    { name: "scrollable", type: "boolean", default: false, description: `${I18N_PREFIX}.props.scrollable` },
    { name: "scrollHeight", type: "string", description: `${I18N_PREFIX}.props.scrollHeight` },
    { name: "autoLayout", type: "boolean", default: false, description: `${I18N_PREFIX}.props.autoLayout` },
    { name: "rowClassName", type: "function", description: `${I18N_PREFIX}.props.rowClassName` },
    { name: "loading", type: "boolean", default: false, description: `${I18N_PREFIX}.props.loading` },
    { name: "tabIndex", type: "number", description: `${I18N_PREFIX}.props.tabIndex` },
    { name: "showGridlines", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showGridlines` },
  ],
  eventDescriptionProps: [
    { name: "onExpand", params: onExpandParams, description: `${I18N_PREFIX}.props.onExpand` },
    { name: "onCollapse", params: onCollapseParams, description: `${I18N_PREFIX}.props.onCollapse` },
    { name: "onToggle", params: onToggleParams, description: `${I18N_PREFIX}.props.onToggle` },
    { name: "onSort", params: onSortParams, description: `${I18N_PREFIX}.props.onSort` },
    { name: "onSort", params: onSortParams, description: `${I18N_PREFIX}.props.onSort` },
    { name: "onSelect", params: onSelectParams, description: `${I18N_PREFIX}.props.onSelect` },
    { name: "onUnselect", params: onUnselectParams, description: `${I18N_PREFIX}.props.onUnselect` },
    { name: "onSelectionChange", params: onSelectionChangeParams, description: `${I18N_PREFIX}.props.onSelectionChange` },
  ],
  footer: (
    <ParamsTable
      title={i18n.t(`${I18N_PREFIX}.header.column`)}
      description={[
        { name: "field", type: "string", description: `${I18N_PREFIX}.columnProps.field` },
        { name: "sortField", type: "string", description: `${I18N_PREFIX}.columnProps.sortField` },
        { name: "header", type: "any", description: `${I18N_PREFIX}.columnProps.header` },
        { name: "body", type: "any", description: `${I18N_PREFIX}.columnProps.body` },
        { name: "footer", type: "any", description: `${I18N_PREFIX}.columnProps.footer` },
        { name: "sortable", type: "boolean", default: false, description: `${I18N_PREFIX}.columnProps.sortable` },
        { name: "sortFunction", type: "function", description: `${I18N_PREFIX}.columnProps.sortFunction` },
        { name: "style", type: "object", description: `${I18N_PREFIX}.columnProps.style` },
        { name: "className", type: "string", description: `${I18N_PREFIX}.columnProps.className` },
        { name: "headerStyle", type: "object", description: `${I18N_PREFIX}.columnProps.headerStyle` },
        { name: "headerClassName", type: "string", description: `${I18N_PREFIX}.columnProps.headerClassName` },
        { name: "bodyStyle", type: "object", description: `${I18N_PREFIX}.columnProps.bodyStyle` },
        { name: "bodyClassName", type: "string", description: `${I18N_PREFIX}.columnProps.bodyClassName` },
        { name: "footerStyle", type: "object", description: `${I18N_PREFIX}.columnProps.footerStyle` },
        { name: "footerClassName", type: "string", description: `${I18N_PREFIX}.columnProps.footerClassName` },
        { name: "expander", type: "boolean", default: false, description: `${I18N_PREFIX}.columnProps.expander` },
        { name: "frozen", type: "boolean", default: false, description: `${I18N_PREFIX}.columnProps.frozen` },
        { name: "colSpan", type: "number", description: `${I18N_PREFIX}.columnProps.colSpan` },
        { name: "rowSpan", type: "number", description: `${I18N_PREFIX}.columnProps.rowSpan` },
        { name: "editor", type: "function", description: `${I18N_PREFIX}.columnProps.editor` },
        { name: "cellEditValidator", type: "function", description: `${I18N_PREFIX}.columnProps.cellEditValidator` },
      ]}
    />
  ),
}
