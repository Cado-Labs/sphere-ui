import React from "react"

import { StoryPage } from "@components"

import { exportData } from "./export"

export default {
  title: "Components / Table / DataTable",
}

export const Export = context => <StoryPage {...exportData} {...context} />
