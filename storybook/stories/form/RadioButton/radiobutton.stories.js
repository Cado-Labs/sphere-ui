import React from "react"

import { StoryPage } from "@components"

import { radiobutton } from "./radiobutton"

export default {
  title: "Components / Form",
}

export const RadioButton = context => <StoryPage {...radiobutton} {...context} />

RadioButton.storyName = "RadioButton"
