import React from "react"

import { StoryPage } from "@components"

import { inputtextarea } from "./inputtextarea"

export default {
  title: "Components / Form",
}

export const InputTextarea = context => <StoryPage {...inputtextarea} {...context} />

InputTextarea.storyName = "InputTextarea"
