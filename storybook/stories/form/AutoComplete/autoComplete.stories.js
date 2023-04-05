import React from "react"

import { StoryPage } from "@components"

import { autoComplete } from "./autoComplete"

export default {
  title: "Components / Form",
}

export const AutoComplete = context => <StoryPage {...autoComplete} {...context} />
