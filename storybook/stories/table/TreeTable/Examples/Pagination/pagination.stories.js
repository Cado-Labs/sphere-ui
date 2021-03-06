import React from "react"

import { StoryPage } from "@components"

import { pagination } from "./pagination"

export default {
  title: "Components / Table / TreeTable / Examples",
}

export const Pagination = context => <StoryPage {...pagination} {...context} />
