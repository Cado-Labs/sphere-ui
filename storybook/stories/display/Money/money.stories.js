import React from "react"

import { StoryPage } from "@components"

import { money } from "./money"

export default {
  title: "Components / Display",
}

export const Money = context => <StoryPage {...money} {...context} />
