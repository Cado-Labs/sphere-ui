/* eslint-disable max-len */
import { TreeTable, Column, Toast } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.treetable.pages.selection"

const code = `
function SelectionTreeTableExample () {
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
    {
      key: "5",
      data: { name: "Documents", size: "100kb", type: "Link" },
    },
  ]
  const [selectedNodeKeys, setSelectedNodeKeys] = React.useState([])
  const toast = React.useRef(null)

  const onSelect = event => {
    toast.current.show({ severity: "info", summary: "Node Selected", detail: event.node.data.name })
  }

  const onUnselect = event => {
    toast.current.show({ severity: "info", summary: "Node Unselected", detail: event.node.data.name })
  }

  return (
    <div>
      <Toast ref={toast} />

      <div className="p-card s-container">
        <h5>Checkbox</h5>
        <TreeTable value={nodes} selectionMode selectionKeys={selectedNodeKeys} onSelectionChange={e => setSelectedNodeKeys(e.value)}
          onSelect={onSelect} onUnselect={onUnselect}
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

export const selection = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: (
      <Trans
        i18nKey={`${I18N_PREFIX}.description`}
        components={{ code: <code className="inline-code" /> }}
      />
    ),
  },
  code,
  scope: { TreeTable, Column, Toast },
}
