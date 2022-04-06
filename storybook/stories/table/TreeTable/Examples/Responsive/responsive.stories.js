import React from "react"

import { StoryPage } from "@components"

import { responsive } from "./responsive"

export default {
  title: "Components / Table / TreeTable / Examples",
}

export const Responsive = context => <StoryPage {...responsive} {...context} />
