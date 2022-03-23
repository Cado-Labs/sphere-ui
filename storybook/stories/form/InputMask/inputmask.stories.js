import React from "react"

import { StoryPage } from "@components"

import { inputmask } from "./inputmask"

export default {
  title: "Components / Form",
}

export const InputMask = context => <StoryPage {...inputmask} {...context} />

InputMask.storyName = "InputMask"
