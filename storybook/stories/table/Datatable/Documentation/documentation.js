/* eslint-disable max-len */
import { DataTable, Column, InputText, ProgressBar, Button, Tag, Avatar } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"
import { ParamsTable, Highlighter } from "@components"

const I18N_PREFIX = "stories.datatable"

const code = `
function DataTableExample () {
  const data = [
    {
      id: 11,
      name: "James Butt",
      country: {
        name: "Algeria",
        code: "dz",
      },
      company: "Benton, John B Jr",
      date: "2015-09-13",
      status: "unqualified",
      verified: true,
      activity: 17,
      representative: "Ioni Bowcher",
      balance: 70663,
    },
    {
      "id": 21,
      "name": "Josephine Darakjy",
      "country": {
          "name": "Egypt",
          "code": "eg"
      },
      "company": "Chanay, Jeffrey A Esq",
      "date": "2019-02-09",
      "status": "proposal",
      "verified": true,
      "activity": 0,
      "representative": "Amy Elsner",
      "balance": 82429
    },
    {
      "id": 31,
      "name": "Art Venere",
      "country": {
          "name": "Panama",
          "code": "pa"
      },
      "company": "Chemel, James L Cpa",
      "date": "2017-05-13",
      "status": "qualified",
      "verified": false,
      "activity": 63,
      "representative": "Asiya Javayant",
      "balance": 28334
    },
    {
      "id": 42,
      "name": "Lenna Paprocki",
      "country": {
          "name": "Slovenia",
          "code": "si"
      },
      "company": "Feltz Printing Service",
      "date": "2020-09-15",
      "status": "new",
      "verified": false,
      "activity": 37,
      "representative": "Xuxue Feng",
      "balance": 88521
    },
    {
      "id": 55,
      "name": "Donette Foller",
      "country": {
          "name": "South Africa",
          "code": "za"
      },
      "company": "Printing Dimensions",
      "date": "2016-05-20",
      "status": "proposal",
      "verified": true,
      "activity": 33,
      "representative": "Jack Kent",
      "balance": 93905
    }
  ]

  const severitiesMap = {
    unqualified: "danger",
    proposal: "info",
    qualified: "success",
    new: "secondary",
  }

  const customers = data.map(customer => ({ ...customer, date: new Date(customer.date) }))

  const [selectedCustomers, setSelectedCustomers] = React.useState(null)

  const getFlagEmoji = countryCode => {
    return countryCode.toUpperCase().replace(/./g, char =>
      String.fromCodePoint(127397 + char.charCodeAt()),
    )
  }

  const formatDate = value => {
    return value.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  }

  const formatCurrency = value => {
    return value.toLocaleString("en-US", { style: "currency", currency: "USD" })
  }

  const renderHeader = () => {
    return (
      <h3 className="m-0">Customers</h3>
    )
  }

  const countryBodyTemplate = rowData => {
    return (
      <div>
        <span className="text-2xl">{getFlagEmoji(rowData.country.code)}</span>
        <span className="ml-2">{rowData.country.name}</span>
      </div>
    )
  }

  const representativeBodyTemplate = rowData => {
    const imageUrl = "https://i.pravatar.cc/100?img=" + rowData.id
    return (
      <div>
        <Avatar alt={rowData.representative} image={imageUrl} style={{ verticalAlign: "middle" }} shape="circle" />
        <span className="ml-2">{rowData.representative}</span>
      </div>
    )
  }

  const dateBodyTemplate = rowData => {
    return formatDate(rowData.date)
  }

  const balanceBodyTemplate = rowData => {
    return formatCurrency(rowData.balance)
  }

  const statusBodyTemplate = rowData => {
    return <Tag severity={severitiesMap[rowData.status]} value={rowData.status.toUpperCase()} />
  }

  const activityBodyTemplate = rowData => {
    return <ProgressBar value={rowData.activity} showValue={false} />
  }

  const actionBodyTemplate = () => {
    return <Button type="button" icon="pi pi-pencil"  />
  }

  const header = renderHeader()

  return (
    <div className="p-card s-container">
      <DataTable value={customers} className="p-datatable-customers" header={header}
        dataKey="id" rowHover selection={selectedCustomers} onSelectionChange={e => setSelectedCustomers(e.value)}
        responsiveLayout="scroll" emptyMessage="No customers found."
      >
        <Column selectionMode headerStyle={{ width: "3em" }} />
        <Column field="name" header="Name" sortable style={{ minWidth: "14rem" }} />
        <Column field="country.name" header="Country" sortable style={{ minWidth: "14rem" }} body={countryBodyTemplate} />
        <Column header="Agent" sortable sortField="representative" style={{ minWidth: "14rem" }} body={representativeBodyTemplate} />
        <Column field="date" header="Date" sortable dataType="date" style={{ minWidth: "8rem" }} body={dateBodyTemplate} />
        <Column field="balance" header="Balance" sortable dataType="numeric" style={{ minWidth: "8rem" }} body={balanceBodyTemplate} />
        <Column field="status" header="Status" sortable style={{ minWidth: "10rem" }} body={statusBodyTemplate} />
        <Column field="activity" header="Activity" sortable style={{ minWidth: "10rem" }} body={activityBodyTemplate} />
        <Column headerStyle={{ width: "4rem", textAlign: "center" }} bodyStyle={{ textAlign: "center", overflow: "visible" }} body={actionBodyTemplate} />
      </DataTable>
    </div>
  )
}
`

const onSelectionChangeParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.value", description: "Selection object" },
]

const onSortParams = [
  { name: "event.sortField", description: "Field to sort against" },
  { name: "event.sortOrder", description: "Sort order as integer" },
  { name: "event.multiSortMeta", description: "MultiSort metadata." },
]

const onAllRowsSelectParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.data", description: "Selected rows data" },
  { name: "event.type", description: "Type of the selection, valid value is \"all\"" },
]

const onAllRowsUnselectParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.data", description: "Selected rows data" },
  { name: "event.type", description: "Type of the selection, valid value is \"all\"" },
]

const onRowSelectParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.data", description: "Selected row data" },
]

const onRowUnselectParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.data", description: "Selected row data" },
]

const onSelectAllChangeParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.checked", description: "State of the checkbox" },
]

const onValueChangeParams = [
  { name: "event.value", description: "Value displayed by the table" },
]

const rowEditValidatorParams = [
  { name: "event.data", description: "Editing row data" },
]

const onRowEditInitParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.data", description: "Editing row data" },
]

const onRowEditSaveParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.data", description: "Editing row data" },
]

const onRowEditCancelParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.data", description: "Editing row data" },
  { name: "event.index", description: "Editing row data index" },
]

const onRowEditChangeParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.data", description: "Editing row data" },
  { name: "event.index", description: "Current editing row data index" },
]

const onRowEditCompleteParams = [
  { name: "event.originalEvent", description: "Browser event" },
  { name: "event.data", description: "Original rows data" },
  { name: "event.newData", description: "Editing rows data" },
  { name: "event.field", description: "Column field" },
  { name: "event.index", description: "Current editing row data index" },
]

const onStateSaveParams = [
  { name: "event.state", description: "Table state" },
]

const onStateRestoreParams = [
  { name: "event.state", description: "Table state" },
]

const exportFunctionParams = [
  { name: "event.data", description: "Field data" },
  { name: "event.field", description: "Column field" },
  { name: "event.rowData", description: "Row data" },
  { name: "event.column", description: "Column" },
]

const basicExample = `
<DataTable value={products}>
  <Column field="code" header="Code" />
  <Column field="name" header="Name" />
  <Column field="category" header="Category" />
  <Column field="quantity" header="Quantity" />
</DataTable>
`

const datatableExtra = (
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
    </div>
    <div className="mb-3">
      <div className="title">{i18n.t(`${I18N_PREFIX}.content.column.title`)}</div>
      <p>
        {i18n.t(`${I18N_PREFIX}.content.column.body`)}
      </p>
    </div>
  </div>
)

export const documentation = {
  component: "DataTable, Column",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content.main`),
    extra: datatableExtra,
  },
  code,
  scope: { DataTable, Column, InputText, ProgressBar, Button, Tag, Avatar },
  descriptionProps: [
    { name: "id", type: "string", description: `${I18N_PREFIX}.props.id` },
    { name: "value", type: "array", description: `${I18N_PREFIX}.props.value` },
    { name: "header", type: "any", description: `${I18N_PREFIX}.props.header` },
    { name: "footer", type: "any", description: `${I18N_PREFIX}.props.footer` },
    { name: "style", type: "object", description: `${I18N_PREFIX}.props.style` },
    { name: "className", type: "string", description: `${I18N_PREFIX}.props.className` },
    { name: "tableStyle", type: "object", description: `${I18N_PREFIX}.props.tableStyle` },
    { name: "tableClassName", type: "string", description: `${I18N_PREFIX}.props.tableClassName` },
    { name: "first", type: "number", default: 0, description: `${I18N_PREFIX}.props.first` },
    { name: "lazy", type: "boolean", default: false, description: `${I18N_PREFIX}.props.lazy` },
    { name: "sortField", type: "string", description: `${I18N_PREFIX}.props.sortField` },
    { name: "sortOrder", type: "number", description: `${I18N_PREFIX}.props.sortOrder` },
    { name: "multiSortMeta", type: "array", description: `${I18N_PREFIX}.props.multiSortMeta` },
    { name: "sortMode", type: "string", default: "single", description: `${I18N_PREFIX}.props.sortMode` },
    { name: "defaultSortOrder", type: "number", default: 1, description: `${I18N_PREFIX}.props.defaultSortOrder` },
    { name: "removableSort", type: "boolean", default: false, description: `${I18N_PREFIX}.props.removableSort` },
    { name: "emptyMessage", type: "string", description: `${I18N_PREFIX}.props.emptyMessage` },
    { name: "selection", type: "any", description: `${I18N_PREFIX}.props.selection` },
    { name: "dataKey", type: "string", description: `${I18N_PREFIX}.props.dataKey` },
    { name: "selectionPageOnly", type: "boolean", default: false, description: `${I18N_PREFIX}.props.selectionPageOnly` },
    { name: "showSelectAll", type: "boolean", default: true, description: `${I18N_PREFIX}.props.showSelectAll` },
    { name: "headerColumnGroup", type: "ColumnGroup", description: `${I18N_PREFIX}.props.headerColumnGroup` },
    { name: "footerColumnGroup", type: "ColumnGroup", description: `${I18N_PREFIX}.props.footerColumnGroup` },
    { name: "scrollable", type: "boolean", default: false, description: `${I18N_PREFIX}.props.scrollable` },
    { name: "scrollHeight", type: "string", description: `${I18N_PREFIX}.props.scrollHeight` },
    { name: "scrollDirection", type: "string", default: "vertiacal", description: `${I18N_PREFIX}.props.scrollDirection` },
    { name: "frozenWidth", type: "string", description: `${I18N_PREFIX}.props.frozenWidth` },
    { name: "frozenValue", type: "string", description: `${I18N_PREFIX}.props.frozenValue` },
    { name: "csvSeparator", type: "string", default: ",", description: `${I18N_PREFIX}.props.csvSeparator` },
    { name: "exportFilename", type: "string", default: "download", description: `${I18N_PREFIX}.props.exportFilename` },
    { name: "autoLayout", type: "boolean", default: false, description: `${I18N_PREFIX}.props.autoLayout` },
    { name: "rowClassName", type: "function", description: `${I18N_PREFIX}.props.rowClassName` },
    { name: "cellClassName", type: "function", description: `${I18N_PREFIX}.props.cellClassName` },
    { name: "loading", type: "boolean", default: false, description: `${I18N_PREFIX}.props.loading` },
    { name: "tabIndex", type: "number", description: `${I18N_PREFIX}.props.tabIndex` },
    { name: "stateKey", type: "string", description: `${I18N_PREFIX}.props.stateKey` },
    { name: "stateStorage", type: "string", default: "session", description: `${I18N_PREFIX}.props.stateStorage` },
    { name: "editMode", type: "boolean", default: false, description: `${I18N_PREFIX}.props.editMode` },
    { name: "editingRows", type: "array|object", default: "cell", description: `${I18N_PREFIX}.props.editingRows` },
    { name: "showGridlines", type: "boolean", default: false, description: `${I18N_PREFIX}.props.showGridlines` },
    { name: "size", type: "string", default: "normal", description: `${I18N_PREFIX}.props.size` },
    { name: "responsiveLayout", type: "string", default: "stack", description: `${I18N_PREFIX}.props.responsiveLayout` },
    { name: "breakpoint", type: "string", default: "960px", description: `${I18N_PREFIX}.props.breakpoint` },
    { name: "showSelectionElement", type: "function", description: `${I18N_PREFIX}.props.showSelectionElement` },
    { name: "isDataSelectable", type: "function", description: `${I18N_PREFIX}.props.isDataSelectable` },
  ],
  eventDescriptionProps: [
    { name: "onSelectionChange", params: onSelectionChangeParams, description: `${I18N_PREFIX}.props.onSelectionChange` },
    { name: "onSort", params: onSortParams, description: `${I18N_PREFIX}.props.onSort` },
    { name: "onAllRowsSelect", params: onAllRowsSelectParams, description: `${I18N_PREFIX}.props.onAllRowsSelect` },
    { name: "onAllRowsUnselect", params: onAllRowsUnselectParams, description: `${I18N_PREFIX}.props.onAllRowsUnselect` },
    { name: "onRowSelect", params: onRowSelectParams, description: `${I18N_PREFIX}.props.onRowSelect` },
    { name: "onRowUnselect", params: onRowUnselectParams, description: `${I18N_PREFIX}.props.onRowUnselect` },
    { name: "onSelectAllChange", params: onSelectAllChangeParams, description: `${I18N_PREFIX}.props.onSelectAllChange` },
    { name: "onValueChange", params: onValueChangeParams, description: `${I18N_PREFIX}.props.onValueChange` },
    { name: "rowEditValidator", params: rowEditValidatorParams, description: `${I18N_PREFIX}.props.rowEditValidator` },
    { name: "onRowEditInit", params: onRowEditInitParams, description: `${I18N_PREFIX}.props.onRowEditInit` },
    { name: "onRowEditSave", params: onRowEditSaveParams, description: `${I18N_PREFIX}.props.onRowEditSave` },
    { name: "onRowEditCancel", params: onRowEditCancelParams, description: `${I18N_PREFIX}.props.onRowEditCancel` },
    { name: "onRowEditChange", params: onRowEditChangeParams, description: `${I18N_PREFIX}.props.onRowEditChange` },
    { name: "onRowEditComplete", params: onRowEditCompleteParams, description: `${I18N_PREFIX}.props.onRowEditComplete` },
    { name: "onStateSave", params: onStateSaveParams, description: `${I18N_PREFIX}.props.onStateSave` },
    { name: "onStateRestore", params: onStateRestoreParams, description: `${I18N_PREFIX}.props.onStateRestore` },
    { name: "exportFunction", params: exportFunctionParams, description: `${I18N_PREFIX}.props.exportFunction` },
  ],
  footer: (
    <ParamsTable
      title={i18n.t(`${I18N_PREFIX}.header.column`)}
      description={[
        { name: "field", type: "string", description: `${I18N_PREFIX}.columnProps.field` },
        { name: "sortField", type: "string", description: `${I18N_PREFIX}.columnProps.sortField` },
        { name: "exportField", type: "string", description: `${I18N_PREFIX}.columnProps.exportField` },
        { name: "header", type: "any", description: `${I18N_PREFIX}.columnProps.header` },
        { name: "body", type: "any", description: `${I18N_PREFIX}.columnProps.body` },
        { name: "footer", type: "any", description: `${I18N_PREFIX}.columnProps.footer` },
        { name: "sortable", type: "boolean", default: false, description: `${I18N_PREFIX}.columnProps.sortable` },
        { name: "sortFunction", type: "function", description: `${I18N_PREFIX}.columnProps.sortFunction` },
        { name: "dataType", type: "string", description: `${I18N_PREFIX}.columnProps.dataType` },
        { name: "align", type: "string", description: `${I18N_PREFIX}.columnProps.align` },
        { name: "alignHeader", type: "string", description: `${I18N_PREFIX}.columnProps.alignHeader` },
        { name: "alignFrozen", type: "string", default: "left", description: `${I18N_PREFIX}.columnProps.alignFrozen` },
        { name: "hidden", type: "boolean", default: false, description: `${I18N_PREFIX}.columnProps.hidden` },
        { name: "style", type: "object", description: `${I18N_PREFIX}.columnProps.style` },
        { name: "className", type: "string", description: `${I18N_PREFIX}.columnProps.className` },
        { name: "headerStyle", type: "object", description: `${I18N_PREFIX}.columnProps.headerStyle` },
        { name: "headerClassName", type: "string", description: `${I18N_PREFIX}.columnProps.headerClassName` },
        { name: "bodyStyle", type: "object", description: `${I18N_PREFIX}.columnProps.bodyStyle` },
        { name: "bodyClassName", type: "string", description: `${I18N_PREFIX}.columnProps.bodyClassName` },
        { name: "footerStyle", type: "object", description: `${I18N_PREFIX}.columnProps.footerStyle` },
        { name: "footerClassName", type: "string", description: `${I18N_PREFIX}.columnProps.footerClassName` },
        { name: "frozen", type: "boolean", default: false, description: `${I18N_PREFIX}.columnProps.frozen` },
        { name: "colSpan", type: "number", description: `${I18N_PREFIX}.columnProps.colSpan` },
        { name: "rowSpan", type: "number", description: `${I18N_PREFIX}.columnProps.rowSpan` },
        { name: "editor", type: "function", description: `${I18N_PREFIX}.columnProps.editor` },
        { name: "cellEditValidator", type: "function", description: `${I18N_PREFIX}.columnProps.cellEditValidator` },
        { name: "cellEditValidatorEvent", type: "function", description: `${I18N_PREFIX}.columnProps.cellEditValidatorEvent` },
        { name: "onBeforeCellEditHide", type: "function", description: `${I18N_PREFIX}.columnProps.onBeforeCellEditHide` },
        { name: "onBeforeCellEditShow", type: "function", description: `${I18N_PREFIX}.columnProps.onBeforeCellEditShow` },
        { name: "onCellEditInit", type: "function", description: `${I18N_PREFIX}.columnProps.onCellEditInit` },
        { name: "onCellEditComplete", type: "function", description: `${I18N_PREFIX}.columnProps.onCellEditComplete` },
        { name: "onCellEditCancel", type: "function", description: `${I18N_PREFIX}.columnProps.onCellEditCancel` },
        { name: "rowReorder", type: "boolean", default: false, description: `${I18N_PREFIX}.columnProps.rowReorder` },
        { name: "rowEditor", type: "boolean", default: false, description: `${I18N_PREFIX}.columnProps.rowEditor` },
        { name: "exportable", type: "boolean", default: true, description: `${I18N_PREFIX}.columnProps.exportable` },
        { name: "selectionMode", type: "boolean", default: false, description: `${I18N_PREFIX}.columnProps.exportable` },
      ]}
    />
  ),
}
