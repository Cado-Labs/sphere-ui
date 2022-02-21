import { Pagination } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

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

const onPageClickParams = [
  { name: "page", description: "Page number" },
]

export const pagination = {
  header: "Pagination",
  content: i18n.t(`${I18N_PREFIX}.content`),
  code,
  scope: { Pagination },
  descriptionProps: [
    { name: "page", type: "number", description: `${I18N_PREFIX}.props.page` },
    { name: "pages", type: "number", description: `${I18N_PREFIX}.props.pages` },
  ],
  eventDescriptionProps: [
    {
      name: "onPageClick",
      params: onPageClickParams,
      description: `${I18N_PREFIX}.props.onPageClick`,
    },
  ],
}
