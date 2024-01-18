import React from "react"

import { StoryPage } from "@components"

import { filter } from "./filter"

export default {
  title: "Components / Display / Tree / Examples",
}

export const Filter = context => <StoryPage {...filter} {...context} />
