import { Pagination } from "@cadolabs/sphere-ui"

import i18n from "@i18n"

const I18N_PREFIX = "stories.pagination"

const code = `
function PaginationExample () {
  const [page1, setPage1] = React.useState(1)
  const [page2, setPage2] = React.useState(1)

  return (
    <div>
      <div className="p-card s-container mb-3">
        <h3>Basic Pagination</h3>
        <Pagination
          page={page1}
          pages={10}
          onPageClick={setPage1}
        />
      </div>

      <div className="p-card s-container">
        <h3>Infinite Pagination</h3>
        <Pagination
          page={page2}
          onPageClick={setPage2}
        />
      </div>
    </div>
  )
}
`

const onPageClickParams = [
  { name: "page", description: "Page number" },
]

export const pagination = {
  component: "Pagination",
  content: {
    description: i18n.t(`${I18N_PREFIX}.content`),
  },
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
