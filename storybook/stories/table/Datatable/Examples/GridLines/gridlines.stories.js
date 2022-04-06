import React from "react"

import { StoryPage } from "@components"

import { gridlines } from "./gridlines"

export default {
  title: "Components / Table / DataTable / Examples",
}

export const GridLines = context => <StoryPage {...gridlines} {...context} />

GridLines.storyName = "GridLines"
