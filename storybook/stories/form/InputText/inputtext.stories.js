import React from "react"

import { StoryPage } from "@components"

import { inputtext } from "./inputtext"

export default {
  title: "Components / Form",
}

export const InputText = context => <StoryPage {...inputtext} {...context} />

InputText.storyName = "InputText"
