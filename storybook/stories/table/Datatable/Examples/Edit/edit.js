/* eslint-disable max-len */
import { DataTable, Column, Toast, Button, InputText, InputNumber, Dropdown, Money } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.datatable.pages.edit"

const code = `
function EditDataTableExample () {
  const products = [
    { id: "1000", code: "f230fh0g3", name: "Bamboo Watch", price: 65, quantity: 24, inventoryStatus: "INSTOCK" },
    { id: "1001", code: "nvklal433", name: "Black Watch", price: 72, quantity: 61, inventoryStatus: "INSTOCK" },
    { id: "1002", code: "zz21cz3c1", name: "Blue Band", price: 79, quantity: 2, inventoryStatus: "LOWSTOCK" },
    { id: "1003", code: "244wgerg2", name: "Blue T-Shirt", price: 29, quantity: 25, inventoryStatus: "INSTOCK" },
    { id: "1004", code: "h456wer53", name: "Bracelet", price: 15, quantity: 73, inventoryStatus: "INSTOCK" },
    { id: "1005", code: "av2231fwg", name: "Brown Purse", price: 120, quantity: 0, inventoryStatus: "OUTOFSTOCK" },
    { id: "1006", code: "bib36pfvm", name: "Chakra Bracelet", price: 32, quantity: 5, inventoryStatus: "LOWSTOCK" },
    { id: "1007", code: "mbvjkgip5", name: "Galaxy Earrings", price: 34, quantity: 23, inventoryStatus: "INSTOCK" },
    { id: "1008", code: "vbb124btr", name: "Game Controller", price: 99, quantity: 2, inventoryStatus: "LOWSTOCK" },
    { id: "1009", code: "cm230f032", name: "Gaming Set", price: 299, quantity: 63, inventoryStatus: "INSTOCK" },
  ]

  const [products1, setProducts1] = React.useState(products)
  const [products2, setProducts2] = React.useState(products)
  const [editingRows, setEditingRows] = React.useState({})
  const toast = React.useRef(null)

  const statuses = [
    { label: "In Stock", value: "INSTOCK" },
    { label: "Low Stock", value: "LOWSTOCK" },
    { label: "Out of Stock", value: "OUTOFSTOCK" },
  ]

  const getStatusLabel = status => {
    switch (status) {
      case "INSTOCK":
        return "In Stock"

      case "LOWSTOCK":
        return "Low Stock"

      case "OUTOFSTOCK":
        return "Out of Stock"

      default:
        return "NA"
    }
  }

  const onRowEditComplete1 = e => {
    const _products1 = [...products1]
    const { newData, index } = e

    _products1[index] = newData

    setProducts1(_products1)

    toast.current.show({ severity: "info", summary: "Products Updated" })
  }

  const onRowEditComplete2 = e => {
    const _products2 = [...products2]
    const { newData, index } = e

    _products2[index] = newData

    setProducts2(_products2)

    toast.current.show({ severity: "info", summary: "Products Updated" })
  }

  const onRowEditChange = e => {
    setEditingRows(e.data)
  }

  const setActiveRowIndex = index => {
    const _editingRows = { ...editingRows, ...{ [products2[index].id]: true } }
    setEditingRows(_editingRows)
  }

  const textEditor = options => {
    return <InputText type="text" value={options.value} onChange={e => options.editorCallback(e.target.value)} />
  }

  const statusEditor = options => {
    return (
      <Dropdown value={options.value} options={statuses} optionLabel="label" optionValue="value"
        onChange={e => options.editorCallback(e.value)} placeholder="Select a Status"
        itemTemplate={option => {
          return <span>{option.label}</span>
        }}
      />
    )
  }

  const priceEditor = options => {
    return <InputNumber value={options.value} onValueChange={e => options.editorCallback(e.value)} mode="currency" currency="USD" locale="en-US" />
  }

  const statusBodyTemplate = rowData => {
    return getStatusLabel(rowData.inventoryStatus)
  }

  const priceBodyTemplate = rowData => {
    return <Money money={[rowData.price, "USD"]} precision={2} enforcePrecision delimiter={"."} separator={" "} />
  }

  return (
    <div>
      <Toast ref={toast} />

      <div className="p-card s-container mb-3">
        <h3>Row Editing</h3>
        <DataTable value={products1} editMode dataKey="id" onRowEditComplete={onRowEditComplete1} responsiveLayout="scroll">
          <Column field="code" header="Code" editor={options => textEditor(options)} style={{ width: "20%" }} />
          <Column field="name" header="Name" editor={options => textEditor(options)} style={{ width: "20%" }} />
          <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={options => statusEditor(options)} style={{ width: "20%" }} />
          <Column field="price" header="Price" body={priceBodyTemplate} editor={options => priceEditor(options)} style={{ width: "20%" }} />
          <Column rowEditor headerStyle={{ width: "10%", minWidth: "8rem" }} bodyStyle={{ textAlign: "center" }} />
        </DataTable>
      </div>

      <div className="p-card s-container">
        <h3>Programmatic</h3>
        <div className="pt-2 pb-4">
          <Button onClick={() => setActiveRowIndex(0)} className="p-button-text" label="Activate 1st" />
          <Button onClick={() => setActiveRowIndex(2)} className="p-button-text" label="Activate 3rd" />
          <Button onClick={() => setActiveRowIndex(4)} className="p-button-text" label="Activate 5th" />
        </div>

        <div>
          <DataTable value={products2} editMode dataKey="id" editingRows={editingRows} onRowEditChange={onRowEditChange} onRowEditComplete={onRowEditComplete2} responsiveLayout="scroll">
            <Column field="code" header="Code" editor={options => textEditor(options)} style={{ width: "20%" }} />
            <Column field="name" header="Name" editor={options => textEditor(options)} style={{ width: "20%" }} />
            <Column field="inventoryStatus" header="Status" body={statusBodyTemplate} editor={options => statusEditor(options)} style={{ width: "20%" }} />
            <Column field="price" header="Price" body={priceBodyTemplate} editor={options => priceEditor(options)} style={{ width: "20%" }} />
            <Column rowEditor headerStyle={{ width: "10%", minWidth: "8rem" }} bodyStyle={{ textAlign: "center" }} />
          </DataTable>
        </div>
      </div>
    </div>
  )
}
`

export const edit = {
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
  scope: { DataTable, Column, Toast, Button, InputText, InputNumber, Dropdown, Money },
}
