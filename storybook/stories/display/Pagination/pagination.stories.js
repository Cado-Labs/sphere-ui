import React from "react"

import { StoryPage } from "@components"

import { pagination } from "./pagination"

export default {
  title: "Components / Display",
}

export const Pagination = context => <StoryPage {...pagination} {...context} />
