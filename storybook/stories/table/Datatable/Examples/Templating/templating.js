/* eslint-disable max-len */
import { DataTable, Column, Button, Tag, Money } from "@cadolabs/sphere-ui"

import i18n, { Trans } from "@i18n"

const I18N_PREFIX = "stories.datatable.pages.templating"

const code = `
function TemplatingDataTableExample () {
  const products = [
    { id: "1000", name: "Bamboo Watch", image: "bamboo-watch.jpg", price: 65, category: "Accessories", inventoryStatus: "INSTOCK", rating: 5 },
    { id: "1001", name: "Black Watch", image: "black-watch.jpg", price: 72, category: "Accessories", inventoryStatus: "INSTOCK", rating: 4 },
    { id: "1002", name: "Blue Band", image: "blue-band.jpg", price: 79, category: "Fitness", inventoryStatus: "LOWSTOCK", rating: 3 },
    { id: "1003", name: "Blue T-Shirt", image: "blue-t-shirt.jpg", price: 29, category: "Clothing", inventoryStatus: "INSTOCK", rating: 5 },
    { id: "1004", name: "Bracelet", image: "bracelet.jpg", price: 15, category: "Accessories", inventoryStatus: "INSTOCK", rating: 4 },
    { id: "1005", name: "Brown Purse", image: "brown-purse.jpg", price: 120, category: "Accessories", inventoryStatus: "OUTOFSTOCK", rating: 4 },
    { id: "1006", name: "Chakra Bracelet", image: "chakra-bracelet.jpg", price: 32, category: "Accessories", inventoryStatus: "LOWSTOCK", rating: 3 },
    { id: "1007", name: "Galaxy Earrings", image: "galaxy-earrings.jpg", price: 34, category: "Accessories", inventoryStatus: "INSTOCK", rating: 5 },
    { id: "1008", name: "Game Controller", image: "game-controller.jpg", price: 99, category: "Electronics", inventoryStatus: "LOWSTOCK", rating: 4 },
    { id: "1009", name: "Gaming Set", image: "gaming-set.jpg", price: 299, category: "Electronics", inventoryStatus: "INSTOCK", rating: 3 },
  ]

  const severitiesMap = {
    outofstock: "danger",
    lowstock: "warning",
    instock: "success",
  }

  const imageBodyTemplate = rowData => {
    const imageUrl = "https://www.primefaces.org/primereact/images/product/" + rowData.image
    return (
      <img
        src={imageUrl}
        onError={e => e.target.src = "https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png"}
        alt={rowData.image}
        width="100"
      />
    )
  }

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

  const ratingBodyTemplate = rowData => {
    const rating = rowData.rating + " / 5"
    return <div>{rating}</div>
  }

  const statusBodyTemplate = rowData => {
    return <Tag severity={severitiesMap[rowData.inventoryStatus.toLowerCase()]} value={rowData.inventoryStatus} />
  }

  const header = (
    <div className="flex align-items-center justify-content-between">
      Products
      <Button icon="pi pi-refresh" />
    </div>
  )

  const footer = ("Total: " + products.length)

  return (
    <div className="p-card s-container">
      <DataTable value={products} header={header} footer={footer} responsiveLayout="scroll">
        <Column field="name" header="Name" />
        <Column header="Image" body={imageBodyTemplate} />
        <Column field="price" header="Price" body={priceBodyTemplate} />
        <Column field="category" header="Category" />
        <Column field="rating" header="Reviews" body={ratingBodyTemplate} />
        <Column header="Status" body={statusBodyTemplate} />
      </DataTable>
    </div>
  )
}
`

export const templating = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: i18n.t(`${I18N_PREFIX}.description`),
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
  scope: { DataTable, Column, Button, Tag, Money },
}
