/* eslint-disable max-len */
import { TreeTable, Column } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.treetable.pages.scroll"

const code = `
function ScrollTreeTableExample () {
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
  return (
    <div>
      <div className="p-card s-container mb-3">
        <h3>Vertical</h3>
        <TreeTable value={nodes} scrollable scrollHeight="200px">
          <Column field="name" header="Name" expander />
          <Column field="size" header="Size" />
          <Column field="type" header="Type" />
        </TreeTable>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Horizontal</h3>
        <TreeTable value={nodes} scrollable style={{ width: "600px" }}>
          <Column field="name" header="Name" expander style={{ width: "350px" }} />
          <Column field="size" header="Size" style={{ width: "350px" }} />
          <Column field="type" header="Type" style={{ width: "350px" }} />
        </TreeTable>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Horizontal and Vertical</h3>
        <TreeTable value={nodes} scrollable style={{ width: "600px" }} scrollHeight="200px">
          <Column field="name" header="Name" expander style={{ width: "350px" }} />
          <Column field="size" header="Size" style={{ width: "350px" }} />
          <Column field="type" header="Type" style={{ width: "350px" }} />
        </TreeTable>
      </div>

      <div className="p-card s-container">
        <h3>Frozen Columns</h3>
        <TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
          <Column field="name" header="Name" expander frozen style={{ width: "250px", height: "57px" }} />
          <Column field="size" header="Size" style={{ width: "250px", height: "57px" }} columnKey="size_0" />
          <Column field="type" header="Type" style={{ width: "250px", height: "57px" }} columnKey="type_0" />
          <Column field="size" header="Size" style={{ width: "250px", height: "57px" }} columnKey="size_1" />
          <Column field="type" header="Type" style={{ width: "250px", height: "57px" }} columnKey="type_1" />
          <Column field="size" header="Size" style={{ width: "250px", height: "57px" }} columnKey="size_2" />
          <Column field="type" header="Type" style={{ width: "250px", height: "57px" }} columnKey="type_2" />
        </TreeTable>
      </div>
    </div>
  )
}
`

const body1Example = `
<TreeTable value={nodes} scrollable scrollHeight="200px">
    <Column field="name" header="Name" expander />
    <Column field="size" header="Size" />
    <Column field="type" header="Type" />
</TreeTable>
`

const body2Example = `
<TreeTable value={nodes} scrollable style={{ width: "600px" }}>
  <Column field="name" header="Name" expander style={{ width: "350px" }} />
  <Column field="size" header="Size" style={{ width: "350px" }} />
  <Column field="type" header="Type" style={{ width: "350px" }} />
</TreeTable>
`

const body3Example = `
<TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
  <Column field="name" header="Name" expander frozen style={{ width: "250px" }} />
  <Column field="size" header="Size" style={{ width: "250px" }} />
  <Column field="type" header="Type" style={{ width: "250px" }} />
  <Column field="size" header="Size" style={{ width: "250px" }} />
  <Column field="type" header="Type" style={{ width: "250px" }} />
  <Column field="size" header="Size" style={{ width: "250px" }} />
  <Column field="type" header="Type" style={{ width: "250px" }} />
</TreeTable>
`

const body4Example = `
<TreeTable value={nodes} scrollable frozenWidth="200px" scrollHeight="250px">
  <Column field="name" header="Name" expander frozen style={{ width: "250px", height: "25px" }} />
  <Column field="size" header="Size" style={{ width: "250px", height: "25px" }} />
  <Column field="type" header="Type" style={{ width: "250px", height: "25px" }} />
</TreeTable>
`

const scrollExtra = (
  <div>
    <p>
      <Trans
        i18nKey={`${I18N_PREFIX}.content.body1`}
        components={{ code: <code className="inline-code" /> }}
      />
    </p>
    <Highlighter language="jsx" code={body1Example} />
    <p>
      {i18n.t(`${I18N_PREFIX}.content.body2`)}
    </p>
    <Highlighter language="jsx" code={body2Example} />
    <p>
      <Trans
        i18nKey={`${I18N_PREFIX}.content.body3`}
        components={{ code: <code className="inline-code" /> }}
      />
    </p>
    <Highlighter language="jsx" code={body3Example} />
    <p>
      {i18n.t(`${I18N_PREFIX}.content.body4`)}
    </p>
    <Highlighter language="jsx" code={body4Example} />
    <p>
      <Trans
        i18nKey={`${I18N_PREFIX}.content.body5`}
        components={{ code: <code className="inline-code" /> }}
      />
    </p>
  </div>
)

export const scroll = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: (
      <Trans
        i18nKey={`${I18N_PREFIX}.description`}
        components={{ code: <code className="inline-code" /> }}
      />
    ),
    extra: scrollExtra,
  },
  code,
  scope: { TreeTable, Column },
}
