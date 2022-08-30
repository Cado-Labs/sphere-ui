import React from "react"

import { StoryPage } from "@components"

import { documentation } from "./documentation"

export default {
  title: "Components / Display / Tree",
}

export const Documentation = context => <StoryPage {...documentation} {...context} />
