import React from "react"

import { StoryPage } from "@components"

import * as descriptions from "./descriptions"

export default {
  title: "Components/ Display / Pagination",
}

export const Pagination = context => <StoryPage {...descriptions.pagination} {...context} />
