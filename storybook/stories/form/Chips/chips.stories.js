import React from "react"

import { StoryPage } from "@components"

import { chips } from "./chips"

export default {
  title: "Components / Form",
}

export const Chips = context => <StoryPage {...chips} {...context} />
