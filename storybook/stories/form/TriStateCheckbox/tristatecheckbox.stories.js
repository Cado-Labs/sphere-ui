import React from "react"

import { StoryPage } from "@components"

import { tristatecheckbox } from "./tristatecheckbox"

export default {
  title: "Components / Form",
}

export const TriStateCheckbox = context => <StoryPage {...tristatecheckbox} {...context} />

TriStateCheckbox.storyName = "TriStateCheckbox"
