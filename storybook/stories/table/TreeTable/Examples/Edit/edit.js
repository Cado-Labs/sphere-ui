/* eslint-disable max-len */
import { TreeTable, Column, Toast, InputText } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.treetable.pages.edit"

const code = `
function EditTreeTableExample () {
  const data = [{
    key: "0",
    data: { name: "Applications", size: "100kb", type: "Folder" },
    children: [
      { key: "0-0",
        data: { name: "React", size: "25kb", type: "Folder" },
        children: [
          { key: "0-0-0", data: { name: "react.app", size: "10kb", type: "Application" } },
          { key: "0-0-1", data: { name: "native.app", size: "10kb", type: "Application" } },
          { key: "0-0-2", data: { name: "mobile.app", size: "5kb", type: "Application" },
          },
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
          { key: "3-1-0", data: { name: "Invoices", size: "20kb", type: "Text" },
          },
        ],
      },
    ],
  },
  ]

  const [nodes, setNodes] = React.useState(data)

  const onEditorValueChange = (options, value) => {
    const newNodes = JSON.parse(JSON.stringify(nodes))
    const editedNode = findNodeByKey(newNodes, options.node.key)
    editedNode.data[options.field] = value

    setNodes(newNodes)
  }

  const findNodeByKey = (nodes, key) => {
    const path = key.split("-")
    let node

    while (path.length) {
      const list = node ? node.children : nodes
      node = list[parseInt(path[0], 10)]
      path.shift()
    }

    return node
  }

  const inputTextEditor = options => {
    return (
      <InputText type="text" value={options.rowData[options.field]}
        onChange={e => onEditorValueChange(options, e.target.value)}
      />
    )
  }

  const sizeEditor = options => {
    return inputTextEditor(options)
  }

  const typeEditor = options => {
    return inputTextEditor(options)
  }

  const requiredValidator = e => {
    const props = e.columnProps
    const value = props.node.data[props.field]

    return value && value.length > 0
  }

  return (
    <div className="p-card s-container">
      <TreeTable value={nodes}>
        <Column field="name" header="Name" expander style={{ height: "3.5em" }} />
        <Column field="size" header="Size" editor={sizeEditor} cellEditValidator={requiredValidator} style={{ height: "3.5em" }} />
        <Column field="type" header="Type" editor={typeEditor} style={{ height: "3.5em" }} />
      </TreeTable>
    </div>
  )
}
`

export const edit = {
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
  scope: { TreeTable, Column, Toast, InputText },
}
