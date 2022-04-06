/* eslint-disable max-len */
import { TreeTable, Column } from "@cadolabs/sphere-ui"

import i18n from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.treetable.pages.responsive"

const code = `
function TemplatingTreeTableExample () {
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
      data: { name: "Cloud", size: "20kb", type: "Link" },
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

  const nameTemplate = node => {
    return (
      <React.Fragment>
        <span>{node.data.name}</span>
        <span className="sm-visible"> {node.data.size}</span>
        <span className="sm-visible"> {node.data.type}</span>
      </React.Fragment>
    )
  }

  return (
    <div className="treetable-responsive-demo p-card s-container">
      <div className="m-2">
        When the screen is too small the table consists of only one column.
      </div>
      <TreeTable value={nodes} header="Responsive">
        <Column field="name" header="Name" body={nameTemplate} expander />
        <Column field="size" header="Size" headerClassName="sm-invisible" bodyClassName="sm-invisible" />
        <Column field="type" header="Type" headerClassName="sm-invisible" bodyClassName="sm-invisible" />
      </TreeTable>
    </div>
  )
}
`

const cssExample = `
/* TreeTableDemo.css */

.treetable-responsive-demo .sm-visible {
  display: none;
}

@media screen and (max-width: 40em) {
  .treetable-responsive-demo .sm-invisible {
      display: none;
  }

  .treetable-responsive-demo .sm-visible {
      display: inline;
      margin-right: .5rem;
  }
}
`

export const responsive = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: i18n.t(`${I18N_PREFIX}.description`),
  },
  code,
  scope: { TreeTable, Column },
  footer: (
    <Highlighter language="css" code={cssExample} />
  ),
}
