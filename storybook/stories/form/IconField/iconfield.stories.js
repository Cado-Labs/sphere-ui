import React from "react"

import { StoryPage } from "@components"

import { iconfield } from "./iconfield"

export default {
  title: "Components / Form",
}

export const IconField = context => <StoryPage {...iconfield} {...context} />

IconField.storyName = "IconField"
