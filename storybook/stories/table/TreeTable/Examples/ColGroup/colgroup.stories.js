import React from "react"

import { StoryPage } from "@components"

import { colgroup } from "./colgroup"

export default {
  title: "Components / Table / TreeTable / Examples",
}

export const ColGroup = context => <StoryPage {...colgroup} {...context} />

ColGroup.storyName = "ColGroup"
