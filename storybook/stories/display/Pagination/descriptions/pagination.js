/* eslint-disable max-len */
import { Pagination } from "@cadolabs/sphere-ui"

const I18N_PREFIX = "stories.pagination"

const code = `
function PaginationExample () {
  const [page, setPage] = React.useState(1)

  return (
    <Pagination
      page={page}
      pages={10}
      onPageClick={setPage}
    />
  )
}
`

export const pagination = {
  header: "Pagination",
  content: `${I18N_PREFIX}.content`,
  code,
  scope: { Pagination },
  descriptionProps: [
    { name: "page", type: "number", description: `${I18N_PREFIX}.props.page` },
    { name: "pages", type: "number", description: `${I18N_PREFIX}.props.pages` },
    { name: "onPageClick", type: "function", description: `${I18N_PREFIX}.props.onPageClick` },
  ],
}
