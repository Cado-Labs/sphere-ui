import React from "react"

import { StoryPage } from "@components"

import { badge } from "./badge"

export default {
  title: "Components / Display",
}

export const Badge = context => <StoryPage {...badge} {...context} />
