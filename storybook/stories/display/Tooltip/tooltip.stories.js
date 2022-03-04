import React from "react"

import { StoryPage } from "@components"

import { tooltip } from "./tooltip"

export default {
  title: "Components / Display",
}

export const Tooltip = context => <StoryPage {...tooltip} {...context} />
