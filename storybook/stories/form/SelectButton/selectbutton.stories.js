import React from "react"

import { StoryPage } from "@components"

import { selectbutton } from "./selectbutton"

export default {
  title: "Components / Form",
}

export const SelectButton = context => <StoryPage {...selectbutton} {...context} />

SelectButton.storyName = "SelectButton"
