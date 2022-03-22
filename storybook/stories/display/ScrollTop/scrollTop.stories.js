import React from "react"

import { StoryPage } from "@components"

import { scrollTop } from "./scrollTop"

export default {
  title: "Components / Display",
}

export const ScrollTop = context => <StoryPage {...scrollTop} {...context} />

ScrollTop.storyName = "ScrollTop"
