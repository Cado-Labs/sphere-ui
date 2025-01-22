import React from "react"

import { StoryPage } from "@components"

import { menubar } from "./menubar"

export default {
  title: "Components / Display",
}

export const Menubar = context => <StoryPage {...menubar} {...context} />

Menubar.storyName = "Menubar"
