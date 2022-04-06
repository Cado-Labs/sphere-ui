/* eslint-disable max-len */
import { TreeTable, Column, Pagination } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.treetable.pages.pagination"

const code = `
function PaginationTreeTableExample () {
  const [nodes, setNodes] = React.useState([])
  const [loading, setLoading] = React.useState(false)
  const [page, setPage] = React.useState(1)

  React.useEffect(() => {
    setLoading(true)
    // fetch data (here we use mocks)
    setTimeout(() => {
      const files = getItems(page)
      setNodes(files)
      setLoading(false)
    }, 1000)

  }, [page])

  const getItems = page => {
    const files = []
    for (let i = 0; i < 10; i += 1) {
      const node = {
        key: i,
        data: {
          name: "Item " + page + i,
          size: Math.floor(Math.random() * 1000) + "1kb",
          type: "Type " + page + i,
        },
        children: [
          {
            key: page + i + " - 0",
            data: {
              name: "Item " + page + i + " - 0",
              size: Math.floor(Math.random() * 1000) + "1kb",
              type: "Type " + page + i,
            },
          },
        ],
      }

      files.push(node)
    }

    return files
  }

  const onPageClick = page => {
    setPage(page)
  }

  return (
    <div className="p-card s-container">
      <TreeTable loading={loading} value={nodes}>
        <Column field="name" header="Name" expander />
        <Column field="size" header="Size" />
        <Column field="type" header="Type" />
      </TreeTable>
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
  scope: { TreeTable, Column, Pagination },
}
