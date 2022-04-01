/* eslint-disable max-len */
import { DataTable, Column, Pagination } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.datatable.pages.pagination"

const code = `
function PaginationDataTableExample () {
  const getProducts = page => {
    const productList = [
      { code: "nvkl", name: "Black Watch", category: "Accessories", quantity: 61 },
      { code: "zz21", name: "Blue Band", category: "Fitness", quantity: 2 },
      { code: "244w", name: "Blue T-Shirt", category: "Clothing", quantity: 25 },
      { code: "h456", name: "Bracelet", category: "Accessories", quantity: 73 },
      { code: "av22", name: "Brown Purse", category: "Accessories", quantity: 0 },
    ]

    const getRandomProduct = () => productList[Math.floor(Math.random() * productList.length)]

    const products = new Array(10).fill(null).map((_value, index) => {
      const randomProduct = getRandomProduct()
      return {
        code: page.toString() + index.toString(),
        name: randomProduct.name,
        category: randomProduct.category,
        quantity: randomProduct.quantity * page * index
      }
    })

    return products
  }

  const [loading, setLoading] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const [products, setProducts] = React.useState(getProducts(page))

  const onPageClick = page => {
    setPage(page)
  }

  React.useEffect(() => {
    setLoading(true)
    // fetch data (here we use mocks)
    setTimeout(() => {
      setProducts(getProducts(page))
      setLoading(false)
    }, 1000)
  }, [page])

  return (
    <div className="p-card s-container">
      <DataTable loading={loading} value={products} header="Header" footer="Footer" showGridlines responsiveLayout="scroll">
        <Column field="code" header="Code" />
        <Column field="name" header="Name" />
        <Column field="category" header="Category" />
        <Column field="quantity" header="Quantity" />
      </DataTable>
      <Pagination
        page={page}
        pages={10}
        onPageClick={onPageClick}
      />
    </div>
  )
}
`

export const pagination = {
  header: i18n.t(`${I18N_PREFIX}.title`),
  content: {
    description: i18n.t(`${I18N_PREFIX}.description`),
  },
  code,
  scope: { DataTable, Column, Pagination },
}
