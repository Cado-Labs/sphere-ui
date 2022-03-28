import React from "react"

import { StoryPage } from "@components"

import { inputnumber } from "./inputnumber"

export default {
  title: "Components / Form",
}

export const InputNumber = context => <StoryPage {...inputnumber} {...context} />

InputNumber.storyName = "InputNumber"
