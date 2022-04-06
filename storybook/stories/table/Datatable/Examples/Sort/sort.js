/* eslint-disable max-len */
import { DataTable, Column, Money } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.datatable.pages.sort"

const code = `
function SortDataTableExample () {
  const products = [
    { id: "1000", code: "f230fh0g3", name: "Bamboo Watch", category: "Accessories", price: 65, quantity: 24 },
    { id: "1001", code: "nvklal433", name: "Black Watch", category: "Accessories", price: 72, quantity: 61 },
    { id: "1002", code: "zz21cz3c1", name: "Blue Band", category: "Fitness", price: 165, quantity: 2 },
    { id: "1003", code: "244wgerg2", name: "Blue T-Shirt", category: "Clothing", price: 331, quantity: 25 },
    { id: "1004", code: "h456wer53", name: "Bracelet", category: "Accessories", price: 1212, quantity: 73 },
    { id: "1005", code: "av2231fwg", name: "Brown Purse", category: "Accessories", price: 23, quantity: 0 },
    { id: "1006", code: "bib36pfvm", name: "Chakra Bracelet", category: "Accessories", price: 483, quantity: 5 },
    { id: "1007", code: "mbvjkgip5", name: "Galaxy Earrings", category: "Accessories", price: 1122, quantity: 23 },
    { id: "1008", code: "vbb124btr", name: "Game Controller", category: "Electronics", price: 33, quantity: 2 },
    { id: "1009", code: "cm230f032", name: "Gaming Set", category: "Electronics", price: 99.90, quantity: 63 },
  ]

  const [multiSortMeta, setMultiSortMeta] = React.useState([{ field: "category", order: -1 }])

  const priceBodyTemplate = rowData => {
    return (
      <Money
        money={[rowData.price, "USD"]}
        precision={2}
        enforcePrecision
        delimiter={"."}
        separator={" "}
      />
    )
  }

  return (
    <div>
      <div className="p-card s-container mb-3">
        <h3>Single Column</h3>
        <DataTable value={products} responsiveLayout="scroll">
          <Column field="code" header="Code" sortable />
          <Column field="name" header="Name" sortable />
          <Column field="category" header="Category" sortable />
          <Column field="quantity" header="Quantity" sortable />
          <Column field="price" header="Price" body={priceBodyTemplate} sortable />
        </DataTable>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Multiple Columns</h3>
        <p>Use metakey to add a column to the sort selection.</p>
        <DataTable value={products} sortMode="multiple" responsiveLayout="scroll">
          <Column field="code" header="Code" sortable />
          <Column field="name" header="Name" sortable />
          <Column field="category" header="Category" sortable />
          <Column field="quantity" header="Quantity" sortable />
          <Column field="price" header="Price" body={priceBodyTemplate} sortable />
        </DataTable>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Presort</h3>
        <DataTable value={products} sortField="category" sortOrder={-1} responsiveLayout="scroll">
          <Column field="code" header="Code" sortable />
          <Column field="name" header="Name" sortable />
          <Column field="category" header="Category" sortable />
          <Column field="quantity" header="Quantity" sortable />
          <Column field="price" header="Price" body={priceBodyTemplate} sortable />
        </DataTable>
      </div>

      <div className="p-card s-container mb-3">
        <h3>Removable Sort</h3>
        <DataTable value={products} removableSort responsiveLayout="scroll">
          <Column field="code" header="Code" sortable />
          <Column field="name" header="Name" sortable />
          <Column field="category" header="Category" sortable />
          <Column field="quantity" header="Quantity" sortable />
          <Column field="price" header="Price" body={priceBodyTemplate} sortable />
        </DataTable>
      </div>

      <div className="p-card s-container">
        <h3>Sortable Disabled</h3>
        <p>Use metakey to add a column to the multiple sort selection.</p>
        <DataTable value={products} sortMode="multiple" removableSort multiSortMeta={multiSortMeta} onSort={e => setMultiSortMeta(e.multiSortMeta)} responsiveLayout="scroll">
          <Column field="code" header="Code" sortable />
          <Column field="name" header="Name" sortable />
          <Column field="category" header="Category (Disabled)" sortable sortableDisabled />
          <Column field="quantity" header="Quantity" sortable />
          <Column field="price" header="Price" body={priceBodyTemplate} sortable />
        </DataTable>
      </div>
    </div>
  )
}
`

export const sort = {
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
  scope: { DataTable, Column, Money },
}
