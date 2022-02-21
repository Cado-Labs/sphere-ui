import React from "react"

import { StoryPage } from "@components"

import { number } from "./number"

export default {
  title: "Components / Display",
}

export const Number = context => <StoryPage {...number} {...context} />
