/* eslint-disable max-len */
import { TreeTable, Column } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.treetable.pages.style"

const code = `
function StyleTreeTableExample () {
  const nodes = [{
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
  {
    key: "4",
    data: { name: "Downloads", size: "25kb", type: "Folder" },
    children: [ {
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

  const sizeTemplate = node => {
    const size = node.data.size
    const fontWeight = parseInt(size, 10) > 75 ? "bold" : "normal"

    return <span style={{ fontWeight }}>{size}</span>
  }

  const rowClassName = node => {
    return { "p-highlight": (node.children && node.children.length === 3) }
  }

  return (
    <div className="p-card s-container">
      <p>This treetable highlights cells with a bolder font weight whose size value is greater than 75kb and highlights rows who has at 3 child rows.</p>
      <TreeTable value={nodes} rowClassName={rowClassName}>
        <Column field="name" header="Name" expander />
        <Column field="size" header="Size" body={sizeTemplate} />
        <Column field="type" header="Type" />
      </TreeTable>
    </div>
  )
}
`

export const style = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: i18n.t(`${I18N_PREFIX}.description`),
  },
  code,
  scope: { TreeTable, Column },
}
