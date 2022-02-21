import React from "react"

import { StoryPage } from "@components"

import { checkbox } from "./checkbox"

export default {
  title: "Components / Form",
}

export const Checkbox = context => <StoryPage {...checkbox} {...context} />
