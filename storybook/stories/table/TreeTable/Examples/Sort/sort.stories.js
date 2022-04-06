import React from "react"

import { StoryPage } from "@components"

import { sort } from "./sort"

export default {
  title: "Components / Table / TreeTable / Examples",
}

export const Sort = context => <StoryPage {...sort} {...context} />
