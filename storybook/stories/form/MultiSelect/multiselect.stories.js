import React from "react"

import { StoryPage } from "@components"

import { multiSelect } from "./multiSelect"

export default {
  title: "Components/ Form/ MultiSelect",
}

export const MultiSelect = context => <StoryPage {...multiSelect} {...context} />

MultiSelect.story = {
  name: "MultiSelect",
}
