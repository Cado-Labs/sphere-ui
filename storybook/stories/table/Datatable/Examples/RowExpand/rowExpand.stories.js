import React from "react"

import { StoryPage } from "@components"

import { rowExpand } from "./rowExpand"

export default {
  title: "Components / Table / DataTable / Examples",
}

export const RowExpand = context => <StoryPage {...rowExpand} {...context} />

RowExpand.storyName = "RowExpand"
