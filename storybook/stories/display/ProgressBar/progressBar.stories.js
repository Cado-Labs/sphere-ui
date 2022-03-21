import React from "react"

import { StoryPage } from "@components"

import { progressBar } from "./progressBar"

export default {
  title: "Components / Display",
}

export const ProgressBar = context => <StoryPage {...progressBar} {...context} />

ProgressBar.storyName = "ProgressBar"
