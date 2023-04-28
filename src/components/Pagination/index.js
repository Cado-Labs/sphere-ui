import React from "react"
import { Button } from "primereact/button"

export const Pagination = ({ page, pages, onPageClick, dataCy, dataTestId }) => {
  const prevPage = page > 1 ? page - 1 : 1
  const nextPage = (
    // eslint-disable-next-line no-nested-ternary
    pages
      ? page < pages ? page + 1 : pages
      : page + 1
  )

  const showPrevPage = prevPage > 1
  const showNextPage = pages ? nextPage < pages : true

  const showPrevDots = prevPage - 1 > 1
  const showNextDots = nextPage + 1 < pages

  const showFirstPage = page !== 1
  const showLastPage = pages && page !== pages

  const isTheFirstPage = page === 1
  const isTheLastPage = page === pages

  const goToFirst = () => onPageClick(1)
  const goToLast = () => onPageClick(pages)

  const goToPrev = () => onPageClick(prevPage)
  const goToNext = () => onPageClick(nextPage)

  return (
    <div className="p-paginator" data-cy={dataCy} data-testid={dataTestId}>
      <div className="p-paginator-pages">
        <Button
          className="p-paginator-page"
          disabled={isTheFirstPage}
          icon="pi pi-angle-left"
          onClick={goToPrev}
        />
        {showFirstPage && <Button className="p-paginator-page" onClick={goToFirst}>1</Button>}
        {showPrevDots && <span className="p-paginator-dots">...</span>}
        {showPrevPage && (
          <Button
            className="p-paginator-page"
            onClick={goToPrev}
          >
            {prevPage}
          </Button>
        )}
        <Button className="p-paginator-page p-highlight">{page}</Button>
        {showNextPage && (
          <Button
            className="p-paginator-page"
            onClick={goToNext}
          >
            {nextPage}
          </Button>
        )}
        {showNextDots && <span className="p-paginator-dots">...</span>}
        {showLastPage && <Button className="p-paginator-page" onClick={goToLast}>{pages}</Button>}
        <Button
          className="p-paginator-page"
          disabled={isTheLastPage}
          icon="pi pi-angle-right"
          onClick={goToNext}
        />
      </div>
    </div>
  )
}
