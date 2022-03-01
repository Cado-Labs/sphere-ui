import React from "react"

import { StoryPage } from "@components"

import { dialog } from "./dialog"

export default {
  title: "Components / Display",
}

export const Dialog = context => <StoryPage {...dialog} {...context} />
