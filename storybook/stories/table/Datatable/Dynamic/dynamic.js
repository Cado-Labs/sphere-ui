/* eslint-disable max-len */
import { DataTable, Column } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.datatable.pages.dynamic"

const code = `
function DynamicDataTableExample () {
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

  const columns = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ]

  const dynamicColumns = columns.map((col, i) => {
    return <Column key={col.field} field={col.field} header={col.header} />
  })

  return (
    <div className="p-card s-container">
      <DataTable value={products} responsiveLayout="scroll">
        {dynamicColumns}
      </DataTable>
    </div>
  )
}
`

export const dynamic = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: i18n.t(`${I18N_PREFIX}.body`),
  },
  code,
  scope: { DataTable, Column },
}
