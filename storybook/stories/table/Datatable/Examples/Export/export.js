/* eslint-disable max-len */
import { DataTable, Column, Tooltip, Button } from "@cadolabs/sphere-ui"
import { utils as xlsxUtils, write as xlsxWrite } from "xlsx"
import FileSaver from "file-saver"
import jsPDF from "jspdf"
import jsPDFAutotable from "jspdf-autotable"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.datatable.pages.export"

const code = `
// import FileSaver from "file-saver"
// import { utils as xlsxUtils, write as xlsxWrite } from "xlsx"
// import jsPDF from "jspdf"
// import 'jspdf-autotable'

function ExportDataTableExample () {
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

  const [selectedProducts, setSelectedProducts] = React.useState([])
  const dt = React.useRef(null)

  const cols = [
    { field: "code", header: "Code" },
    { field: "name", header: "Name" },
    { field: "category", header: "Category" },
    { field: "quantity", header: "Quantity" },
  ]

  const exportColumns = cols.map(col => ({ title: col.header, dataKey: col.field }))

  const exportCSV = selectionOnly => {
    dt.current.exportCSV({ selectionOnly })
  }

  const exportPdf = () => {
    const doc = new jsPDF()
    doc.autoTable(exportColumns, products)
    doc.save("products.pdf")
  }

  const exportExcel = () => {
    const worksheet = xlsxUtils.json_to_sheet(products)
    const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] }
    const excelBuffer = xlsxWrite(workbook, { bookType: "xlsx", type: "array" })
    saveAsExcelFile(excelBuffer, "products")
  }

  const saveAsExcelFile = (buffer, fileName) => {
    const EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8"
    const EXCEL_EXTENSION = ".xlsx"
    const data = new Blob([buffer], {
      type: EXCEL_TYPE,
    })
    FileSaver.saveAs(data, fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION)
  }

  const onSelectionChange = e => {
    setSelectedProducts(e.value)
  }

  const header = (
    <div className="flex align-items-center export-buttons">
      <Button type="button" icon="pi pi-file" onClick={() => exportCSV(false)} className="mr-2" data-pr-tooltip="CSV" />
      <Button type="button" icon="pi pi-file-excel" onClick={exportExcel} className="p-button-success mr-2" data-pr-tooltip="XLS" />
      <Button type="button" icon="pi pi-file-pdf" onClick={exportPdf} className="p-button-warning mr-2" data-pr-tooltip="PDF" />
      <Button type="button" icon="pi pi-filter" onClick={() => exportCSV(true)} className="p-button-info ml-auto" data-pr-tooltip="Selection Only" />
    </div>
  )

  return (
    <div className="p-card s-container">
      <h3>Export</h3>

      <Tooltip target=".export-buttons>button" position="bottom" />

      <DataTable ref={dt} value={products} header={header} dataKey="id" responsiveLayout="scroll"
        selection={selectedProducts} onSelectionChange={onSelectionChange}
      >
        <Column selectionMode="multiple" headerStyle={{ width: "3em" }} />
        {
          cols.map((col, index) => <Column exportable key={index} field={col.field} header={col.header} />)
        }
      </DataTable>
    </div>
  )
}
`

export const exportData = {
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
  scope: { DataTable, Column, Tooltip, Button, xlsxUtils, xlsxWrite, FileSaver, jsPDF, jsPDFAutotable },
}
