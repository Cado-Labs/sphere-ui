/* eslint-disable max-len */
import { DataTable, Column, ColumnGroup, Row, Money } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.datatable.pages.colgroup"

const code = `
function ColGroupDataTableExample () {
  const sales = [
    { product: "Bamboo Watch", lastYearSale: 51, thisYearSale: 40, lastYearProfit: 54406, thisYearProfit: 43342 },
    { product: "Black Watch", lastYearSale: 83, thisYearSale: 9, lastYearProfit: 423132, thisYearProfit: 312122 },
    { product: "Blue Band", lastYearSale: 38, thisYearSale: 5, lastYearProfit: 12321, thisYearProfit: 8500 },
    { product: "Blue T-Shirt", lastYearSale: 49, thisYearSale: 22, lastYearProfit: 745232, thisYearProfit: 65323 },
    { product: "Brown Purse", lastYearSale: 17, thisYearSale: 79, lastYearProfit: 643242, thisYearProfit: 500332 },
    { product: "Chakra Bracelet", lastYearSale: 52, thisYearSale: 65, lastYearProfit: 421132, thisYearProfit: 150005 },
    { product: "Galaxy Earrings", lastYearSale: 82, thisYearSale: 12, lastYearProfit: 131211, thisYearProfit: 100214 },
    { product: "Game Controller", lastYearSale: 44, thisYearSale: 45, lastYearProfit: 66442, thisYearProfit: 53322 },
    { product: "Gaming Set", lastYearSale: 90, thisYearSale: 56, lastYearProfit: 765442, thisYearProfit: 296232 },
    { product: "Gold Phone Case", lastYearSale: 75, thisYearSale: 54, lastYearProfit: 21212, thisYearProfit: 12533 },
  ]

  const lastYearSaleBodyTemplate = rowData => {
    return rowData.lastYearSale + "%"
  }

  const thisYearSaleBodyTemplate = rowData => {
    return rowData.thisYearSale + "%"
  }

  const lastYearProfitBodyTemplate = rowData => {
    return formatCurrency(rowData.lastYearProfit)
  }

  const thisYearProfitBodyTemplate = rowData => {
    return formatCurrency(rowData.thisYearProfit)
  }

  const formatCurrency = value => {
    return <Money money={[value, "USD"]} precision={2} enforcePrecision delimiter={"."} separator={" "} />
  }

  const lastYearTotal = () => {
    let total = 0
    sales.forEach(sale => {
      total += sale.lastYearProfit
    })

    return formatCurrency(total)
  }

  const thisYearTotal = () => {
    let total = 0
    sales.forEach(sale => {
      total += sale.thisYearProfit
    })

    return formatCurrency(total)
  }

  const headerGroup = (
    <ColumnGroup>
      <Row>
        <Column header="Product" rowSpan={3} />
        <Column header="Sale Rate" colSpan={4} />
      </Row>
      <Row>
        <Column header="Sales" colSpan={2} />
        <Column header="Profits" colSpan={2} />
      </Row>
      <Row>
        <Column header="Last Year" sortable field="lastYearSale" />
        <Column header="This Year" sortable field="thisYearSale" />
        <Column header="Last Year" sortable field="lastYearProfit" />
        <Column header="This Year" sortable field="thisYearProfit" />
      </Row>
    </ColumnGroup>
  )

  const footerGroup = (
    <ColumnGroup>
      <Row>
        <Column footer="Totals:" colSpan={3} footerStyle={{ textAlign: "right" }} />
        <Column footer={lastYearTotal} />
        <Column footer={thisYearTotal} />
      </Row>
    </ColumnGroup>
  )

  return (
    <div className="p-card s-container">
      <DataTable value={sales} headerColumnGroup={headerGroup} footerColumnGroup={footerGroup} responsiveLayout="scroll">
        <Column field="product" />
        <Column field="lastYearSale" body={lastYearSaleBodyTemplate} />
        <Column field="thisYearSale" body={thisYearSaleBodyTemplate} />
        <Column field="lastYearProfit" body={lastYearProfitBodyTemplate} />
        <Column field="thisYearProfit" body={thisYearProfitBodyTemplate} />
      </DataTable>
    </div>
  )
}
`

export const colgroup = {
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
  scope: { DataTable, Column, ColumnGroup, Row, Money },
}
