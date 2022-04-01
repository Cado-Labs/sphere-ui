/* eslint-disable max-len */
import { DataTable, Column, Toast } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.datatable.pages.selection"

const code = `
function SelectionDataTableExample () {
  const products = [
    { id: "1000", code: "f230fh0g3", name: "Bamboo Watch", category: "Accessories", quantity: 24 },
    { id: "1001", code: "nvklal433", name: "Black Watch", category: "Accessories", quantity: 61 },
    { id: "1002", code: "zz21cz3c1", name: "Blue Band", category: "Fitness", quantity: 2 },
    { id: "1003", code: "244wgerg2", name: "Blue T-Shirt", category: "Clothing", quantity: 25 },
    { id: "1004", code: "h456wer53", name: "Bracelet", category: "Accessories", quantity: 73 },
    { id: "1005", code: "av2231fwg", name: "Brown Purse", category: "Accessories", quantity: 0 },
    { id: "1006", code: "bib36pfvm", name: "Chakra Bracelet", category: "Accessories", quantity: 5 },
    { id: "1007", code: "mbvjkgip5", name: "Galaxy Earrings", category: "Accessories", quantity: 23 },
    { id: "1008", code: "vbb124btr", name: "Game Controller", category: "Electronics", quantity: 2 },
    { id: "1009", code: "cm230f032", name: "Gaming Set", category: "Electronics", quantity: 63 },
  ]

  const [selectedProduct1, setSelectedProduct1] = React.useState(null)
  const [selectedProducts2, setSelectedProducts2] = React.useState(null)
  const [selectedProducts3, setSelectedProducts3] = React.useState(null)
  const [selectedProducts4, setSelectedProducts4] = React.useState(null)
  const toast = React.useRef(null)

  const onRowSelect = event => {
    const detail = "Name: " + event.data.name
    toast.current.show({ severity: "info", summary: "Product Selected", detail })
  }

  const onRowUnselect = event => {
    const detail = "Name: " + event.data.name
    toast.current.show({ severity: "warn", summary: "Product Unselected", detail })
  }

  const onAllRowSelect = event => {
    toast.current.show({ severity: "info", summary: "All Products Selected" })
  }

  const onAllRowUnselect = event => {
    toast.current.show({ severity: "warn", summary: "All Products Unselected" })
  }

  const isSelectable = (quantity) => {
    return quantity > 10
  }

  const isRowSelectable = event => {
    return isSelectable(event.data.quantity)
  }

  const rowClassName = data => {
    return isSelectable(data.quantity) ? "" : "p-disabled"
  }

  return (
    <div>
      <Toast ref={toast} />

      <div className="p-card s-container mb-3">
        <h3>Single selection</h3>
        <DataTable value={products} selection={selectedProducts2} onSelectionChange={e => setSelectedProducts2(e.value)} dataKey="id" responsiveLayout="scroll">
          <Column selectionMode="single" headerStyle={{ width: "3em" }} />
          <Column field="code" header="Code" />
          <Column field="name" header="Name" />
          <Column field="category" header="Category" />
          <Column field="quantity" header="Quantity" />
        </DataTable>
      </div>


      <div className="p-card s-container mb-3">
        <h3>Multiple Selection</h3>
        <DataTable value={products} selection={selectedProducts3} onSelectionChange={e => setSelectedProducts3(e.value)} dataKey="id" responsiveLayout="scroll">
          <Column selectionMode="multiple" headerStyle={{ width: "3em" }} />
          <Column field="code" header="Code" />
          <Column field="name" header="Name" />
          <Column field="category" header="Category" />
          <Column field="quantity" header="Quantity" />
        </DataTable>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Events</h3>
        <p>onRowSelect, onRowUnselects, onAllRowsSelect, onAllRowsUnselect are available as selection events.</p>
        <DataTable
          value={products} selection={selectedProduct1} onSelectionChange={e => setSelectedProduct1(e.value)} dataKey="id" responsiveLayout="scroll"
          onRowSelect={onRowSelect} onRowUnselect={onRowUnselect} onAllRowsSelect={onAllRowSelect} onAllRowsUnselect={onAllRowUnselect}
        >
          <Column selectionMode="multiple" headerStyle={{ width: "3em" }} />
          <Column field="code" header="Code"/>
          <Column field="name" header="Name" />
          <Column field="category" header="Category" />
          <Column field="quantity" header="Quantity" />
        </DataTable>
      </div>

      <div className="p-card s-container">
        <h3>Controlled Selection</h3>
        <p>It can be checked whether a row or cell can be selected or not according to the specified conditions.</p>

        <DataTable value={products} selection={selectedProducts4} onSelectionChange={e => setSelectedProducts4(e.value)} dataKey="id" responsiveLayout="scroll"
          isDataSelectable={isRowSelectable} rowClassName={rowClassName}
        >
          <Column selectionMode="multiple" headerStyle={{ width: "3em" }} />
          <Column field="code" header="Code" />
          <Column field="name" header="Name" />
          <Column field="category" header="Category" />
          <Column field="quantity" header="Quantity" />
        </DataTable>
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
    extra: (
      <p>
        <Trans
          i18nKey={`${I18N_PREFIX}.content`}
          components={{ code: <code className="inline-code" /> }}
        />
      </p>
    ),
  },
  code,
  scope: { DataTable, Column, Toast },
}
