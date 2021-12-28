import React from "react"
import { ProgressSpinner } from "primereact/progressspinner"

export const Spinner = ({ loading, children, ...props }) => {
  if (loading) {
    return (
      <div className="flex justify-content-center">
        <ProgressSpinner {...props} />
      </div>
    )
  }

  return children
}
