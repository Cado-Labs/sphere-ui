/* eslint-disable max-len */
import { TreeTable, Column } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

import { Highlighter } from "@components"

const I18N_PREFIX = "stories.treetable.pages.sort"

const code = `
function SortTreeTableExample () {
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
    {
      key: "6",
      data: { name: "Cloud", size: "70kb", type: "Link" },
    },
  ]

  return (
    <div>
      <div className="p-card s-container mb-3">
        <h3>Single Column Sorting</h3>
        <TreeTable value={nodes}>
          <Column field="name" header="Name" expander sortable />
          <Column field="size" header="Size" sortable />
          <Column field="type" header="Type" sortable />
        </TreeTable>
      </div>

      <div className="p-card s-container">
        <h3>Multiple Column Sorting</h3>
        <TreeTable value={nodes} sortMode="multiple">
          <Column field="name" header="Name" expander sortable />
          <Column field="size" header="Size" sortable />
          <Column field="type" header="Type" sortable />
        </TreeTable>
      </div>
    </div>
  )
}
`

const body3Example = `
<TreeTable value={nodes} sortField={sortField} sortOrder={sortOrder} onSort={(e) => {setSortField(e.sortField); setSortOrder(e.sortOrder}}>
  <Column field="name" header="Name" expander sortable />
  <Column field="size" header="Size" sortable />
  <Column field="type" header="Type" sortable />
</TreeTable>
`

const body4Example = `
let multiSortMeta = [];
multiSortMeta.push({field: 'year', order: 1});
multiSortMeta.push({field: 'brand', order: -1});

<TreeTable value={nodes} multiSortMeta={multiSortMeta} onSort={(e) => setMultiSortMeta(e.multiSortMeta)}>
    <Column field="name" header="Name" expander sortable />
    <Column field="size" header="Size" sortable />
    <Column field="type" header="Type" sortable />
</TreeTable>
`

const body5Example = `
<TreeTable value={nodes} sortField="year">
    <Column field="name" header="Name" sortable />
    <Column field="size" header="Size" sortable />
    <Column field="type" header="Type" sortable />
</TreeTable>
`

const body6Example = `
mysort(event) {
  //event.field = Field to sort
  //event.order = Sort order
}

<TreeTable value={nodes} sortField="year">
    <Column field="name" header="Name" expander sortable />
    <Column field="size" header="Size" sortable="custom" sortFunction={mysort} />
    <Column field="type" header="Type" sortable />
</TreeTable>
`

const sortExtra = (
  <div>
    <p>
      <Trans
        i18nKey={`${I18N_PREFIX}.content.body1`}
        components={{ code: <code className="inline-code" /> }}
      />
    </p>
    <Highlighter language="jsx" code={`<Column field="name" header="Name" sortable />`} />
    <p>
      <Trans
        i18nKey={`${I18N_PREFIX}.content.body2`}
        components={{ code: <code className="inline-code" /> }}
      />
    </p>
    <Highlighter language="jsx" code={`<TreeTable value={nodes} sortMode="multiple">`} />
    <p>
      <Trans
        i18nKey={`${I18N_PREFIX}.content.body3`}
        components={{ code: <code className="inline-code" /> }}
      />
    </p>
    <Highlighter language="jsx" code={body3Example} />
    <p>
      <Trans
        i18nKey={`${I18N_PREFIX}.content.body4`}
        components={{ code: <code className="inline-code" /> }}
      />
    </p>
    <Highlighter language="jsx" code={body4Example} />
    <p>
      <Trans
        i18nKey={`${I18N_PREFIX}.content.body5`}
        components={{ code: <code className="inline-code" /> }}
      />
    </p>
    <Highlighter language="jsx" code={body5Example} />
    <p>
      <Trans
        i18nKey={`${I18N_PREFIX}.content.body6`}
        components={{ code: <code className="inline-code" /> }}
      />
    </p>
    <Highlighter language="jsx" code={body6Example} />
  </div>
)

export const sort = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: (
      <Trans
        i18nKey={`${I18N_PREFIX}.description`}
        components={{ code: <code className="inline-code" /> }}
      />
    ),
    extra: sortExtra,
  },
  code,
  scope: { TreeTable, Column },
}
