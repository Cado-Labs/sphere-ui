import React from "react"

import { StoryPage } from "@components"

import { divider } from "./divider"

export default {
  title: "Components / Display",
}

export const Divider = context => <StoryPage {...divider} {...context} />
