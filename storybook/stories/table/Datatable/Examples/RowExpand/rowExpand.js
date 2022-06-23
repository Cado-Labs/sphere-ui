/* eslint-disable max-len */
import { DataTable, Column, Toast, Button } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.datatable.pages.rowExpand"

const code = `
function RowExpandDataTableExample () {
  const products = [
    {
      id: "1000",
      code: "f230fh0g3",
      name: "Bamboo Watch",
      category: "Accessories",
      quantity: 24,
      orders: [
        { id: 111, customer: "Jack", date: "2020-09-13" },
        { id: 112, customer: "Ben", date: "2020-09-14" },
        { id: 113, customer: "Joe", date: "2020-09-15" },
      ],
    },
    {
      id: "1001",
      code: "nvklal433",
      name: "Black Watch",
      category: "Accessories",
      quantity: 61,
      orders: [
        { id: 211, customer: "Sam", date: "2020-10-13" },
        { id: 212, customer: "Kate", date: "2020-10-14" },
      ],
    },
    {
      id: "1002",
      code: "zz21cz3c1",
      name: "Blue Band",
      category: "Fitness",
      quantity: 2,
      orders: [
        { id: 311, customer: "Susan", date: "2021-02-01" },
      ],
    },
  ]

  const [expandedRows, setExpandedRows] = React.useState(null)
  const toast = React.useRef(null)
  const [isMounted, setIsMounted] = React.useState(false)

  React.useEffect(() => {
    setIsMounted(true)
  }, [])

  React.useEffect(() => {
    if (isMounted) {
      const summary = expandedRows !== null ? "All Rows Expanded" : "All Rows Collapsed"
      console.log("summary", summary)
      toast.current.show({ severity: "success", summary, life: 3000 })
    }
  }, [expandedRows])

  const onRowExpand = event => {
    toast.current.show({ severity: "info", summary: "Product Expanded", detail: event.data.name, life: 3000 })
  }

  const onRowCollapse = event => {
    toast.current.show({ severity: "success", summary: "Product Collapsed", detail: event.data.name, life: 3000 })
  }

  const expandAll = () => {
    const _expandedRows = {}
    products.forEach(p => _expandedRows[p.id] = true)
    console.log("_expandedRows", _expandedRows)
    setExpandedRows(_expandedRows)
  }

  const collapseAll = () => {
    setExpandedRows(null)
  }

  const header = (
    <div className="table-header-container">
      <Button icon="pi pi-plus" label="Expand All" onClick={expandAll} className="mr-2" />
      <Button icon="pi pi-minus" label="Collapse All" onClick={collapseAll} />
    </div>
  )

  const rowExpansionTemplate = data => {
    return (
      <DataTable value={data.orders} responsiveLayout="scroll">
        <Column field="id" header="Order Id" />
        <Column field="customer" header="Customer" />
        <Column field="date" header="Date" />
      </DataTable>
    )
  }

  return (
    <div className="p-card s-container">
      <Toast ref={toast} />

      <DataTable
        value={products}
        dataKey="id"
        header={header}
        responsiveLayout="scroll"
        expandedRows={expandedRows}
        onRowToggle={e => setExpandedRows(e.data)}
        onRowExpand={onRowExpand}
        onRowCollapse={onRowCollapse}
        rowExpansionTemplate={rowExpansionTemplate}
      >
        <Column expander />
        <Column field="code" header="Code" />
        <Column field="name" header="Name" />
        <Column field="category" header="Category" />
        <Column field="quantity" header="Quantity" />
      </DataTable>
    </div>
  )
}
`

export const rowExpand = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: i18n.t(`${I18N_PREFIX}.description`),
  },
  code,
  scope: { DataTable, Column, Toast, Button },
}
