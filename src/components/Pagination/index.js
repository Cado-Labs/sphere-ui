import React from "react"
import { Button } from "primereact/button"

export const Pagination = ({ page, pages, onPageClick }) => {
  const prevPage = page > 1 ? page - 1 : 1
  const nextPage = page < pages ? page + 1 : pages

  const showPrevPage = prevPage > 1
  const showNextPage = nextPage < pages

  const showPrevDots = prevPage - 1 > 1
  const showNextDots = nextPage + 1 < pages

  const showFirstPage = page !== 1
  const showLastPage = page !== pages

  const goToFirst = () => onPageClick(1)
  const goToLast = () => onPageClick(pages)

  const goToPrev = () => onPageClick(prevPage)
  const goToNext = () => onPageClick(nextPage)

  return (
    <div className="p-paginator">
      <div className="p-paginator-pages">
        <Button
          className="p-paginator-page"
          disabled={!showPrevPage}
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
          disabled={!showNextPage}
          icon="pi pi-angle-right"
          onClick={goToNext}
        />
      </div>
    </div>
  )
}
