import React from "react"
import { ProgressSpinner } from "primereact/progressspinner"

export const Spinner = ({ loading, children }) => {
  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner />
      </div>
    )
  }

  return children
}
