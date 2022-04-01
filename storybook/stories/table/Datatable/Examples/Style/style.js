/* eslint-disable max-len */
import { DataTable, Column, classNames } from "@cadolabs/sphere-ui"

import i18n from "@i18n"
import { Highlighter } from "@components"

const I18N_PREFIX = "stories.datatable.pages.style"

const code = `
function StyleDataTableExample () {
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

  const rowClass = data => {
    return {
      "row-accessories": data.category === "Accessories",
    }
  }

  const stockBodyTemplate = rowData => {
    const stockClassName = classNames({
      outofstock: rowData.quantity === 0,
      lowstock: rowData.quantity > 0 && rowData.quantity < 10,
      instock: rowData.quantity > 10,
    })

    return (
      <div className={stockClassName}>
        {rowData.quantity}
      </div>
    )
  }

  return (
    <div className="datatable-style-demo">
      <div className="p-card s-container">
        <DataTable value={products} rowClassName={rowClass} responsiveLayout="scroll">
          <Column field="code" header="Code" />
          <Column field="name" header="Name" />
          <Column field="category" header="Category" />
          <Column field="quantity" header="Quantity" body={stockBodyTemplate} />
        </DataTable>
      </div>
    </div>
  )
}
`

const cssExample = `
/* DataTableDemo.css */

.datatable-style-demo .outofstock {
  font-weight: 700;
  color: #ff5252;
  text-decoration: line-through;
}

.datatable-style-demo .lowstock {
  font-weight: 700;
  color: #ffa726;
}

.datatable-style-demo .instock {
  font-weight: 700;
  color: #66bb6a;
}

.datatable-style-demo .row-accessories {
  background-color: rgba(0, 0, 0, .15) !important;
}
`

export const style = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: i18n.t(`${I18N_PREFIX}.description`),
  },
  code,
  scope: { DataTable, Column, classNames },
  footer: (
    <Highlighter language="css" code={cssExample} />
  ),
}
