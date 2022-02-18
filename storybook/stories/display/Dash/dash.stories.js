import React from "react"

import { StoryPage } from "@components"

import { dash } from "./dash"

export default {
  title: "Components / Display",
}

export const Dash = context => <StoryPage {...dash} {...context} />
